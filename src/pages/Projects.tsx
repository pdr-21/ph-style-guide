import React, { useCallback } from 'react';
import ProjectFilterBar from '../components/projects/ProjectFilterBar';
import ProjectTable from '../components/projects/ProjectTable';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('all-projects');
  const [refreshKey, setRefreshKey] = React.useState(0);

  // Memoized callback to trigger refresh
  const triggerRefresh = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  return (
    <div>
      <div className="border-b border-n-75 pb-6 pt-6 px-8">
        <ProjectFilterBar 
          onFilterChange={setActiveFilter} 
          activeFilter={activeFilter}
          refreshKey={refreshKey}
        />
      </div>
      
      <div className="pt-8 px-8">
        <ProjectTable 
          activeFilter={activeFilter}
          refreshKey={refreshKey}
          triggerRefresh={triggerRefresh}
        />
      </div>
    </div>
  );
};

export default Projects;