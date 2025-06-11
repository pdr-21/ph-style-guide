import React from 'react';
import { ChevronDown, FileText } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  projectId: string;
  status: 'Open' | 'Closed' | 'In Progress';
  workflow: string;
  leads: number;
  hasAttachments: boolean;
}

const ProjectTable: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      name: 'Cheyenne Vaccaro',
      projectId: 'PR-101678',
      status: 'Open',
      workflow: 'Work',
      leads: 101,
      hasAttachments: true,
    },
    {
      id: '2',
      name: 'Abram Bergson',
      projectId: 'PR-101678',
      status: 'Open',
      workflow: 'Work',
      leads: 101,
      hasAttachments: true,
    },
  ];

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
                Project name
                <ChevronDown className="w-4 h-4 text-b-200" />
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
              Project ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
              Project status
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
              Workflow
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
              Leads
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-n-400">
              Attachments
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-n-75">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-n-40 transition-colors">
              <td className="px-4 py-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-b-200 border-n-200 rounded focus:ring-b-200 focus:ring-2"
                />
              </td>
              <td className="px-4 py-4 text-sm font-medium text-n-500">
                {project.name}
              </td>
              <td className="px-4 py-4 text-sm text-n-400">
                {project.projectId}
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-g-100 text-g-400">
                  {project.status}
                </span>
              </td>
              <td className="px-4 py-4 text-sm text-n-400">
                {project.workflow}
              </td>
              <td className="px-4 py-4 text-sm text-b-200 font-medium">
                {project.leads}
              </td>
              <td className="px-4 py-4">
                {project.hasAttachments && (
                  <FileText className="w-4 h-4 text-n-300" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;