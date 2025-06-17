import React from 'react';
import { TrendingUp, Users, Clock, Target, Award, DollarSign } from 'lucide-react';

const HiringMetricsLayout: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-poppins font-semibold text-n-500">
          Hiring Metrics Analysis
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          Comprehensive analysis of your hiring performance and key metrics
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Time to Hire */}
        <div className="bg-gr-25 rounded-xl p-4 border border-n-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-b-40 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-b-200" />
            </div>
            <div>
              <h4 className="text-sm font-poppins font-medium text-n-500">Time to Hire</h4>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-poppins font-semibold text-n-500">18 days</div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-3 h-3 text-g-300" />
              <span className="text-xs text-g-300">-2 days from last month</span>
            </div>
          </div>
        </div>

        {/* Quality of Hire */}
        <div className="bg-gr-25 rounded-xl p-4 border border-n-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-g-100 rounded-lg flex items-center justify-center">
              <Award className="w-4 h-4 text-g-300" />
            </div>
            <div>
              <h4 className="text-sm font-poppins font-medium text-n-500">Quality of Hire</h4>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-poppins font-semibold text-n-500">4.2/5</div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-3 h-3 text-g-300" />
              <span className="text-xs text-g-300">+0.3 improvement</span>
            </div>
          </div>
        </div>

        {/* Cost per Hire */}
        <div className="bg-gr-25 rounded-xl p-4 border border-n-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-y-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-y-400" />
            </div>
            <div>
              <h4 className="text-sm font-poppins font-medium text-n-500">Cost per Hire</h4>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-poppins font-semibold text-n-500">$2,800</div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-3 h-3 text-g-300" />
              <span className="text-xs text-g-300">-12% reduction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hiring Funnel */}
        <div className="bg-gr-25 rounded-xl p-6 border border-n-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-p-50 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-p-300" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-medium text-n-500">Hiring Funnel</h3>
              <p className="text-xs font-poppins font-normal text-n-300">Conversion rates by stage</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-n-400">Applications</span>
              <span className="text-sm font-medium text-n-500">1,247</span>
            </div>
            <div className="w-full bg-n-50 rounded-full h-2">
              <div className="bg-b-200 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-n-400">Screening</span>
              <span className="text-sm font-medium text-n-500">312 (25%)</span>
            </div>
            <div className="w-full bg-n-50 rounded-full h-2">
              <div className="bg-b-200 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-n-400">Interviews</span>
              <span className="text-sm font-medium text-n-500">89 (7%)</span>
            </div>
            <div className="w-full bg-n-50 rounded-full h-2">
              <div className="bg-b-200 h-2 rounded-full" style={{ width: '7%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-n-400">Offers</span>
              <span className="text-sm font-medium text-g-300">23 (2%)</span>
            </div>
            <div className="w-full bg-n-50 rounded-full h-2">
              <div className="bg-g-300 h-2 rounded-full" style={{ width: '2%' }}></div>
            </div>
          </div>
        </div>

        {/* Source Effectiveness */}
        <div className="bg-gr-25 rounded-xl p-6 border border-n-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-k-50 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-k-300" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-medium text-n-500">Source Effectiveness</h3>
              <p className="text-xs font-poppins font-normal text-n-300">Hiring success by source</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-n-500">LinkedIn</span>
                <div className="text-xs text-n-300">42% of hires</div>
              </div>
              <div className="text-sm font-medium text-g-300">High</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-n-500">Referrals</span>
                <div className="text-xs text-n-300">31% of hires</div>
              </div>
              <div className="text-sm font-medium text-g-300">High</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-n-500">Job Boards</span>
                <div className="text-xs text-n-300">18% of hires</div>
              </div>
              <div className="text-sm font-medium text-y-400">Medium</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-n-500">Direct Applications</span>
                <div className="text-xs text-n-300">9% of hires</div>
              </div>
              <div className="text-sm font-medium text-n-300">Low</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Prompt */}
      <div className="text-center p-4 bg-g-100 rounded-xl">
        <p className="text-sm font-poppins font-normal text-g-400">
          This is a placeholder for the Hiring Metrics layout. 
          <br />
          Real hiring data, charts, and interactive analytics will be implemented here.
        </p>
      </div>
    </div>
  );
};

export default HiringMetricsLayout;