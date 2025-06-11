import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Search, Filter, Settings, MoreHorizontal, Plus } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface ProjectTypeCount {
  project_type: string | null;
  count: number;
}

interface ProjectFilterBarProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

const ProjectFilterBar: React.FC<ProjectFilterBarProps> = ({ onFilterChange, activeFilter }) => {
  const [projectTypeCounts, setProjectTypeCounts] = useState<ProjectTypeCount[]>([]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProjectTypeCounts = async () => {
    try {
      setLoading(true);
      
      // Get total count of all projects
      const { count: total, error: totalError } = await supabase
        .from('projects')
        .select('*', { count: 'exact', head: true });

      if (totalError) throw totalError;
      setTotalProjects(total || 0);

      // Get count by project type
      const { data, error } = await supabase
        .from('projects')
        .select('project_type')
        .not('project_type', 'is', null);

      if (error) throw error;

      // Count occurrences of each project type
      const typeCounts: { [key: string]: number } = {};
      data?.forEach(project => {
        const type = project.project_type || 'Other';
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });

      // Convert to array format
      const typeCountsArray = Object.entries(typeCounts).map(([type, count]) => ({
        project_type: type,
        count
      }));

      setProjectTypeCounts(typeCountsArray);
    } catch (err) {
      console.error('Error fetching project type counts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectTypeCounts();
  }, []);

  // Create tabs array with "All projects" first, then project types
  const tabs = [
    { 
      id: 'all-projects', 
      label: 'All initiatives', 
      count: totalProjects,
      filterValue: 'all-projects'
    },
    ...projectTypeCounts.map(typeCount => ({
      id: `type-${typeCount.project_type?.toLowerCase().replace(/\s+/g, '-')}`,
      label: typeCount.project_type || 'Other',
      count: typeCount.count,
      filterValue: typeCount.project_type || 'Other' // Pass the actual project_type value
    }))
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-n-500">Initiatives</h1>
        <div className="flex items-center gap-3">
          <Button className="bg-p-300 hover:bg-p-400 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create new initiative
          </Button>
          <Button variant="ghost" size="icon" className="text-n-300 hover:text-n-500">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-n-75 -mx-8 px-8">
        <div className="flex items-center gap-8 overflow-x-auto pb-0">
          {loading ? (
            <div className="pb-4 px-1 text-sm text-n-300">Loading filters...</div>
          ) : (
            <>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onFilterChange(tab.filterValue)} // Use filterValue instead of id
                  className={`pb-4 px-1 text-sm font-medium transition-colors relative whitespace-nowrap flex items-center ${
                    activeFilter === tab.filterValue
                      ? 'text-b-200 border-b-2 border-b-200'
                      : 'text-n-300 hover:text-n-400'
                  }`}
                >
                  {tab.label}
                  {tab.count !== null && tab.count > 0 && (
                    <span className="ml-2 text-xs bg-n-50 text-n-300 px-2 py-1 rounded-full min-w-[1.5rem] text-center leading-none">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
              <button className="pb-4 px-1 text-n-300 hover:text-n-400 text-sm font-medium">
                <Plus className="w-4 h-4" />
              </button>
            </>
          )}
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