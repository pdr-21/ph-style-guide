import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import ToggleSwitch from '../ui/ToggleSwitch';
import { Filter } from 'lucide-react';
import { Initiative, SpotlightFilter, InitiativeStatus, TaskBreakdown, AI_Agent, Human } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';
import TaskDistributionBar from './TaskDistributionBar';
import AgentAvatarGroup from './AgentAvatarGroup';
import HumanAvatarGroup from './HumanAvatarGroup';
import ViewInitiativeButton from './ViewInitiativeButton';

interface InitiativesTableProps {
  onView?: (initiativeId: string) => void;
}

const InitiativesTable: React.FC<InitiativesTableProps> = ({ onView }) => {
  const [activeSpotlight, setActiveSpotlight] = useState<SpotlightFilter>('All initiatives');
  const [searchQuery, setSearchQuery] = useState('');

  // Spotlight options for the toggle switch
  const spotlightOptions = [
    { id: 'All initiatives', label: 'All initiatives' },
    { id: 'My initiatives', label: 'My initiatives' },
    { id: 'Paused', label: 'Paused' },
    { id: 'Escalations', label: 'Escalations' },
    { id: 'Hiring', label: 'Hiring' },
    { id: 'Onboarding', label: 'Onboarding' },
  ];

  // Dummy data for initiatives
  const dummyInitiatives: Initiative[] = [
    {
      id: '1',
      name: 'Q4 Engineering Hiring Sprint',
      shortDescription: 'Accelerated hiring for senior engineering roles to meet Q4 project deadlines',
      status: 'In Progress',
      startDate: '2024-10-01',
      endDate: '2024-12-15',
      taskDistribution: {
        total: 45,
        completed: 28,
        escalated: 3,
        paused: 2,
        notStarted: 12
      },
      aiAgents: [
        {
          id: 'agent1',
          name: 'Sourcing Agent Alpha',
          imageIndex: 0,
          leadsFound: 1247,
          successRate: 94.2,
          avgResponseTime: '2.3h'
        },
        {
          id: 'agent2',
          name: 'Screening Agent Beta',
          imageIndex: 1,
          leadsFound: 892,
          successRate: 89.7,
          avgResponseTime: '1.8h'
        }
      ],
      humanInLoop: {
        id: 'human1',
        name: 'Sarah Johnson',
        initials: 'SJ',
        role: 'Senior Hiring Manager',
        department: 'Engineering',
        email: 'sarah.johnson@company.com',
        imageIndex: 2
      },
      category: 'Hiring',
      milestones: [
        {
          id: 'milestone1',
          name: 'Candidate Sourcing',
          description: 'Source and identify qualified candidates for senior engineering positions',
          dueDate: '2024-10-15',
          status: 'completed',
          progressPercentage: 100,
          assignedAgentId: 'agent1',
          sourcedCandidates: ['John Smith - Senior React Developer', 'Sarah Chen - Full Stack Engineer', 'Mike Johnson - Backend Specialist', 'Lisa Wang - DevOps Engineer'],
          attachedFiles: [
            {
              id: 'milestone-file1',
              name: 'Candidate Profiles.pdf',
              type: 'pdf',
              size: '3.2 MB',
              url: '#'
            },
            {
              id: 'milestone-file2',
              name: 'Sourcing Report.xlsx',
              type: 'excel',
              size: '1.1 MB',
              url: '#'
            }
          ]
        },
        {
          id: 'milestone2',
          name: 'Initial Screening',
          description: 'Conduct initial screening interviews and technical assessments',
          dueDate: '2024-11-01',
          status: 'in-progress',
          progressPercentage: 75,
          assignedAgentId: 'agent2',
          attachedFiles: [
            {
              id: 'milestone-file3',
              name: 'Screening Guidelines.docx',
              type: 'word',
              size: '654 KB',
              url: '#'
            }
          ]
        },
        {
          id: 'milestone3',
          name: 'Final Interviews',
          description: 'Schedule and conduct final interviews with hiring managers',
          dueDate: '2024-11-20',
          status: 'not-started',
          progressPercentage: 0,
          assignedAgentId: 'agent1',
          attachedFiles: []
        },
        {
          id: 'milestone4',
          name: 'Offer & Onboarding',
          description: 'Extend offers and coordinate onboarding process',
          dueDate: '2024-12-10',
          status: 'not-started',
          progressPercentage: 0,
          assignedAgentId: 'agent2',
          attachedFiles: []
        }
      ],
      attachedFiles: [
        {
          id: 'file1',
          name: 'Job Requirements.pdf',
          type: 'pdf',
          size: '2.4 MB',
          url: '#'
        },
        {
          id: 'file2',
          name: 'Candidate Pipeline.xlsx',
          type: 'excel',
          size: '1.8 MB',
          url: '#'
        },
        {
          id: 'file3',
          name: 'Interview Guidelines.docx',
          type: 'word',
          size: '856 KB',
          url: '#'
        }
      ]
    },
    {
      id: '2',
      name: 'New Employee Onboarding Optimization',
      shortDescription: 'Streamline onboarding process for better first-day experience',
      status: 'Escalated',
      startDate: '2024-09-15',
      endDate: '2024-11-30',
      taskDistribution: {
        total: 32,
        completed: 18,
        escalated: 8,
        paused: 1,
        notStarted: 5
      },
      aiAgents: [
        {
          id: 'agent3',
          name: 'Onboarding Agent Gamma',
          imageIndex: 3,
          leadsFound: 567,
          successRate: 92.1,
          avgResponseTime: '3.1h'
        }
      ],
      humanInLoop: {
        id: 'human2',
        name: 'Michael Chen',
        initials: 'MC',
        role: 'HR Operations Lead',
        department: 'Human Resources',
        email: 'michael.chen@company.com',
        imageIndex: 4
      },
      category: 'Onboarding',
      milestones: [
        {
          id: 'milestone5',
          name: 'Process Analysis',
          description: 'Analyze current onboarding process and identify pain points',
          dueDate: '2024-09-30',
          status: 'completed',
          progressPercentage: 100,
          assignedAgentId: 'agent3',
          attachedFiles: [
            {
              id: 'milestone-file4',
              name: 'Process Analysis Report.pdf',
              type: 'pdf',
              size: '2.8 MB',
              url: '#'
            }
          ]
        },
        {
          id: 'milestone6',
          name: 'System Integration',
          description: 'Integrate new onboarding tools and automate workflows',
          dueDate: '2024-10-20',
          status: 'in-progress',
          progressPercentage: 60,
          assignedAgentId: 'agent3',
          attachedFiles: []
        },
        {
          id: 'milestone7',
          name: 'Training Materials',
          description: 'Create comprehensive training materials and documentation',
          dueDate: '2024-11-15',
          status: 'not-started',
          progressPercentage: 0,
          assignedAgentId: 'agent3',
          attachedFiles: []
        }
      ],
      attachedFiles: [
        {
          id: 'file4',
          name: 'Current Process Map.pdf',
          type: 'pdf',
          size: '3.2 MB',
          url: '#'
        },
        {
          id: 'file5',
          name: 'Integration Specs.docx',
          type: 'word',
          size: '1.2 MB',
          url: '#'
        }
      ]
    },
    {
      id: '3',
      name: 'Sales Team Expansion',
      shortDescription: 'Scale sales team to support new market expansion',
      status: 'Completed',
      startDate: '2024-08-01',
      endDate: '2024-10-31',
      taskDistribution: {
        total: 28,
        completed: 28,
        escalated: 0,
        paused: 0,
        notStarted: 0
      },
      aiAgents: [
        {
          id: 'agent4',
          name: 'Sales Sourcing Agent',
          imageIndex: 5,
          leadsFound: 734,
          successRate: 96.8,
          avgResponseTime: '1.9h'
        }
      ],
      humanInLoop: {
        id: 'human3',
        name: 'Emily Rodriguez',
        initials: 'ER',
        role: 'Sales Director',
        department: 'Sales',
        email: 'emily.rodriguez@company.com',
        imageIndex: 6
      },
      category: 'Hiring',
      milestones: [
        {
          id: 'milestone8',
          name: 'Territory Planning',
          description: 'Define sales territories and target markets',
          dueDate: '2024-08-15',
          status: 'completed',
          progressPercentage: 100,
          assignedAgentId: 'agent4',
          attachedFiles: []
        },
        {
          id: 'milestone9',
          name: 'Recruitment',
          description: 'Recruit and hire sales representatives',
          dueDate: '2024-09-30',
          status: 'completed',
          progressPercentage: 100,
          assignedAgentId: 'agent4',
          attachedFiles: []
        },
        {
          id: 'milestone10',
          name: 'Training & Launch',
          description: 'Train new hires and launch in new territories',
          dueDate: '2024-10-31',
          status: 'completed',
          progressPercentage: 100,
          assignedAgentId: 'agent4',
          attachedFiles: []
        }
      ],
      attachedFiles: [
        {
          id: 'file6',
          name: 'Territory Map.pdf',
          type: 'pdf',
          size: '4.1 MB',
          url: '#'
        },
        {
          id: 'file7',
          name: 'Training Manual.pdf',
          type: 'pdf',
          size: '6.8 MB',
          url: '#'
        }
      ]
    },
    {
      id: '4',
      name: 'Customer Support Scaling',
      shortDescription: 'Rapid hiring for customer support to handle increased volume',
      status: 'Awaiting Human Input',
      startDate: '2024-11-01',
      endDate: '2024-12-31',
      taskDistribution: {
        total: 22,
        completed: 8,
        escalated: 2,
        paused: 3,
        notStarted: 9
      },
      aiAgents: [
        {
          id: 'agent5',
          name: 'Support Hiring Agent',
          imageIndex: 7,
          leadsFound: 445,
          successRate: 88.3,
          avgResponseTime: '2.7h'
        }
      ],
      humanInLoop: {
        id: 'human4',
        name: 'David Kim',
        initials: 'DK',
        role: 'Support Manager',
        department: 'Customer Success',
        email: 'david.kim@company.com',
        imageIndex: 8
      },
      category: 'Hiring',
      milestones: [
        {
          id: 'milestone11',
          name: 'Capacity Planning',
          description: 'Analyze support volume and determine staffing needs',
          dueDate: '2024-11-10',
          status: 'in-progress',
          progressPercentage: 40,
          assignedAgentId: 'agent5',
          attachedFiles: []
        },
        {
          id: 'milestone12',
          name: 'Rapid Hiring',
          description: 'Execute accelerated hiring process for support agents',
          dueDate: '2024-12-01',
          status: 'not-started',
          progressPercentage: 0,
          assignedAgentId: 'agent5',
          attachedFiles: []
        },
        {
          id: 'milestone13',
          name: 'Team Integration',
          description: 'Onboard and integrate new support team members',
          dueDate: '2024-12-20',
          status: 'not-started',
          progressPercentage: 0,
          assignedAgentId: 'agent5',
          attachedFiles: []
        }
      ],
      attachedFiles: [
        {
          id: 'file8',
          name: 'Support Metrics.xlsx',
          type: 'excel',
          size: '2.1 MB',
          url: '#'
        }
      ]
    },
    {
      id: '5',
      name: 'Leadership Development Program',
      shortDescription: 'Identify and develop internal leadership talent',
      status: 'Paused',
      startDate: '2024-09-01',
      endDate: '2025-02-28',
      taskDistribution: {
        total: 15,
        completed: 6,
        escalated: 1,
        paused: 8,
        notStarted: 0
      },
      aiAgents: [
        {
          id: 'agent6',
          name: 'Development Agent',
          imageIndex: 9,
          leadsFound: 234,
          successRate: 91.5,
          avgResponseTime: '4.2h'
        }
      ],
      humanInLoop: {
        id: 'human5',
        name: 'Lisa Wang',
        initials: 'LW',
        role: 'L&D Manager',
        department: 'Human Resources',
        email: 'lisa.wang@company.com',
        imageIndex: 10
      },
      category: 'Onboarding',
      milestones: [
        {
          id: 'milestone14',
          name: 'Talent Assessment',
          description: 'Identify high-potential employees for leadership development',
          dueDate: '2024-09-30',
          status: 'completed',
          progressPercentage: 100,
          assignedAgentId: 'agent6',
          attachedFiles: []
        },
        {
          id: 'milestone15',
          name: 'Program Design',
          description: 'Design comprehensive leadership development curriculum',
          dueDate: '2024-11-15',
          status: 'in-progress',
          progressPercentage: 30,
          assignedAgentId: 'agent6',
          attachedFiles: []
        },
        {
          id: 'milestone16',
          name: 'Implementation',
          description: 'Launch and execute leadership development program',
          dueDate: '2025-01-31',
          status: 'not-started',
          progressPercentage: 0,
          assignedAgentId: 'agent6',
          attachedFiles: []
        }
      ],
      attachedFiles: [
        {
          id: 'file9',
          name: 'Leadership Assessment.pdf',
          type: 'pdf',
          size: '1.9 MB',
          url: '#'
        },
        {
          id: 'file10',
          name: 'Program Outline.docx',
          type: 'word',
          size: '945 KB',
          url: '#'
        }
      ]
    }
  ];

  // Filter initiatives based on active spotlight
  const filteredInitiatives = dummyInitiatives.filter(initiative => {
    if (activeSpotlight === 'All initiatives') return true;
    if (activeSpotlight === 'Paused') return initiative.status === 'Paused';
    if (activeSpotlight === 'Escalations') return initiative.status === 'Escalated';
    return initiative.category === activeSpotlight;
  });

  // Further filter by search query
  const searchFilteredInitiatives = filteredInitiatives.filter(initiative =>
    initiative.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    initiative.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get status styling
  const getStatusStyling = (status: InitiativeStatus) => {
    switch (status) {
      case 'Escalated':
        return 'bg-r-100 text-r-400 border border-r-200';
      case 'Awaiting Human Input':
        return 'bg-y-100 text-y-400 border border-y-200';
      case 'Completed':
        return 'bg-p-50 text-p-400 border border-p-200';
      default:
        return 'bg-n-50 text-n-400 border border-n-100';
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Handle view initiative
  const handleViewInitiative = (initiativeId: string) => {
    if (onView) {
      onView(initiativeId);
    } else {
      console.log(`Viewing initiative: ${initiativeId}`);
    }
  };
  return (
    <div className="space-y-6">
      {/* Title and Description */}
      <div>
        <h2 className="text-xl font-poppins font-semibold text-n-500 mb-2">
          Initiatives
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          List of all initiatives within your team.
        </p>
      </div>

      {/* Controls Section */}
      <div className="bg-white rounded-xl border border-n-100 p-6">
        {/* Spotlights Toggle */}
        <div className="mb-6">
          <ToggleSwitch
            options={spotlightOptions}
            activeOptionId={activeSpotlight}
            onOptionChange={(optionId) => setActiveSpotlight(optionId as SpotlightFilter)}
          />
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 max-w-md">
            <Input
              type="text"
              placeholder="Search initiatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-visible">
          <table className="w-full">
            <thead>
              <tr className="border-b border-n-75">
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">Initiative name</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">Short description</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">Start date</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">End date</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">Task distribution</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">AI Agent distribution</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">Human in the loop</th>
                <th className="text-left py-3 px-4 text-sm font-poppins font-medium text-n-400">View</th>
              </tr>
            </thead>
            <tbody>
              {searchFilteredInitiatives.map((initiative) => (
                <tr key={initiative.id} className="border-b border-n-50 hover:bg-n-40 transition-colors">
                  {/* Initiative name */}
                  <td className="py-4 px-4">
                    <div className="text-sm font-poppins font-medium text-n-500">
                      {initiative.name}
                    </div>
                  </td>

                  {/* Short description */}
                  <td className="py-4 px-4">
                    <div className="text-sm font-poppins font-normal text-n-300 max-w-xs">
                      {initiative.shortDescription}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-poppins font-medium ${getStatusStyling(initiative.status)}`}>
                      {initiative.status}
                    </span>
                  </td>

                  {/* Start date */}
                  <td className="py-4 px-4">
                    <div className="text-sm font-poppins font-normal text-n-400">
                      {formatDate(initiative.startDate)}
                    </div>
                  </td>

                  {/* End date */}
                  <td className="py-4 px-4">
                    <div className="text-sm font-poppins font-normal text-n-400">
                      {formatDate(initiative.endDate)}
                    </div>
                  </td>

                  {/* Task distribution - Placeholder */}
                  <td className="py-4 px-4">
                    <TaskDistributionBar taskBreakdown={initiative.taskDistribution} />
                  </td>

                  {/* AI Agent distribution - Placeholder */}
                  <td className="py-4 px-4">
                    <AgentAvatarGroup agents={initiative.aiAgents} maxVisible={3} />
                  </td>

                  {/* Human in the loop - Placeholder */}
                  <td className="py-4 px-4">
                    <HumanAvatarGroup humans={[initiative.humanInLoop]} />
                  </td>

                  {/* View button */}
                  <td className="py-4 px-4">
                    <ViewInitiativeButton 
                      initiativeId={initiative.id} 
                      onView={handleViewInitiative}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty state */}
          {searchFilteredInitiatives.length === 0 && (
            <div className="text-center py-12">
              <div className="text-sm text-n-300">
                No initiatives found matching your criteria.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InitiativesTable;