import React from 'react';
import ChatInput from '../components/dashboard/ChatInput';
import QuickCommandsGrid from '../components/dashboard/QuickCommandsGrid';
import SparkleIcon from '../components/icons/SparkleIcon';

const Dashboard: React.FC = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 max-w-7xl mx-auto">
        {/* Left column - 70% */}
        <div className="lg:col-span-7">
          {/* Gradient container */}
          <div className="flex flex-col gap-5 bg-gradient-to-bl from-b-40 to-white rounded-2xl p-8 mb-6">
            {/* Summary header with icon */}
            <div claddName="flex flex-col gap-7">
              <div className="flex items-center">
                <SparkleIcon className="mr-3" />
                <span className="text-sm font-poppins font-medium text-b-300">
                  Summary provided by X+
                </span>
              </div>
              
              {/* Greeting */}
              <h1 className="text-3xl font-poppins font-semibold text-n-500">
                {getGreeting()}, John
              </h1>

            </div>
            {/* Chat Input Component */}
            <ChatInput />
          </div>
        </div>

        {/* Right column - 30% */}
        <div className="lg:col-span-3">
          {/* Header */}
          <h2 className="text-xl font-poppins font-semibold text-n-500 mb-6">
            Look deeper in your data
          </h2>

          {/* Quick Commands Grid */}
          <QuickCommandsGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;