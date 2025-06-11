import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search, Filter, Settings, MoreHorizontal, Plus } from 'lucide-react';

const ProjectFilterBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all-projects');

  const tabs = [
    { id: 'all-projects', label: 'All projects', count: 71 },
    { id: 'my-open-projects', label: 'My open projects', count: 45 },
    { id: 'all-open-projects', label: 'All open projects', count: 45 },
    { id: 'recent-jobs', label: 'Recent jobs', count: null },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-n-500">Projects</h1>
        <div className="flex items-center gap-3">
          <Button className="bg-p-300 hover:bg-p-400 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create new project
          </Button>
          <Button variant="ghost" size="icon" className="text-n-300 hover:text-n-500">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-n-75">
        <div className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-b-200 border-b-2 border-b-200'
                  : 'text-n-300 hover:text-n-400'
              }`}
            >
              {tab.label}
              {tab.count && (
                <span className="ml-2 text-xs bg-n-50 text-n-300 px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
          <button className="pb-3 px-1 text-n-300 hover:text-n-400 text-sm font-medium">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-n-100 rounded-lg focus:ring-2 focus:ring-b-200 focus:border-b-200 outline-none text-sm bg-white"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-n-400 border-n-100">
            <Filter className="w-4 h-4 mr-2" />
            Filters
            <span className="ml-2 bg-n-100 text-n-400 px-2 py-0.5 rounded text-xs">12</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-n-300 hover:text-n-500">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilterBar;