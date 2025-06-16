import React, { useState } from 'react';
import { Initiative } from '../../types';
import TaskPerformanceBar from './TaskPerformanceBar';
import { ChevronDown, Filter, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import { Dropdown } from '../ui/dropdown';

interface InitiativesTableProps {
  initiatives?: Initiative[];
}

const InitiativesTable: React.FC<InitiativesTableProps> = ({ initiatives }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for the table
  const sampleInitiatives: Initiative[] = [
    {
      id: '1',
      projectName: 'AI-Powered Resume Screening',
      description: 'Implement automated resume screening to reduce manual review time',
      category: 'Recruitment',
      status: 'In Progress',
      startDate: '2024-01-15',
      deadline: '2024-03-30',
      projectLead: 'Sarah Johnson',
      projectTeam: ['Mike Chen', 'Lisa Wang', 'David Brown'],
      aiAgentsInvolved: ['Resume Analyzer', 'Skill Matcher'],
      taskPerformance: { completed: 12, incomplete: 5, upcoming: 8 },
      escalations: 2
    },
    {
      id: '2',
      projectName: 'Onboarding Automation',
      description: 'Streamline new hire onboarding process with automated workflows',
      category: 'Onboarding',
      status: 'Not Started',
      startDate: '2024-02-01',
      deadline: '2024-05-15',
      projectLead: 'John Smith',
      projectTeam: ['Emma Davis', 'Alex Rodriguez'],
      aiAgentsInvolved: ['Document Processor', 'Task Scheduler'],
      taskPerformance: { completed: 0, incomplete: 0, upcoming: 15 },
      escalations: 0
    },
    {
      id: '3',
      projectName: 'Performance Review Enhancement',
      description: 'Enhance performance review system with AI-driven insights',
      category: 'Performance',
      status: 'Awaiting Human Input',
      startDate: '2024-01-08',
      deadline: '2024-04-20',
      projectLead: 'Maria Garcia',
      projectTeam: ['Tom Wilson', 'Rachel Green', 'Kevin Lee', 'Anna Taylor'],
      aiAgentsInvolved: ['Performance Analyzer', 'Feedback Processor'],
      taskPerformance: { completed: 8, incomplete: 3, upcoming: 6 },
      escalations: 4
    },
    {
      id: '4',
      projectName: 'Training Module Optimization',
      description: 'Optimize training modules based on learning analytics',
      category: 'Training',
      status: 'Completed',
      startDate: '2023-11-01',
      deadline: '2024-01-31',
      projectLead: 'Chris Anderson',
      projectTeam: ['Sophie Miller', 'James Clark'],
      aiAgentsInvolved: ['Learning Analyzer'],
      taskPerformance: { completed: 20, incomplete: 0, upcoming: 0 },
      escalations: 1
    },
    {
      id: '5',
      projectName: 'Compliance Tracking System',
      description: 'Implement automated compliance tracking and reporting',
      category: 'Compliance',
      status: 'Paused',
      startDate: '2024-01-20',
      deadline: '2024-06-30',
      projectLead: 'Robert Kim',
      projectTeam: ['Jennifer Liu', 'Mark Thompson'],
      aiAgentsInvolved: ['Compliance Monitor', 'Report Generator'],
      taskPerformance: { completed: 5, incomplete: 7, upcoming: 12 },
      escalations: 3
    }
  ];

  const data = initiatives || sampleInitiatives;

  // Filter options
  const filterOptions = [
    { label: 'All Initiatives', value: 'all' },
    { label: 'My Initiatives', value: 'my' },
    { label: 'Sarah Johnson', value: 'sarah' },
    { label: 'John Smith', value: 'john' },
    { label: 'Maria Garcia', value: 'maria' },
    { label: 'Chris Anderson', value: 'chris' },
    { label: 'Robert Kim', value: 'robert' }
  ];

  // Status color classes (subtle by default, prominent on hover)
  const getStatusClasses = (status: Initiative['status']) => {
    switch (status) {
      case 'Not Started':
        return 'bg-n-40 text-n-400 hover:bg-n-100 hover:text-n-500';
      case 'In Progress':
        return 'bg-b-40 text-b-200 hover:bg-b-50 hover:text-b-300';
      case 'Completed':
        return 'bg-g-100 text-g-300 hover:bg-g-200 hover:text-g-400';
      case 'Paused':
        return 'bg-y-100 text-y-300 hover:bg-y-200 hover:text-y-400';
      case 'Awaiting Human Input':
        return 'bg-k-50 text-k-300 hover:bg-k-75 hover:text-k-400';
      default:
        return 'bg-n-40 text-n-400';
    }
  };

  // Category color classes (subtle by default, prominent on hover)
  const getCategoryClasses = (category: Initiative['category']) => {
    switch (category) {
      case 'Recruitment':
        return 'bg-p-50 text-p-300 hover:bg-p-75 hover:text-p-400';
      case 'Onboarding':
        return 'bg-b-40 text-b-200 hover:bg-b-50 hover:text-b-300';
      case 'Training':
        return 'bg-k-50 text-k-300 hover:bg-k-75 hover:text-k-400';
      case 'Performance':
        return 'bg-g-100 text-g-300 hover:bg-g-200 hover:text-g-400';
      case 'Compliance':
        return 'bg-r-50 text-r-300 hover:bg-r-75 hover:text-r-400';
      default:
        return 'bg-n-40 text-n-400 hover:bg-n-50 hover:text-n-500';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-n-100 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-n-75">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-poppins font-semibold text-n-500">Initiatives</h2>
            <p className="text-sm font-poppins font-normal text-n-300 mt-1">
              Track all of the HR initiatives in your team
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
              <input
                type="text"
                placeholder="Search initiatives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-n-100 rounded-lg focus:ring-2 focus:ring-b-200 focus:border-b-200 outline-none text-sm"
              />
            </div>
          </div>

          <Dropdown
            options={filterOptions}
            value={selectedFilter}
            onChange={setSelectedFilter}
            placeholder="Filter by..."
            className="w-48"
          />

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-n-40">
            <tr>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Project Name
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Description
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Category
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Start Date
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Deadline
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Project Lead
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Team
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                AI Agents
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Task Performance
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Escalations
              </th>
              <th className="text-left p-4 text-xs font-poppins font-medium text-n-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-n-75">
            {data.map((initiative) => (
              <tr key={initiative.id} className="hover:bg-n-40 transition-colors">
                <td className="p-4">
                  <div className="text-sm font-poppins font-medium text-n-500">
                    {initiative.projectName}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-poppins font-normal text-n-400 max-w-xs truncate">
                    {initiative.description}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-poppins font-medium rounded-lg transition-colors ${getCategoryClasses(initiative.category)}`}>
                    {initiative.category}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-poppins font-medium rounded-lg transition-colors ${getStatusClasses(initiative.status)}`}>
                    {initiative.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="text-sm font-poppins font-normal text-n-400">
                    {new Date(initiative.startDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-poppins font-normal text-n-400">
                    {new Date(initiative.deadline).toLocaleDateString()}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-poppins font-medium text-n-500">
                    {initiative.projectLead}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex -space-x-1">
                    {initiative.projectTeam.slice(0, 3).map((member, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 bg-n-100 rounded-full border-2 border-white flex items-center justify-center"
                        title={member}
                      >
                        <span className="text-xs font-poppins font-medium text-n-400">
                          {member.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    ))}
                    {initiative.projectTeam.length > 3 && (
                      <div className="w-6 h-6 bg-n-200 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-poppins font-medium text-n-500">
                          +{initiative.projectTeam.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-xs font-poppins font-normal text-n-400">
                    {initiative.aiAgentsInvolved.join(', ')}
                  </div>
                </td>
                <td className="p-4">
                  <div className="w-32">
                    <TaskPerformanceBar taskPerformance={initiative.taskPerformance} />
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-poppins font-medium text-n-500">
                    {initiative.escalations}
                  </div>
                </td>
                <td className="p-4">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InitiativesTable;