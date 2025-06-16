import React from 'react';
import { Card } from '../ui/card';
import { User, Mail, Building, Phone, Calendar, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Human } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface HumanTask {
  id: string;
  title: string;
  status: 'completed' | 'pending' | 'overdue';
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

interface HumanProfileCardProps {
  human: Human;
  tasks: HumanTask[];
  className?: string;
}

const HumanProfileCard: React.FC<HumanProfileCardProps> = ({
  human,
  tasks,
  className = ''
}) => {
  // Calculate task statistics
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const overdueTasks = tasks.filter(task => task.status === 'overdue').length;

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Get task status styling
  const getTaskStatusStyling = (status: HumanTask['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-g-300 text-white';
      case 'pending':
        return 'bg-b-200 text-white';
      case 'overdue':
        return 'bg-r-300 text-white';
      default:
        return 'bg-n-200 text-white';
    }
  };

  // Get priority styling
  const getPriorityColor = (priority: HumanTask['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-r-400';
      case 'medium':
        return 'text-y-400';
      case 'low':
        return 'text-g-300';
      default:
        return 'text-n-300';
    }
  };

  return (
    <Card className={cn("bg-white rounded-xl border border-n-100 p-6 hover:border-n-200 hover:shadow-sm transition-all duration-200", className)}>
      {/* Human Header */}
      <div className="flex items-start space-x-4 mb-6">
        {/* Human Avatar */}
        <div className="w-12 h-12 bg-n-50 rounded-full flex items-center justify-center overflow-hidden">
          {human.imageIndex !== undefined ? (
            <img
              src={getAgentImageByIndex(human.imageIndex)}
              alt={human.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-6 h-6 text-n-300" />
          )}
        </div>
        
        {/* Human Info */}
        <div className="flex-1">
          <h3 className="text-lg font-poppins font-semibold text-n-500 mb-1">
            {human.name}
          </h3>
          <p className="text-sm font-poppins font-normal text-n-300 mb-1">
            {human.role}
          </p>
          <p className="text-xs font-poppins font-normal text-n-200">
            {human.department}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-poppins font-medium text-n-400">
          Contact Information
        </h4>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-n-300" />
            <span className="text-sm font-poppins font-normal text-n-500">
              {human.email}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Building className="w-4 h-4 text-n-300" />
            <span className="text-sm font-poppins font-normal text-n-500">
              {human.department}
            </span>
          </div>
        </div>
      </div>

      {/* Task Summary */}
      <div className="space-y-3 mb-4">
        <h4 className="text-sm font-poppins font-medium text-n-400">
          Assigned Tasks ({tasks.length})
        </h4>
        
        {/* Task Stats */}
        <div className="flex items-center space-x-4 text-xs font-poppins font-normal">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-g-300 rounded-full"></div>
            <span className="text-n-300">{completedTasks} Completed</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-b-200 rounded-full"></div>
            <span className="text-n-300">{pendingTasks} Pending</span>
          </div>
          {overdueTasks > 0 && (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-r-300 rounded-full"></div>
              <span className="text-n-300">{overdueTasks} Overdue</span>
            </div>
          )}
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {tasks.length === 0 ? (
          <div className="text-center py-4">
            <div className="text-sm text-n-300">
              No tasks assigned
            </div>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-n-40 transition-colors border border-n-75"
            >
              {/* Status Indicator */}
              <div className="flex-shrink-0 mt-1">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-poppins font-medium",
                  getTaskStatusStyling(task.status)
                )}>
                  {task.status === 'completed' ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    task.status.charAt(0).toUpperCase()
                  )}
                </div>
              </div>
              
              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div className="text-sm font-poppins font-medium text-n-500 truncate">
                    {task.title}
                  </div>
                  <div className="flex items-center space-x-2 ml-2">
                    <span className={cn(
                      "text-xs font-poppins font-medium capitalize",
                      getPriorityColor(task.priority)
                    )}>
                      {task.priority}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs font-poppins font-normal text-n-300">
                  <Calendar className="w-3 h-3" />
                  <span>Due: {formatDate(task.dueDate)}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default HumanProfileCard;
export type { HumanTask };