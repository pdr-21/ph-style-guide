import React from 'react';
import ProjectFilterBar from '../components/projects/ProjectFilterBar';
import ProjectTable from '../components/projects/ProjectTable';

const Projects: React.FC = () => {
  return (
    <div>
      <div className="border-b border-n-75">
        <div className="pb-6 pt-6 px-8">
          <ProjectFilterBar />
        </div>
      </div>
      
      <div className="border-b border-n-75">
        <div className="pt-8 px-8 pb-8">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
};

export default Projects;