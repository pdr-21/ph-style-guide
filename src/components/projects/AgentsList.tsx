import React from 'react';
import AgentProfileCard from './AgentProfileCard';
import type { AgentTask } from './AgentProfileCard';
import { AI_Agent } from '../../types';
import { cn } from '../../lib/utils';

interface AgentsListProps {
  agents: AI_Agent[];
  className?: string;
}

const AgentsList: React.FC<AgentsListProps> = ({
  agents,
  className = ''
}) => {
  // Generate sample tasks for each agent based on their role and the initiative
  const getAgentTasks = (agent: AI_Agent): AgentTask[] => {
    // Sample tasks based on agent type and common hiring workflow
    const taskTemplates = {
      'Sourcing Agent Alpha': [
        { title: 'Source senior engineering candidates', status: 'completed' as const, milestone: 'Candidate Sourcing' },
        { title: 'Review candidate profiles', status: 'completed' as const, milestone: 'Candidate Sourcing' },
        { title: 'Update candidate database', status: 'completed' as const, milestone: 'Candidate Sourcing' },
        { title: 'Prepare final interview questions', status: 'not-started' as const, milestone: 'Final Interviews' },
        { title: 'Coordinate with hiring managers', status: 'not-started' as const, milestone: 'Final Interviews' }
      ],
      'Screening Agent Beta': [
        { title: 'Conduct initial phone screenings', status: 'in-progress' as const, milestone: 'Initial Screening' },
        { title: 'Technical assessment review', status: 'in-progress' as const, milestone: 'Initial Screening' },
        { title: 'Schedule technical interviews', status: 'in-progress' as const, milestone: 'Initial Screening' },
        { title: 'Prepare onboarding materials', status: 'not-started' as const, milestone: 'Offer & Onboarding' },
        { title: 'Setup new hire workflows', status: 'not-started' as const, milestone: 'Offer & Onboarding' }
      ],
      'Onboarding Agent Gamma': [
        { title: 'Analyze current onboarding process', status: 'completed' as const, milestone: 'Process Analysis' },
        { title: 'Document process improvements', status: 'completed' as const, milestone: 'Process Analysis' },
        { title: 'Configure HRIS integration', status: 'in-progress' as const, milestone: 'System Integration' },
        { title: 'Test automated workflows', status: 'in-progress' as const, milestone: 'System Integration' },
        { title: 'Create training videos', status: 'not-started' as const, milestone: 'Training Materials' }
      ]
    };

    // Get tasks for this specific agent, or generate generic ones
    const agentSpecificTasks = taskTemplates[agent.name as keyof typeof taskTemplates];
    
    if (agentSpecificTasks) {
      return agentSpecificTasks.map((task, index) => ({
        id: `${agent.id}-task-${index}`,
        ...task
      }));
    }

    // Generic tasks for other agents
    return [
      {
        id: `${agent.id}-task-1`,
        title: 'Review assigned candidates',
        status: 'completed' as const,
        milestone: 'Candidate Review'
      },
      {
        id: `${agent.id}-task-2`,
        title: 'Process applications',
        status: 'in-progress' as const,
        milestone: 'Application Processing'
      },
      {
        id: `${agent.id}-task-3`,
        title: 'Schedule interviews',
        status: 'not-started' as const,
        milestone: 'Interview Coordination'
      }
    ];
  };

  if (agents.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <div className="text-sm text-n-300">
          No agents assigned to this initiative
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl font-poppins font-semibold text-n-500">
          AI Agents
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          {agents.length} agent{agents.length !== 1 ? 's' : ''} working on this initiative
        </p>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents.map((agent) => (
          <AgentProfileCard
            key={agent.id}
            agent={agent}
            tasks={getAgentTasks(agent)}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentsList;