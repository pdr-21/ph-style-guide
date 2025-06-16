import React from 'react';
import ChatInput from '../components/dashboard/ChatInput';
import KPIGrid from '../components/dashboard/KPIGrid';
import SparkleIcon from '../components/icons/SparkleIcon';

const ProjectsPage: React.FC = () => {
  // Get current time for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="p-8">
      {/* Main grid layout - 70/30 split */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mx-auto">
        {/* Left column - 70% */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Gradient container */}
          <div className="flex flex-col gap-6 bg-gradient-to-bl from-b-40 to-white rounded-2xl p-6">
            {/* Summary header with icon */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <SparkleIcon className="mr-3" />
                <span className="text-sm font-poppins font-medium text-b-300">
                  Project insights provided by X+
                </span>
              </div>
              
              {/* Greeting */}
              <h1 className="text-2xl font-poppins font-semibold text-n-500">
                {getGreeting()}, John
              </h1>
            </div>
            {/* Chat Input Component */}
            <ChatInput />
          </div>
          
          {/* KPI Grid */}
          <KPIGrid />
        </div>

        {/* Right column - 30% */}
        <div className="lg:col-span-3">
          {/* Empty container with matching background */}
          <div className="bg-gr-25 rounded-xl p-6 h-full min-h-[400px]">
            {/* Placeholder content */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-n-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-n-200 rounded"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Project Sidebar
                </h3>
                <p className="text-sm text-gray-600">
                  Additional project content will be added here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;