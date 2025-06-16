import React from 'react';
import { Card } from '../ui/card';
import { Calendar, User, AlertTriangle } from 'lucide-react';
import { AI_Agent } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface EscalatedTask {
  id: string;
  title: string;
  description: string;
  agent: AI_Agent;
  dueDate: string;
  escalationReason: string;
  priority: 'high' | 'critical';
}

interface EscalatedTasksListProps {
  className?: string;
}

const EscalatedTasksList: React.FC<EscalatedTasksListProps> = ({ 
  className = '' 
}) => {
  // Sample escalated tasks data
  const escalatedTasks: EscalatedTask[] = [
    {
      id: 'escalated1',
      title: 'Review candidate profiles for Senior Engineer',
      description: 'Technical assessment scores are inconsistent and require human review to determine next steps',
      agent: {
        id: 'agent1',
        name: 'Sourcing Agent Alpha',
        imageIndex: 0,
        leadsFound: 1247,
        successRate: 94.2,
        avgResponseTime: '2.3h'
      },
      dueDate: '2024-06-20',
      escalationReason: 'Inconsistent assessment results',
      priority: 'high'
    },
    {
      id: 'escalated2',
      title: 'Prepare offer letter for Product Manager',
      description: 'Salary negotiation requires approval beyond standard range parameters',
      agent: {
        id: 'agent3',
        name: 'Onboarding Agent Gamma',
        imageIndex: 3,
        leadsFound: 567,
        successRate: 92.1,
        avgResponseTime: '3.1h'
      },
      dueDate: '2024-06-22',
      escalationReason: 'Salary above approved range',
      priority: 'critical'
    },
    {
      id: 'escalated3',
      title: 'Schedule technical interviews',
      description: 'Candidate availability conflicts with interviewer schedules across multiple time zones',
      agent: {
        id: 'agent2',
        name: 'Screening Agent Beta',
        imageIndex: 1,
        leadsFound: 892,
        successRate: 89.7,
        avgResponseTime: '1.8h'
      },
      dueDate: '2024-06-25',
      escalationReason: 'Scheduling conflicts',
      priority: 'high'
    },
    {
      id: 'escalated4',
      title: 'Configure HRIS integration',
      description: 'System integration requires additional security approvals and custom API development',
      agent: {
        id: 'agent3',
        name: 'Onboarding Agent Gamma',
        imageIndex: 3,
        leadsFound: 567,
        successRate: 92.1,
        avgResponseTime: '3.1h'
      },
      dueDate: '2024-06-28',
      escalationReason: 'Security approval required',
      priority: 'critical'
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get priority styling
  const getPriorityStyling = (priority: EscalatedTask['priority']) => {
    switch (priority) {
      case 'critical':
        return 'bg-r-100 text-r-400 border border-r-200';
      case 'high':
        return 'bg-y-100 text-y-400 border border-y-200';
      default:
        return 'bg-n-50 text-n-400 border border-n-100';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl font-poppins font-semibold text-n-500">
          Escalated Tasks
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          Tasks that require human intervention and decision-making
        </p>
      </div>

      {/* Escalated Tasks List */}
      <div className="space-y-4">
        {escalatedTasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-sm text-n-300">
              No escalated tasks at this time
            </div>
          </div>
        ) : (
          escalatedTasks.map((task) => (
            <Card key={task.id} className="bg-white rounded-xl border border-n-100 p-6 hover:border-n-200 hover:shadow-sm transition-all duration-200">
              {/* Task Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-r-400" />
                    <h3 className="text-lg font-poppins font-semibold text-n-500">
                      {task.title}
                    </h3>
                  </div>
                  <p className="text-sm font-poppins font-normal text-n-300 leading-relaxed">
                    {task.description}
                  </p>
                </div>
                
                {/* Priority Badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-poppins font-medium capitalize ml-4 ${getPriorityStyling(task.priority)}`}>
                  {task.priority} Priority
                </span>
              </div>

              {/* Task Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Agent Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-n-300" />
                    <span className="text-sm font-poppins font-medium text-n-400">Assigned Agent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-n-50 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={getAgentImageByIndex(task.agent.imageIndex)}
                        alt={task.agent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-poppins font-medium text-n-500">
                        {task.agent.name}
                      </div>
                      <div className="text-xs font-poppins font-normal text-n-300">
                        {task.agent.successRate}% success rate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Due Date */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-n-300" />
                    <span className="text-sm font-poppins font-medium text-n-400">Due Date</span>
                  </div>
                  <div className="text-sm font-poppins font-medium text-n-500">
                    {formatDate(task.dueDate)}
                  </div>
                </div>
              </div>

              {/* Escalation Reason */}
              <div className="bg-r-50 border border-r-100 rounded-lg p-3">
                <div className="text-sm font-poppins font-medium text-r-400 mb-1">
                  Escalation Reason
                </div>
                <div className="text-sm font-poppins font-normal text-r-400">
                  {task.escalationReason}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default EscalatedTasksList;