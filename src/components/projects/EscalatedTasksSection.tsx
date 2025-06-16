import React from 'react';
import { Card } from '../ui/card';
import { Calendar, User } from 'lucide-react';
import { AI_Agent } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface EscalatedTasksSectionProps {}

const EscalatedTasksSection: React.FC<EscalatedTasksSectionProps> = () => {
  // Dummy data for escalated tasks
  const escalatedTasks: {
    id: string;
    title: string;
    agent: AI_Agent;
    dueDate: string;
  }[] = [
    {
      id: 'task1',
      title: 'Review candidate profiles for Senior Engineer',
      agent: {
        id: 'agent1',
        name: 'Sourcing Agent Alpha',
        imageIndex: 0,
        leadsFound: 1247,
        successRate: 94.2,
        avgResponseTime: '2.3h'
      },
      dueDate: '2024-06-20',
    },
    {
      id: 'task2',
      title: 'Prepare offer letter for Product Manager',
      agent: {
        id: 'agent3',
        name: 'Onboarding Agent Gamma',
        imageIndex: 3,
        leadsFound: 567,
        successRate: 92.1,
        avgResponseTime: '3.1h'
      },
      dueDate: '2024-06-22',
    },
  ];

  return (
    <div className="bg-gr-25 rounded-xl p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-poppins font-semibold text-n-500 mb-4">
        Your Escalated Tasks
      </h3>
      <div className="space-y-4">
        {escalatedTasks.map((task) => (
          <Card key={task.id} className="bg-white rounded-xl border border-n-100 p-4">
            <h4 className="text-sm font-poppins font-medium text-n-500 mb-2">
              {task.title}
            </h4>
            <div className="flex items-center justify-between text-xs font-poppins font-normal text-n-300">
              <div className="flex items-center space-x-2">
                <User className="w-3 h-3" />
                <span className="flex items-center space-x-1">
                  <img
                    src={getAgentImageByIndex(task.agent.imageIndex)}
                    alt={task.agent.name}
                    className="w-4 h-4 rounded-full object-cover"
                  />
                  <span>{task.agent.name}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Due: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EscalatedTasksSection;