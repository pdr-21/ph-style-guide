import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      
      let query = supabase
        .from('projects')
        .select('id, title, project_type, start_date, target_end_date, focus_position, ai_agents, supervisors');

      // Apply filter based on activeFilter
      if (activeFilter !== 'all-projects') {
        // Extract project type from filter ID (format: "type-project-type-name")
        const projectType = activeFilter.replace('type-', '').replace(/-/g, ' ');
        // Capitalize first letter of each word
        const formattedType = projectType.replace(/\b\w/g, l => l.toUpperCase());
        query = query.eq('project_type', formattedType);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setProjects(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [activeFilter]);

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

  return (
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
  );
};

export default ProjectTable;