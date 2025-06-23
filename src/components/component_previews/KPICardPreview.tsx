import React from 'react';
import { KPICard } from '../ui/kpi-card';
import { 
  Workflow, 
  DollarSign, 
  Users, 
  Activity, 
  ShoppingCart, 
  MessageSquare,
  TrendingUp,
  Target,
  Clock,
  BarChart3
} from 'lucide-react';

const KPICardPreview: React.FC = () => {
  // Sample chart data
  const salesChartData = [
    { value: 400 },
    { value: 300 },
    { value: 500 },
    { value: 280 },
    { value: 590 },
    { value: 320 },
    { value: 450 },
  ];

  const usersChartData = [
    { value: 120 },
    { value: 150 },
    { value: 180 },
    { value: 200 },
    { value: 170 },
    { value: 220 },
    { value: 250 },
  ];

  const conversionChartData = [
    { value: 2.1 },
    { value: 2.8 },
    { value: 3.2 },
    { value: 2.9 },
    { value: 3.5 },
    { value: 3.8 },
    { value: 4.2 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-7xl space-y-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">KPI Card Component</h1>
          <p className="text-gray-600">Key Performance Indicator cards with charts and trend indicators</p>
        </div>

        {/* Cards with Charts */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Cards with Charts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KPICard
                title="Total Revenue"
                currentValue="$45,231"
                trendValue="+20.1%"
                trendType="positive"
                chartData={salesChartData}
                chartKey="value"
              />
              
              <KPICard
                title="Active Users"
                currentValue="2,350"
                trendValue="+15.3%"
                trendType="positive"
                chartData={usersChartData}
                chartKey="value"
              />
              
              <KPICard
                title="Conversion Rate"
                currentValue="4.2%"
                trendValue="-2.4%"
                trendType="negative"
                chartData={conversionChartData}
                chartKey="value"
              />
              
              <KPICard
                title="Avg. Session"
                currentValue="3m 24s"
                trendValue="0%"
                trendType="neutral"
                chartData={salesChartData}
                chartKey="value"
              />
            </div>
          </div>

          {/* Cards with List Items */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Cards with List Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KPICard
                title="Top Products"
                currentValue="156"
                trendValue="+12%"
                trendType="positive"
              >
                <div className="space-y-1 text-xs text-n-300">
                  <div className="flex justify-between">
                    <span>Product A</span>
                    <span>45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product B</span>
                    <span>32</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product C</span>
                    <span>28</span>
                  </div>
                </div>
              </KPICard>
              
              <KPICard
                title="Support Tickets"
                currentValue="23"
                trendValue="-8.2%"
                trendType="positive"
              >
                <div className="space-y-1 text-xs text-n-300">
                  <div className="flex justify-between">
                    <span>Open</span>
                    <span className="text-y-300">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In Progress</span>
                    <span className="text-b-200">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolved</span>
                    <span className="text-g-300">3</span>
                  </div>
                </div>
              </KPICard>
              
              <KPICard
                title="Team Goals"
                currentValue="8/12"
                trendValue="+25%"
                trendType="positive"
              >
                <div className="space-y-1 text-xs text-n-300">
                  <div className="flex justify-between">
                    <span>Completed</span>
                    <span className="text-g-300">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In Progress</span>
                    <span className="text-b-200">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending</span>
                    <span className="text-n-200">1</span>
                  </div>
                </div>
              </KPICard>
              
              <KPICard
                title="Workflows"
                currentValue="42"
                trendValue="0%"
                trendType="neutral"
              >
                <div className="space-y-1 text-xs text-n-300">
                  <div className="flex justify-between">
                    <span>Active</span>
                    <span className="text-g-300">38</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paused</span>
                    <span className="text-y-300">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Draft</span>
                    <span className="text-n-200">1</span>
                  </div>
                </div>
              </KPICard>
            </div>
          </div>

          {/* Cards without Middle Content */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Simple KPI Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KPICard
                title="Total Orders"
                currentValue="1,234"
                trendValue="+5.4%"
                trendType="positive"
              />
              
              <KPICard
                title="Page Views"
                currentValue="98.5K"
                trendValue="-1.2%"
                trendType="negative"
              />
              
              <KPICard
                title="Bounce Rate"
                currentValue="24.8%"
                trendValue="0%"
                trendType="neutral"
              />
              
              <KPICard
                title="API Calls"
                currentValue="2.1M"
                trendValue="+18.7%"
                trendType="positive"
              />
            </div>
          </div>

          {/* Different Trend Types Demo */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Trend Type Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <KPICard
                title="Positive Trend"
                currentValue="$12,450"
                trendValue="+15.3%"
                trendType="positive"
                chartData={salesChartData}
                chartKey="value"
              />
              
              <KPICard
                title="Negative Trend"
                currentValue="892"
                trendValue="-8.7%"
                trendType="negative"
                chartData={usersChartData}
                chartKey="value"
              />
              
              <KPICard
                title="Neutral Trend"
                currentValue="45.2%"
                trendValue="0%"
                trendType="neutral"
                chartData={conversionChartData}
                chartKey="value"
              />
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Interactive Demo</h2>
            <p className="text-sm text-gray-600 mb-4">
              Hover over the chart areas to see tooltips with data values:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg max-w-4xl">
              <KPICard
                title="Monthly Sales"
                currentValue="$28,450"
                trendValue="+12.5%"
                trendType="positive"
                chartData={salesChartData}
                chartKey="value"
              />
              
              <KPICard
                title="Customer Growth"
                currentValue="1,847"
                trendValue="+8.3%"
                trendType="positive"
                chartData={usersChartData}
                chartKey="value"
              />
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Component Features</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Fixed Dimensions:</strong> 16.75rem × 10.75rem for consistent grid layouts</p>
                <p><strong>Flexible Content:</strong> Supports charts, lists, or simple value display</p>
                <p><strong>Trend Indicators:</strong> Visual badges with appropriate colors and icons</p>
                <p><strong>Interactive Charts:</strong> Recharts integration with hover tooltips</p>
                <p><strong>Icon Support:</strong> Lucide React icons for visual context</p>
                <p><strong>Info Icon:</strong> Optional information icon for additional context</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Best Practices</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Data Clarity:</strong> Use clear, concise titles and meaningful values</p>
                <p><strong>Trend Context:</strong> Include time period context in trend values</p>
                <p><strong>Color Coding:</strong> Green for positive, red for negative, gray for neutral</p>
                <p><strong>Chart Data:</strong> Provide 5-10 data points for optimal chart display</p>
                <p><strong>Responsive:</strong> Consider grid layouts that work across screen sizes</p>
                <p><strong>Accessibility:</strong> Ensure sufficient color contrast for all text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPICardPreview;