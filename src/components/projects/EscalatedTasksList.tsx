import React from 'react';
import EscalatedTaskCard from './EscalatedTaskCard';
import type { EscalatedTask } from './EscalatedTaskCard';
import { cn } from '../../lib/utils';

interface EscalatedTasksListProps {
  tasks: EscalatedTask[];
  className?: string;
}

const EscalatedTasksList: React.FC<EscalatedTasksListProps> = ({
  tasks,
  className = ''
}) => {
  if (tasks.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <div className="w-16 h-16 bg-g-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-g-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-poppins font-medium text-n-500 mb-2">
          No Escalated Tasks
        </h3>
        <p className="text-sm text-n-300">
          All tasks are running smoothly without any escalations.
        </p>
      </div>
    );
  }

  // Sort tasks by priority and escalation date
  const sortedTasks = [...tasks].sort((a, b) => {
    // Priority order: high > medium > low
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    
    if (priorityDiff !== 0) return priorityDiff;
    
    // If same priority, sort by escalation date (most recent first)
    return new Date(b.escalatedDate).getTime() - new Date(a.escalatedDate).getTime();
  });

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl font-poppins font-semibold text-n-500">
          Escalated Tasks
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          {tasks.length} task{tasks.length !== 1 ? 's' : ''} requiring immediate attention
        </p>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {sortedTasks.map((task) => (
          <EscalatedTaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default EscalatedTasksList;