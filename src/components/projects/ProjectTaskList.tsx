import React from 'react';
import { Card } from '../ui/card';
import { Calendar, User } from 'lucide-react';
import { AI_Agent } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface ProjectTask {
  id: string;
  title: string;
  dueDate: string;
  agent?: AI_Agent;
}

interface ProjectTaskListProps {
  tasks: ProjectTask[];
  className?: string;
}

const ProjectTaskList: React.FC<ProjectTaskListProps> = ({ 
  tasks, 
  className = '' 
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {tasks.length === 0 ? (
        <div className="text-center py-6">
          <div className="text-sm text-n-300">
            No tasks assigned yet
          </div>
        </div>
      ) : (
        tasks.map((task) => (
          <Card key={task.id} className="bg-white rounded-xl border border-n-100 p-3 hover:border-n-200 hover:shadow-sm transition-all duration-200">
            <h4 className="text-sm font-poppins font-medium text-n-500 mb-2">
              {task.title}
            </h4>
            <div className="flex items-center justify-between text-xs font-poppins font-normal text-n-300">
              {/* Agent info */}
              {task.agent && (
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
              )}
              
              {/* Due date */}
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Due: {formatDate(task.dueDate)}</span>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default ProjectTaskList;
export type { ProjectTask };