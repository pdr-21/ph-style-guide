import React from 'react';
import ChatInput from '../components/dashboard/ChatInput';
import KPIGrid from '../components/dashboard/KPIGrid';
import SparkleIcon from '../components/icons/SparkleIcon';
import InitiativesTable from '../components/projects/InitiativesTable';
import EscalatedTasksSection from '../components/projects/EscalatedTasksSection';
import GoDeeperSection from '../components/projects/GoDeeperSection';

const ProjectsPage: React.FC = () => {
  // Get current time for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  // Project-specific KPI data
  const projectKPIs = [
    {
      title: "Hiring Efficiency Score",
      currentValue: "87%",
      trendValue: "+5.2%",
      trendType: "positive" as const,
      chartData: [
        { value: 78 },
        { value: 82 },
        { value: 79 },
        { value: 85 },
        { value: 83 },
        { value: 89 },
        { value: 87 },
      ],
      chartKey: "value"
    },
    {
      title: "Quality of Hire",
      currentValue: "4.2/5",
      trendValue: "+0.3",
      trendType: "positive" as const,
      chartData: [
        { value: 3.8 },
        { value: 3.9 },
        { value: 4.0 },
        { value: 4.1 },
        { value: 4.0 },
        { value: 4.3 },
        { value: 4.2 },
      ],
      chartKey: "value"
    },
    {
      title: "Offer Acceptance Rate",
      currentValue: "91%",
      trendValue: "+3.1%",
      trendType: "positive" as const,
      chartData: [
        { value: 85 },
        { value: 88 },
        { value: 87 },
        { value: 90 },
        { value: 89 },
        { value: 93 },
        { value: 91 },
      ],
      chartKey: "value"
    },
    {
      title: "Early Retention Rate",
      currentValue: "94%",
      trendValue: "+2.8%",
      trendType: "positive" as const,
      children: (
        <div className="space-y-1 text-xs text-n-300">
          <div className="flex justify-between">
            <span>6 Month Retention</span>
            <span className="text-g-300">96%</span>
          </div>
          <div className="flex justify-between">
            <span>12 Month Retention</span>
            <span className="text-b-200">92%</span>
          </div>
          <div className="flex justify-between">
            <span>Performance Rating</span>
            <span className="text-k-300">4.1/5</span>
          </div>
        </div>
      )
    },
    {
      title: "Source Effectiveness",
      currentValue: "72%",
      trendValue: "+4.5%",
      trendType: "positive" as const,
      children: (
        <div className="space-y-1 text-xs text-n-300">
          <div className="flex justify-between">
            <span>LinkedIn</span>
            <span className="text-g-300">42%</span>
          </div>
          <div className="flex justify-between">
            <span>Referrals</span>
            <span className="text-b-200">31%</span>
          </div>
          <div className="flex justify-between">
            <span>Job Boards</span>
            <span className="text-k-300">18%</span>
          </div>
          <div className="flex justify-between">
            <span>Direct</span>
            <span className="text-n-200">9%</span>
          </div>
        </div>
      )
    },
    {
      title: "Agent Productivity",
      currentValue: "8.5",
      trendValue: "+1.2",
      trendType: "positive" as const,
      children: (
        <div className="space-y-1 text-xs text-n-300">
          <div className="flex justify-between">
            <span>Roles Filled/Month</span>
            <span className="text-g-300">8.5</span>
          </div>
          <div className="flex justify-between">
            <span>Interviews/Week</span>
            <span className="text-b-200">24</span>
          </div>
          <div className="flex justify-between">
            <span>Time to Fill</span>
            <span className="text-k-300">18 days</span>
          </div>
        </div>
      )
    }
  ];

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
            {/* Chat Input Component without toggle switch */}
            <ChatInput showToggleSwitch={false} />
          </div>
          
          {/* KPI Grid with project-specific data */}
          <KPIGrid kpis={projectKPIs} />
        </div>

        {/* Right column - 30% */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <EscalatedTasksSection />
          <GoDeeperSection />
        </div>
      </div>

      {/* Initiatives Section - Full Width */}
      <div className="mt-8">
        <InitiativesTable />
      </div>
    </div>
  );
};

export default ProjectsPage;