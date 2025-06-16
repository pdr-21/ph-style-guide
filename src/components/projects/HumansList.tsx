import React from 'react';
import HumanProfileCard from './HumanProfileCard';
import type { HumanTask } from './HumanProfileCard';
import { Human } from '../../types';
import { cn } from '../../lib/utils';

interface HumansListProps {
  humans: Human[];
  className?: string;
}

const HumansList: React.FC<HumansListProps> = ({
  humans,
  className = ''
}) => {
  // Generate sample tasks for each human based on their role
  const getHumanTasks = (human: Human): HumanTask[] => {
    // Sample tasks based on role and common hiring workflow
    const taskTemplates = {
      'Senior Hiring Manager': [
        { title: 'Review final candidate recommendations', status: 'pending' as const, dueDate: '2024-06-25', priority: 'high' as const },
        { title: 'Approve job posting updates', status: 'completed' as const, dueDate: '2024-06-20', priority: 'medium' as const },
        { title: 'Conduct final interviews', status: 'pending' as const, dueDate: '2024-06-28', priority: 'high' as const },
        { title: 'Review salary benchmarking', status: 'overdue' as const, dueDate: '2024-06-18', priority: 'medium' as const },
        { title: 'Sign off on offer letters', status: 'pending' as const, dueDate: '2024-06-30', priority: 'high' as const }
      ],
      'HR Operations Lead': [
        { title: 'Review onboarding process changes', status: 'pending' as const, dueDate: '2024-06-26', priority: 'high' as const },
        { title: 'Approve system integration plan', status: 'completed' as const, dueDate: '2024-06-22', priority: 'medium' as const },
        { title: 'Update employee handbook', status: 'pending' as const, dueDate: '2024-06-29', priority: 'low' as const },
        { title: 'Review training materials', status: 'overdue' as const, dueDate: '2024-06-19', priority: 'medium' as const }
      ],
      'Sales Director': [
        { title: 'Approve territory assignments', status: 'completed' as const, dueDate: '2024-06-21', priority: 'high' as const },
        { title: 'Review sales training curriculum', status: 'completed' as const, dueDate: '2024-06-23', priority: 'medium' as const },
        { title: 'Sign off on commission structure', status: 'completed' as const, dueDate: '2024-06-24', priority: 'high' as const }
      ],
      'Support Manager': [
        { title: 'Review support capacity analysis', status: 'pending' as const, dueDate: '2024-06-27', priority: 'high' as const },
        { title: 'Approve hiring timeline', status: 'pending' as const, dueDate: '2024-06-25', priority: 'medium' as const },
        { title: 'Review escalation procedures', status: 'overdue' as const, dueDate: '2024-06-20', priority: 'high' as const }
      ],
      'L&D Manager': [
        { title: 'Review leadership assessment results', status: 'completed' as const, dueDate: '2024-06-22', priority: 'medium' as const },
        { title: 'Approve program curriculum', status: 'pending' as const, dueDate: '2024-06-28', priority: 'high' as const },
        { title: 'Review budget allocation', status: 'pending' as const, dueDate: '2024-06-26', priority: 'medium' as const }
      ]
    };

    // Get tasks for this specific human, or generate generic ones
    const humanSpecificTasks = taskTemplates[human.role as keyof typeof taskTemplates];
    
    if (humanSpecificTasks) {
      return humanSpecificTasks.map((task, index) => ({
        id: `${human.id}-task-${index}`,
        ...task
      }));
    }

    // Generic tasks for other roles
    return [
      {
        id: `${human.id}-task-1`,
        title: 'Review initiative progress',
        status: 'pending' as const,
        dueDate: '2024-06-25',
        priority: 'medium' as const
      },
      {
        id: `${human.id}-task-2`,
        title: 'Approve next phase',
        status: 'pending' as const,
        dueDate: '2024-06-28',
        priority: 'high' as const
      }
    ];
  };

  if (humans.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <div className="text-sm text-n-300">
          No humans assigned to this initiative
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl font-poppins font-semibold text-n-500">
          Human in the Loop
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          Human oversight and decision-making for this initiative
        </p>
      </div>

      {/* Humans List */}
      <div className="space-y-6">
        {humans.map((human) => (
          <HumanProfileCard
            key={human.id}
            human={human}
            tasks={getHumanTasks(human)}
          />
        ))}
      </div>
    </div>
  );
};

export default HumansList;