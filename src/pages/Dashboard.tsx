import React from 'react';
import ChatInput from '../components/dashboard/ChatInput';
import KPIGrid from '../components/dashboard/KPIGrid';
import MyJobsSection from '../components/dashboard/MyJobsSection';
import NewLeadsSection from '../components/dashboard/NewLeadsSection';
import UpcomingMeetingsSection from '../components/dashboard/UpcomingMeetingsSection';
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
                  Summary provided by X+
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
          
          {/* My Jobs Section */}
          <MyJobsSection />
          
          {/* New Leads Section */}
          <NewLeadsSection />
        </div>

        {/* Right column - 30% */}
        <div className="lg:col-span-3">
          {/* Upcoming Meetings Section */}
          <UpcomingMeetingsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;