import React from 'react';
import { KPICard } from '../ui/KPICard';
import { Tag } from '../ui/Tag';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Calendar, 
  Mail,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react';

const KPICardPreview: React.FC = () => {
  // Sample chart component (placeholder)
  const SampleChart = () => (
    <div className="w-full h-16 bg-gradient-to-r from-b-40 to-b-100 rounded-lg flex items-end justify-between px-2 pb-1">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bg-b-200 rounded-sm"
          style={{
            width: '8px',
            height: `${Math.random() * 40 + 10}px`,
          }}
        />
      ))}
    </div>
  );

  // Sample list component
  const SampleList = () => (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-n-300">Active</span>
        <span className="text-n-500 font-medium">24</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-n-300">Pending</span>
        <span className="text-n-500 font-medium">8</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-n-300">Completed</span>
        <span className="text-n-500 font-medium">156</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">KPI Card Component</h1>
          <p className="text-gray-600">Flexible KPI card component for displaying key performance indicators</p>
        </div>

        {/* Basic KPI Cards */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Basic KPI Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <KPICard
                icon={TrendingUp}
                name="Workflow Completion"
                currentValue="95%"
                trendValue="6.8%"
                trendType="positive"
              />
              
              <KPICard
                icon={Users}
                name="Active Users"
                currentValue="1,234"
                trendValue="2.1%"
                trendType="negative"
              />
              
              <KPICard
                icon={DollarSign}
                name="Revenue"
                currentValue="$45.2K"
                trendValue="0.0%"
                trendType="neutral"
              />
            </div>
          </div>

          {/* KPI Cards with Charts */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">KPI Cards with Charts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <KPICard
                icon={Target}
                name="Goal Progress"
                currentValue="87%"
                trendValue="12.5%"
                trendType="positive"
              >
                <SampleChart />
              </KPICard>
              
              <KPICard
                icon={Calendar}
                name="Monthly Tasks"
                currentValue="156"
                trendValue="8.3%"
                trendType="negative"
              >
                <SampleChart />
              </KPICard>
              
              <KPICard
                icon={Mail}
                name="Email Opens"
                currentValue="2.4K"
                trendValue="15.2%"
                trendType="positive"
              >
                <SampleChart />
              </KPICard>
            </div>
          </div>

          {/* KPI Cards with Lists */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">KPI Cards with Lists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <KPICard
                icon={Users}
                name="Team Status"
                currentValue="32"
                trendValue="4.2%"
                trendType="positive"
              >
                <SampleList />
              </KPICard>
              
              <KPICard
                icon={Target}
                name="Project Status"
                currentValue="188"
                trendValue="1.8%"
                trendType="neutral"
              >
                <SampleList />
              </KPICard>
              
              <KPICard
                icon={TrendingUp}
                name="Performance"
                currentValue="94.2%"
                trendValue="3.1%"
                trendType="negative"
              >
                <SampleList />
              </KPICard>
            </div>
          </div>

          {/* Tag Component Showcase */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Tag Component Variations</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-md font-medium text-gray-700 mb-4">Tag Variants</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                <Tag variant="positive" icon={ArrowUpRight}>+12.5%</Tag>
                <Tag variant="negative" icon={ArrowDownRight}>-3.2%</Tag>
                <Tag variant="neutral" icon={Minus}>0.0%</Tag>
                <Tag variant="info" icon={TrendingUp}>Trending</Tag>
                <Tag variant="default">Default</Tag>
              </div>
              
              <h3 className="text-md font-medium text-gray-700 mb-4">Tags without Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Tag variant="positive">Positive</Tag>
                <Tag variant="negative">Negative</Tag>
                <Tag variant="neutral">Neutral</Tag>
                <Tag variant="info">Info</Tag>
                <Tag variant="default">Default</Tag>
              </div>
            </div>
          </div>

          {/* Different Trend Types */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Trend Type Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-md font-medium text-gray-700">Positive Trends</h3>
                <KPICard
                  icon={TrendingUp}
                  name="Sales Growth"
                  currentValue="$125K"
                  trendValue="18.7%"
                  trendType="positive"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-md font-medium text-gray-700">Negative Trends</h3>
                <KPICard
                  icon={Users}
                  name="Churn Rate"
                  currentValue="2.3%"
                  trendValue="0.8%"
                  trendType="negative"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-md font-medium text-gray-700">Neutral Trends</h3>
                <KPICard
                  icon={Target}
                  name="Conversion"
                  currentValue="4.2%"
                  trendValue="0.0%"
                  trendType="neutral"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">KPI Card Features</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Fixed Size:</strong> 268px × 172px (16.75rem × 10.75rem)</p>
                <p><strong>Flexible Content:</strong> Supports charts, lists, or empty middle section</p>
                <p><strong>Icon Support:</strong> Any Lucide React icon in the header</p>
                <p><strong>Trend Display:</strong> Automatic icon selection based on trend type</p>
                <p><strong>Responsive:</strong> Works well in grid layouts</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Tag Component Features</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Variants:</strong> positive, negative, neutral, info, default</p>
                <p><strong>Icon Support:</strong> Optional icon with automatic sizing</p>
                <p><strong>Semantic Colors:</strong> Uses design system color palette</p>
                <p><strong>Flexible Content:</strong> Accepts any React node as children</p>
                <p><strong>Reusable:</strong> Can be used independently of KPI cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPICardPreview;