import React, { useState } from 'react';
import { Initiative } from '../../types';
import TaskPerformanceBar from './TaskPerformanceBar';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Search, Filter, MoreVertical, Calendar, User, Users, Bot } from 'lucide-react';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface InitiativesTableProps {
  initiatives?: Initiative[];
  className?: string;
}

const InitiativesTable: React.FC<InitiativesTableProps> = ({ 
  initiatives, 
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All initiatives');

  // Sample data if none provided
  const defaultInitiatives: Initiative[] = [
    {
      id: '1',
      projectName: 'AI-Powered Resume Screening',
      description: 'Implement automated resume screening to reduce manual review time by 70%',
      category: 'Recruitment',
      status: 'In Progress',
      startDate: '2024-01-15',
      deadline: '2024-03-30',
      projectLead: 'Sarah Johnson',
      projectTeam: ['Mike Chen', 'Lisa Wang', 'David Rodriguez'],
      aiAgentsInvolved: ['Resume Analyzer', 'Skill Matcher', 'Bias Detector'],
      taskPerformance: { completed: 12, incomplete: 3, upcoming: 8 },
      escalations: 2
    },
    {
      id: '2',
      projectName: 'Onboarding Experience Redesign',
      description: 'Streamline new hire onboarding process with digital workflows',
      category: 'Onboarding',
      status: 'Awaiting Human Input',
      startDate: '2024-02-01',
      deadline: '2024-04-15',
      projectLead: 'Alex Thompson',
      projectTeam: ['Jennifer Lee', 'Carlos Martinez'],
      aiAgentsInvolved: ['Workflow Optimizer', 'Document Generator'],
      taskPerformance: { completed: 8, incomplete: 5, upcoming: 12 },
      escalations: 4
    },
    {
      id: '3',
      projectName: 'Performance Review Automation',
      description: 'Automate quarterly performance review scheduling and reminders',
      category: 'Performance',
      status: 'Completed',
      startDate: '2023-11-01',
      deadline: '2024-01-31',
      projectLead: 'Maria Garcia',
      projectTeam: ['Tom Wilson', 'Emma Davis', 'Ryan Park', 'Sophie Brown'],
      aiAgentsInvolved: ['Schedule Coordinator', 'Reminder Bot'],
      taskPerformance: { completed: 15, incomplete: 0, upcoming: 0 },
      escalations: 1
    },
    {
      id: '4',
      projectName: 'Diversity & Inclusion Training',
      description: 'Develop comprehensive D&I training program for all employees',
      category: 'Training',
      status: 'Not Started',
      startDate: '2024-03-01',
      deadline: '2024-06-30',
      projectLead: 'Kevin Chang',
      projectTeam: ['Amanda Foster', 'James Miller'],
      aiAgentsInvolved: ['Content Curator', 'Progress Tracker'],
      taskPerformance: { completed: 0, incomplete: 0, upcoming: 20 },
      escalations: 0
    },
    {
      id: '5',
      projectName: 'Compliance Documentation Update',
      description: 'Update all HR compliance documents to meet new regulations',
      category: 'Compliance',
      status: 'Paused',
      startDate: '2024-01-08',
      deadline: '2024-05-15',
      projectLead: 'Rachel Kim',
      projectTeam: ['Steve Anderson', 'Nicole Taylor'],
      aiAgentsInvolved: ['Document Analyzer', 'Compliance Checker'],
      taskPerformance: { completed: 6, incomplete: 8, upcoming: 10 },
      escalations: 3
    }
  ];

  const data = initiatives || defaultInitiatives;

  // Filter options
  const filterOptions = [
    'All initiatives',
    'My initiatives',
    'Sarah Johnson',
    'Alex Thompson', 
    'Maria Garcia',
    'Kevin Chang',
    'Rachel Kim'
  ];

  // Get status badge styling
  const getStatusBadge = (status: Initiative['status']) => {
    const baseClasses = "px-2 py-1 text-xs font-poppins font-medium border";
    
    switch (status) {
      case 'Completed':
        return `${baseClasses} bg-g-100 text-g-300 border-g-200`;
      case 'In Progress':
        return `${baseClasses} bg-b-40 text-b-300 border-b-200`;
      case 'Awaiting Human Input':
        return `${baseClasses} bg-y-200 text-y-500 border-y-300`;
      case 'Paused':
        return `${baseClasses} bg-n-50 text-n-400 border-n-100`;
      case 'Not Started':
        return `${baseClasses} bg-n-50 text-n-300 border-n-100`;
      default:
        return `${baseClasses} bg-n-50 text-n-300 border-n-100`;
    }
  };

  // Get category badge styling
  const getCategoryBadge = (category: Initiative['category']) => {
    const baseClasses = "px-2 py-1 text-xs font-poppins font-medium border rounded-full";
    
    switch (category) {
      case 'Recruitment':
        return `${baseClasses} bg-p-50 text-p-400 border-p-200`;
      case 'Onboarding':
        return `${baseClasses} bg-b-40 text-b-300 border-b-200`;
      case 'Training':
        return `${baseClasses} bg-k-50 text-k-400 border-k-200`;
      case 'Performance':
        return `${baseClasses} bg-g-100 text-g-400 border-g-200`;
      case 'Compliance':
        return `${baseClasses} bg-r-50 text-r-400 border-r-200`;
      default:
        return `${baseClasses} bg-n-50 text-n-400 border-n-100`;
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div>
        <h2 className="text-xl font-poppins font-semibold text-n-500 mb-2">
          Initiatives
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          Track all of the HR initiatives in your team.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter)}
              className="text-xs font-poppins font-medium"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
            <input
              type="text"
              placeholder="Search initiatives..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-64 border border-n-100 rounded-lg focus:ring-2 focus:ring-b-200 focus:border-b-200 outline-none text-sm font-poppins"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-n-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-n-40 border-b border-n-100">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Project Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Timeline
                </th>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Team
                </th>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Task Performance
                </th>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Escalations
                </th>
                <th className="text-left py-3 px-4 text-xs font-poppins font-semibold text-n-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-n-75">
              {data.map((initiative) => (
                <tr key={initiative.id} className="hover:bg-n-40 transition-colors">
                  {/* Project Name & Description */}
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="text-sm font-poppins font-medium text-n-500">
                        {initiative.projectName}
                      </div>
                      <div className="text-xs font-poppins font-normal text-n-300 max-w-xs">
                        {initiative.description}
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-4">
                    <Badge className={getCategoryBadge(initiative.category)}>
                      {initiative.category}
                    </Badge>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <Badge className={getStatusBadge(initiative.status)}>
                      {initiative.status}
                    </Badge>
                  </td>

                  {/* Timeline */}
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-xs font-poppins font-normal text-n-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        Start: {formatDate(initiative.startDate)}
                      </div>
                      <div className="flex items-center text-xs font-poppins font-normal text-n-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        Due: {formatDate(initiative.deadline)}
                      </div>
                    </div>
                  </td>

                  {/* Team */}
                  <td className="py-4 px-4">
                    <div className="space-y-2">
                      {/* Project Lead */}
                      <div className="flex items-center text-xs font-poppins font-normal text-n-300">
                        <User className="w-3 h-3 mr-1" />
                        <span className="font-medium">{initiative.projectLead}</span>
                      </div>
                      
                      {/* Team Members */}
                      <div className="flex items-center text-xs font-poppins font-normal text-n-300">
                        <Users className="w-3 h-3 mr-1" />
                        <span>{initiative.projectTeam.length} members</span>
                      </div>
                      
                      {/* AI Agents */}
                      <div className="flex items-center text-xs font-poppins font-normal text-n-300">
                        <Bot className="w-3 h-3 mr-1" />
                        <span>{initiative.aiAgentsInvolved.length} AI agents</span>
                      </div>
                    </div>
                  </td>

                  {/* Task Performance */}
                  <td className="py-4 px-4">
                    <div className="w-32">
                      <TaskPerformanceBar taskPerformance={initiative.taskPerformance} />
                    </div>
                  </td>

                  {/* Escalations */}
                  <td className="py-4 px-4">
                    <div className="text-center">
                      <span className={`text-sm font-poppins font-medium ${
                        initiative.escalations > 0 ? 'text-r-400' : 'text-n-300'
                      }`}>
                        {initiative.escalations}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InitiativesTable;