import React from 'react';
import { Card } from '../ui/card';
import { Calendar, User, AlertTriangle, Clock } from 'lucide-react';
import { AI_Agent } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface EscalatedTask {
  id: string;
  title: string;
  description: string;
  agent: AI_Agent;
  dueDate: string;
  escalatedDate: string;
  priority: 'high' | 'medium' | 'low';
  reason: string;
}

interface EscalatedTaskCardProps {
  task: EscalatedTask;
  className?: string;
}

const EscalatedTaskCard: React.FC<EscalatedTaskCardProps> = ({ 
  task, 
  className = '' 
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Get priority styling
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-r-400 bg-r-50';
      case 'medium':
        return 'text-y-400 bg-y-100';
      case 'low':
        return 'text-n-400 bg-n-50';
      default:
        return 'text-n-400 bg-n-50';
    }
  };

  return (
    <Card className={`bg-white rounded-xl border border-r-200 border-l-4 border-l-r-400 p-4 hover:border-r-300 hover:shadow-sm transition-all duration-200 ${className}`}>
      {/* Header with Priority */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-r-400" />
          <span className={`px-2 py-1 rounded-lg text-xs font-poppins font-medium capitalize ${getPriorityColor(task.priority)}`}>
            {task.priority} Priority
          </span>
        </div>
        <div className="text-xs font-poppins font-normal text-n-300">
          Escalated {formatDate(task.escalatedDate)}
        </div>
      </div>

      {/* Task Title and Description */}
      <h4 className="text-sm font-poppins font-medium text-n-500 mb-2">
        {task.title}
      </h4>
      <p className="text-xs font-poppins font-normal text-n-300 mb-3 leading-relaxed">
        {task.description}
      </p>

      {/* Escalation Reason */}
      <div className="bg-r-50 border border-r-100 rounded-lg p-3 mb-3">
        <div className="text-xs font-poppins font-medium text-r-400 mb-1">
          Escalation Reason
        </div>
        <div className="text-xs font-poppins font-normal text-r-400">
          {task.reason}
        </div>
      </div>

      {/* Footer with Agent and Due Date */}
      <div className="flex items-center justify-between text-xs font-poppins font-normal text-n-300">
        {/* Agent */}
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
        
        {/* Due Date */}
        <div className="flex items-center space-x-1">
          <Calendar className="w-3 h-3" />
          <span>Due: {formatDate(task.dueDate)}</span>
        </div>
      </div>
    </Card>
  );
};

export default EscalatedTaskCard;
export type { EscalatedTask };