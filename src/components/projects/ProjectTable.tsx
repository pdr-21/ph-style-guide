import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { Button } from '../ui/button';

interface ProjectTableProps {
  activeFilter?: string;
}

interface ProjectData {
  id: number;
  title: string;
  project_type: string | null;
  start_date: string | null;
  target_end_date: string | null;
  focus_position: string | null;
  ai_agents: any[] | null;
  supervisors: any[] | null;
}

const ProjectTable: React.FC<ProjectTableProps> = ({ activeFilter = 'all-projects' }) => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      
      // Calculate offset for pagination
      const offset = (currentPage - 1) * itemsPerPage;
      
      let query = supabase
        .from('projects')
        .select('id, title, project_type, start_date, target_end_date, focus_position, ai_agents, supervisors', { count: 'exact' })
        .range(offset, offset + itemsPerPage - 1);

      // Apply filter based on activeFilter
      if (activeFilter !== 'all-projects') {
        // Extract project type from filter ID (format: "type-project-type-name")
        const projectType = activeFilter.replace('type-', '').replace(/-/g, ' ');
        // Capitalize first letter of each word
        const formattedType = projectType.replace(/\b\w/g, l => l.toUpperCase());
        query = query.eq('project_type', formattedType);
      }

      const { data, error, count } = await query;

      if (error) {
        throw error;
      }

      setProjects(data || []);
      setTotalCount(count || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filter changes
    fetchProjects();
  }, [activeFilter]);
  
  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString();
  };

  const formatAgentsOrSupervisors = (items: any[] | null) => {
    if (!items || items.length === 0) return { display: '-', tooltip: '' };
    
    const count = items.length;
    const names = items.map(item => {
      if (typeof item === 'string') return item;
      if (typeof item === 'object' && item.name) return item.name;
      return 'Unknown';
    });
    
    return {
      display: `${count} ${count === 1 ? 'Item' : 'Items'}`,
      tooltip: names.join(', ')
    };
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (loading) {
    return (
      <div className="bg-white border border-n-75 rounded-lg p-8 text-center">
        <div className="text-n-300">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white border border-n-75 rounded-lg p-8 text-center">
        <div className="text-r-400">Error: {error}</div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="bg-white border border-n-75 rounded-lg p-8 text-center">
        <div className="text-n-300">No projects found.</div>
      </div>
    );
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalCount);

  return (
    <div className="space-y-4">
      <div className="bg-white border border-n-75 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-n-40 border-b border-n-75">
            <tr>
              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-b-200 border-n-200 rounded focus:ring-b-200 focus:ring-2"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
                <div className="flex items-center gap-2">
                  Project Name
                  <ChevronDown className="w-4 h-4 text-b-200" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
                Project Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
                Start Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
                Target End Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
                Focus Position
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
                AI Agents
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
                Supervisors
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-n-75">
            {projects.map((project) => {
              const aiAgentsInfo = formatAgentsOrSupervisors(project.ai_agents);
              const supervisorsInfo = formatAgentsOrSupervisors(project.supervisors);

              return (
                <tr key={project.id} className="hover:bg-n-40 transition-colors">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-b-200 border-n-200 rounded focus:ring-b-200 focus:ring-2"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-n-500">
                    {project.title}
                  </td>
                  <td className="px-4 py-4 text-sm text-n-400">
                    {project.project_type || '-'}
                  </td>
                  <td className="px-4 py-4 text-sm text-n-400">
                    {formatDate(project.start_date)}
                  </td>
                  <td className="px-4 py-4 text-sm text-n-400">
                    {formatDate(project.target_end_date)}
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-n-400 max-w-48 truncate overflow-hidden whitespace-nowrap"
                    title={project.focus_position || ''}
                  >
                    {project.focus_position || '-'}
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-b-200 font-medium cursor-help"
                    title={aiAgentsInfo.tooltip}
                  >
                    {aiAgentsInfo.display}
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-p-300 font-medium cursor-help"
                    title={supervisorsInfo.tooltip}
                  >
                    {supervisorsInfo.display}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-n-300">
            Showing {startItem}-{endItem} of {totalCount}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-n-400 border-n-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {getVisiblePages().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className="px-3 py-1 text-n-300">...</span>
                ) : (
                  <Button
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page as number)}
                    className={
                      currentPage === page
                        ? "bg-b-200 text-white hover:bg-b-300"
                        : "text-n-400 border-n-100 hover:bg-n-40"
                    }
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-n-400 border-n-100"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTable;