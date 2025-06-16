import React from 'react';
import ProjectActionItem from './ProjectActionItem';
import { ProjectAction } from '../../types';
import { cn } from '../../lib/utils';

interface ProjectActionsListProps {
  actions: ProjectAction[];
  className?: string;
}

const ProjectActionsList: React.FC<ProjectActionsListProps> = ({
  actions,
  className = ''
}) => {
  // Group actions by category
  const groupedActions = actions.reduce((groups, action) => {
    const category = action.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(action);
    return groups;
  }, {} as Record<string, ProjectAction[]>);

  // Get category order (you can customize this order as needed)
  const categoryOrder = Object.keys(groupedActions).sort();

  if (actions.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <div className="text-sm text-n-300">
          No actions available for this initiative
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-8", className)}>
      {categoryOrder.map((category) => (
        <div key={category} className="space-y-4">
          {/* Category Header */}
          <div className="border-b border-n-100 pb-2">
            <h3 className="text-lg font-poppins font-semibold text-n-500">
              {category}
            </h3>
            <p className="text-sm font-poppins font-normal text-n-300">
              {groupedActions[category].length} action{groupedActions[category].length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {/* Actions in this category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupedActions[category].map((action) => (
              <ProjectActionItem
                key={action.id}
                action={action}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectActionsList;