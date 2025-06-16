import React from 'react';

const ProjectTemplatePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-gr-25 p-8">
      {/* Main grid layout - 70/30 split */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 h-full">
        {/* Left container - 70% */}
        <div className="lg:col-span-7 bg-white border border-n-75 rounded-xl p-6 flex flex-col">
          {/* Left container content will go here */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-n-300">
              <h3 className="text-lg font-poppins font-medium mb-2">Left Container</h3>
              <p className="text-sm">Content will be populated here</p>
            </div>
          </div>
        </div>

        {/* Right container - 30% */}
        <div className="lg:col-span-3 bg-white border border-n-75 rounded-xl p-6 flex flex-col">
          {/* Right container content will go here */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-n-300">
              <h3 className="text-lg font-poppins font-medium mb-2">Right Container</h3>
              <p className="text-sm">Content will be populated here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplatePage;