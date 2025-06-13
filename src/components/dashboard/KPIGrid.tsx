import React from 'react';
import { KPICard } from '../ui/kpi-card';

const KPIGrid: React.FC = () => {
  // Sample chart data for different KPIs
  const offerAcceptanceData = [
    { value: 88 },
    { value: 92 },
    { value: 89 },
    { value: 94 },
    { value: 91 },
    { value: 95 },
    { value: 93 },
  ];

  const applicationCompletionData = [
    { value: 65 },
    { value: 72 },
    { value: 68 },
    { value: 75 },
    { value: 71 },
    { value: 78 },
    { value: 82 },
  ];

  const interviewHireData = [
    { value: 4.2 },
    { value: 3.8 },
    { value: 4.5 },
    { value: 3.9 },
    { value: 4.1 },
    { value: 3.6 },
    { value: 3.2 },
  ];

  const costPerHireData = [
    { value: 3200 },
    { value: 3400 },
    { value: 3100 },
    { value: 3600 },
    { value: 3300 },
    { value: 3000 },
    { value: 2800 },
  ];

  return (
    <div className="space-y-6">
      {/* Title and Description */}
      <div>
        <h2 className="text-xl font-poppins font-semibold text-n-500 mb-2">
          Overview KPIs
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          Quickly understand how your hiring performs
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Offer Acceptance Rate"
          currentValue="93%"
          trendValue="+2.1%"
          trendType="positive"
          chartData={offerAcceptanceData}
          chartKey="value"
        />
        
        <KPICard
          title="Application Completion Rate"
          currentValue="82%"
          trendValue="+4.3%"
          trendType="positive"
          chartData={applicationCompletionData}
          chartKey="value"
        />
        
        <KPICard
          title="Source of Hire Effectiveness"
          currentValue="68%"
          trendValue="+1.2%"
          trendType="positive"
        >
          <div className="space-y-1 text-xs text-n-300">
            <div className="flex justify-between">
              <span>Referrals</span>
              <span className="text-g-300">35%</span>
            </div>
            <div className="flex justify-between">
              <span>Job Boards</span>
              <span className="text-b-200">28%</span>
            </div>
            <div className="flex justify-between">
              <span>Social Media</span>
              <span className="text-k-300">15%</span>
            </div>
            <div className="flex justify-between">
              <span>Direct Apply</span>
              <span className="text-n-200">22%</span>
            </div>
          </div>
        </KPICard>
        
        <KPICard
          title="Interview-to-Hire Ratio"
          currentValue="3.2:1"
          trendValue="-12.5%"
          trendType="positive"
          chartData={interviewHireData}
          chartKey="value"
        />
        
        <KPICard
          title="Pipeline Conversion Rates"
          currentValue="24%"
          trendValue="-1.8%"
          trendType="negative"
        >
          <div className="space-y-1 text-xs text-n-300">
            <div className="flex justify-between">
              <span>Screening → Interview</span>
              <span className="text-g-300">65%</span>
            </div>
            <div className="flex justify-between">
              <span>Interview → Offer</span>
              <span className="text-b-200">45%</span>
            </div>
            <div className="flex justify-between">
              <span>Offer → Hire</span>
              <span className="text-k-300">85%</span>
            </div>
          </div>
        </KPICard>
        
        <KPICard
          title="Cost per Hire"
          currentValue="$2,800"
          trendValue="-12.5%"
          trendType="positive"
          chartData={costPerHireData}
          chartKey="value"
        />
      </div>
    </div>
  );
};

export default KPIGrid;