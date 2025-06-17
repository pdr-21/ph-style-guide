import React from 'react';
import { Card } from '../ui/card';
import { User, Target, Clock, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AI_Agent } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface AgentTask {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'not-started';
  milestone: string;
}

interface AgentProfileCardProps {
  agent: AI_Agent;
  tasks: AgentTask[];
  className?: string;
}

const AgentProfileCard: React.FC<AgentProfileCardProps> = ({
  agent,
  tasks,
  className = ''
}) => {
  // Calculate task statistics
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const notStartedTasks = tasks.filter(task => task.status === 'not-started').length;

  return (
    <Card className={cn("bg-white rounded-xl border border-n-75 p-6 hover:border-n-200 hover:shadow-sm transition-all duration-200", className)}>
      {/* Agent Header */}
      <div className="flex items-start space-x-4 mb-6">
        {/* Agent Avatar */}
        <div className="w-12 h-12 bg-n-50 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={getAgentImageByIndex(agent.imageIndex)}
            alt={agent.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Agent Info */}
        <div className="flex-1">
          <h3 className="text-lg font-poppins font-semibold text-n-500 mb-1">
            {agent.name}
          </h3>
          <p className="text-sm font-poppins font-normal text-n-300">
            AI Sourcing Agent
          </p>
        </div>
      </div>

      {/* Agent Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Target className="w-3 h-3 text-n-300" />
          </div>
          <div className="text-sm font-poppins font-semibold text-n-500">
            {agent.successRate}%
          </div>
          <div className="text-xs font-poppins font-normal text-n-300">
            Success Rate
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Clock className="w-3 h-3 text-n-300" />
          </div>
          <div className="text-sm font-poppins font-semibold text-n-500">
            {agent.avgResponseTime}
          </div>
          <div className="text-xs font-poppins font-normal text-n-300">
            Avg Response
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <TrendingUp className="w-3 h-3 text-n-300" />
          </div>
          <div className="text-sm font-poppins font-semibold text-n-500">
            {agent.leadsFound.toLocaleString()}
          </div>
          <div className="text-xs font-poppins font-normal text-n-300">
            Leads Found
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
            <span className="text-n-300">{inProgressTasks} In Progress</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-n-200 rounded-full"></div>
            <span className="text-n-300">{notStartedTasks} Not Started</span>
          </div>
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
              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-n-40 transition-colors"
            >
              {/* Status Indicator */}
              <div className="flex-shrink-0 mt-1">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  task.status === 'completed' ? "bg-g-300" :
                  task.status === 'in-progress' ? "bg-b-200" : "bg-n-200"
                )}></div>
              </div>
              
              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-poppins font-medium text-n-500 truncate">
                  {task.title}
                </div>
                <div className="text-xs font-poppins font-normal text-n-300">
                  {task.milestone}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default AgentProfileCard;
export type { AgentTask };