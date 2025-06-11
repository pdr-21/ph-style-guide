import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface ProjectData {
  id: number;
  title: string;
  description: string | null;
  project_type: string | null;
  start_date: string | null;
  target_end_date: string | null;
  focus_position: string | null;
  ai_agents: any[] | null;
  supervisors: any[] | null;
  status: string | null;
  priority: string | null;
  created_at: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProject = async () => {
    if (!id) return;

    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', parseInt(id))
        .single();

      if (error) {
        throw error;
      }

      setProject(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="p-8">
        <div className="text-n-300">Loading project...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="p-8">
        <div className="text-r-400">Error: {error || 'Project not found'}</div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="border-b border-n-75 pb-4 pt-6 px-8">
        <div className="flex items-center gap-2 text-sm mb-4">
          <Link 
            to="/projects" 
            className="text-b-200 hover:text-b-300 transition-colors font-medium"
          >
            Projects
          </Link>
          <ChevronRight className="w-4 h-4 text-n-200" />
          <span className="text-n-300 font-medium">{project.title}</span>
        </div>
        
        {/* Project Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-n-500">{project.title}</h1>
          {project.description && (
            <p className="text-n-400 text-base leading-relaxed max-w-4xl">
              {project.description}
            </p>
          )}
        </div>
      </div>
      
      {/* Project Details */}
      <div className="pt-8 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Information */}
            <div className="bg-white border border-n-75 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-n-500 mb-6">Project Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-n-400 mb-2">Project Type</label>
                  <div className="text-sm text-n-500">
                    {project.project_type || 'Not specified'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n-400 mb-2">Status</label>
                  <div className="text-sm text-n-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.status === 'active' ? 'bg-g-100 text-g-400' :
                      project.status === 'completed' ? 'bg-b-40 text-b-300' :
                      project.status === 'planning' ? 'bg-y-100 text-y-400' :
                      'bg-n-50 text-n-300'
                    }`}>
                      {project.status || 'Unknown'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n-400 mb-2">Priority</label>
                  <div className="text-sm text-n-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.priority === 'high' ? 'bg-r-50 text-r-400' :
                      project.priority === 'medium' ? 'bg-y-100 text-y-400' :
                      project.priority === 'low' ? 'bg-g-100 text-g-400' :
                      'bg-n-50 text-n-300'
                    }`}>
                      {project.priority || 'Medium'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n-400 mb-2">Focus Position</label>
                  <div className="text-sm text-n-500">
                    {project.focus_position || 'Not specified'}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white border border-n-75 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-n-500 mb-6">Timeline</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-n-400 mb-2">Start Date</label>
                  <div className="text-sm text-n-500">
                    {project.start_date ? new Date(project.start_date).toLocaleDateString() : 'Not set'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n-400 mb-2">Target End Date</label>
                  <div className="text-sm text-n-500">
                    {project.target_end_date ? new Date(project.target_end_date).toLocaleDateString() : 'Not set'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n-400 mb-2">Created</label>
                  <div className="text-sm text-n-500">
                    {new Date(project.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Agents */}
            <div className="bg-white border border-n-75 rounded-lg p-6">
              <h3 className="text-md font-semibold text-n-500 mb-4">AI Agents</h3>
              {project.ai_agents && project.ai_agents.length > 0 ? (
                <div className="space-y-2">
                  {project.ai_agents.map((agent, index) => (
                    <div key={index} className="text-sm text-n-400">
                      {typeof agent === 'string' ? agent : agent.name || 'Unknown Agent'}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-n-300">No AI agents assigned</div>
              )}
            </div>

            {/* Supervisors */}
            <div className="bg-white border border-n-75 rounded-lg p-6">
              <h3 className="text-md font-semibold text-n-500 mb-4">Supervisors</h3>
              {project.supervisors && project.supervisors.length > 0 ? (
                <div className="space-y-2">
                  {project.supervisors.map((supervisor, index) => (
                    <div key={index} className="text-sm text-n-400">
                      {typeof supervisor === 'string' ? supervisor : supervisor.name || 'Unknown Supervisor'}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-n-300">No supervisors assigned</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;