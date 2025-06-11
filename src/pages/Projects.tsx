import React from 'react';
import ProjectFilterBar from '../components/projects/ProjectFilterBar';
import ProjectTable from '../components/projects/ProjectTable';

const Projects: React.FC = () => {
  return (
    <div>
      <div className="border-b border-n-75 pb-6 pt-6 px-8">
        <ProjectFilterBar />
      </div>
      
      <div className="pt-8 px-8">
        <ProjectTable />
      </div>
    </div>
  );
};

export default Projects;