import React from 'react';
import { BarChart3, Users, Calendar, Target } from 'lucide-react';

const ProjectOverviewLayout: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-poppins font-semibold text-n-500">
          Project Overview
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          Here's a comprehensive overview of your current projects and initiatives
        </p>
      </div>

      {/* Placeholder Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Stats Card */}
        <div className="bg-gr-25 rounded-xl p-6 border border-n-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-b-40 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-b-200" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-medium text-n-500">Project Statistics</h3>
              <p className="text-xs font-poppins font-normal text-n-300">Overall performance metrics</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Active Projects</span>
              <span className="text-sm font-medium text-n-500">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Completed This Month</span>
              <span className="text-sm font-medium text-g-300">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Pending Review</span>
              <span className="text-sm font-medium text-y-400">3</span>
            </div>
          </div>
        </div>

        {/* Team Activity Card */}
        <div className="bg-gr-25 rounded-xl p-6 border border-n-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-g-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-g-300" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-medium text-n-500">Team Activity</h3>
              <p className="text-xs font-poppins font-normal text-n-300">Recent team contributions</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Active Members</span>
              <span className="text-sm font-medium text-n-500">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Tasks Completed Today</span>
              <span className="text-sm font-medium text-g-300">47</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Avg Response Time</span>
              <span className="text-sm font-medium text-b-200">2.3h</span>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines Card */}
        <div className="bg-gr-25 rounded-xl p-6 border border-n-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-y-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-y-400" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-medium text-n-500">Upcoming Deadlines</h3>
              <p className="text-xs font-poppins font-normal text-n-300">Critical dates to watch</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-n-400">This Week</span>
              <span className="text-sm font-medium text-r-300">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Next Week</span>
              <span className="text-sm font-medium text-y-400">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-n-400">This Month</span>
              <span className="text-sm font-medium text-n-500">23</span>
            </div>
          </div>
        </div>

        {/* Goals Progress Card */}
        <div className="bg-gr-25 rounded-xl p-6 border border-n-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-p-50 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-p-300" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-medium text-n-500">Goals Progress</h3>
              <p className="text-xs font-poppins font-normal text-n-300">Quarterly objectives</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-n-400">Q4 Goals</span>
              <span className="text-sm font-medium text-n-500">12/15</span>
            </div>
            <div className="w-full bg-n-50 rounded-full h-2">
              <div className="bg-p-300 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="text-xs text-n-300 text-center">80% Complete</div>
          </div>
        </div>
      </div>

      {/* Action Prompt */}
      <div className="text-center p-4 bg-b-40 rounded-xl">
        <p className="text-sm font-poppins font-normal text-b-300">
          This is a placeholder for the Project Overview layout. 
          <br />
          Real project data and interactive elements will be implemented here.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverviewLayout;