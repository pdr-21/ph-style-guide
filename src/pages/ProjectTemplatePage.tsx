import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import ExpandableSection from '../components/common/ExpandableSection';
import ProjectTaskList from '../components/projects/ProjectTaskList';
import ChatMessagesContainer from '../components/chat/ChatMessagesContainer';
import NotificationDropdown from '../components/projects/NotificationDropdown';
import MilestoneTimeline from '../components/projects/MilestoneTimeline';
import MilestoneList from '../components/projects/MilestoneList';
import MilestoneDetail from '../components/projects/MilestoneDetail';
import AgentsList from '../components/projects/AgentsList';
import type { ProjectTask } from '../components/projects/ProjectTaskList';
import ProjectActionsList from '../components/projects/ProjectActionsList';
import HumanResponsibleCard from '../components/projects/HumanResponsibleCard';
import EscalatedTasksList from '../components/projects/EscalatedTasksList';
import type { EscalatedTask } from '../components/projects/EscalatedTaskCard';
import type { Initiative } from '../types';

interface ProjectTemplatePageProps {
  initiativeId: string;
  onBack: () => void;
}

type ExpandedSection = 'tasks' | 'chat';
type TabId = 'overview' | 'actions' | 'agents' | 'human-in-loop' | 'escalations';

const ProjectTemplatePage: React.FC<ProjectTemplatePageProps> = ({ 
  initiativeId, 
  onBack 
}) => {
  // State to manage which section is expanded (only one can be expanded at a time)
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>('chat');
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('');

  // Dummy initiatives data (imported from InitiativesTable)
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
      attachedFiles: [],
      actions: [
        {
          id: 'action1',
          title: 'Review candidate profiles',
          description: 'Analyze and review sourced candidate profiles for technical fit',
          status: 'completed',
          category: 'Review & Analysis',
          milestoneId: 'milestone1'
        },
        {
          id: 'action2',
          title: 'Update job requirements',
          description: 'Refine job requirements based on market feedback',
          status: 'completed',
          category: 'Documentation',
          milestoneId: 'milestone1'
        },
        {
          id: 'action3',
          title: 'Schedule technical interviews',
          description: 'Coordinate technical interview sessions with engineering team',
          status: 'escalated',
          category: 'Coordination',
          milestoneId: 'milestone2'
        },
        {
          id: 'action4',
          title: 'Prepare assessment materials',
          description: 'Create technical assessment questions and coding challenges',
          status: 'completed',
          category: 'Preparation',
          milestoneId: 'milestone2'
        },
        {
          id: 'action5',
          title: 'Conduct reference checks',
          description: 'Perform background and reference verification for top candidates',
          status: 'not-started',
          category: 'Verification',
          milestoneId: 'milestone3'
        },
        {
          id: 'action6',
          title: 'Prepare final interview questions',
          description: 'Develop behavioral and cultural fit interview questions',
          status: 'not-started',
          category: 'Preparation',
          milestoneId: 'milestone3'
        },
        {
          id: 'action7',
          title: 'Draft offer letters',
          description: 'Prepare competitive offer packages for selected candidates',
          status: 'not-started',
          category: 'Documentation',
          milestoneId: 'milestone4'
        },
        {
          id: 'action8',
          title: 'Setup onboarding workflow',
          description: 'Configure automated onboarding process for new hires',
          status: 'not-started',
          category: 'Process Setup',
          milestoneId: 'milestone4'
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
      attachedFiles: [],
      actions: [
        {
          id: 'action9',
          title: 'Analyze current process',
          description: 'Map out existing onboarding workflow and identify bottlenecks',
          status: 'completed',
          category: 'Analysis',
          milestoneId: 'milestone5'
        },
        {
          id: 'action10',
          title: 'Survey new employees',
          description: 'Collect feedback from recent hires about onboarding experience',
          status: 'completed',
          category: 'Research',
          milestoneId: 'milestone5'
        },
        {
          id: 'action11',
          title: 'Configure HRIS integration',
          description: 'Setup automated data sync between HR systems',
          status: 'escalated',
          category: 'Technical Setup',
          milestoneId: 'milestone6'
        },
        {
          id: 'action12',
          title: 'Test workflow automation',
          description: 'Validate automated onboarding workflows with test scenarios',
          status: 'not-started',
          category: 'Testing',
          milestoneId: 'milestone6'
        },
        {
          id: 'action13',
          title: 'Create training videos',
          description: 'Develop video content for new employee orientation',
          status: 'not-started',
          category: 'Content Creation',
          milestoneId: 'milestone7'
        },
        {
          id: 'action14',
          title: 'Design welcome kit',
          description: 'Create physical and digital welcome materials for new hires',
          status: 'not-started',
          category: 'Design',
          milestoneId: 'milestone7'
        }
      ]
    }
  ];

  // Find the current initiative
  const currentInitiative = dummyInitiatives.find(init => init.id === initiativeId);

  // Initialize selected milestone when initiative changes
  React.useEffect(() => {
    if (currentInitiative && currentInitiative.milestones.length > 0) {
      setSelectedMilestoneId(currentInitiative.milestones[0].id);
    }
  }, [currentInitiative]);

  // Calculate completion percentage
  const getCompletionPercentage = (initiative: Initiative) => {
    const { completed, total } = initiative.taskDistribution;
    return Math.round((completed / total) * 100);
  };

  // Calculate days remaining
  const getDaysRemaining = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Tab configuration
  const tabs = [
    { id: 'overview' as TabId, label: 'Overview' },
    { id: 'actions' as TabId, label: 'Actions' },
    { id: 'agents' as TabId, label: 'Agents' },
    { id: 'human-in-loop' as TabId, label: 'Human in the loop' },
    { id: 'escalations' as TabId, label: 'Escalations' },
  ];

  // Sample tasks data
  const sampleTasks: ProjectTask[] = [
    {
      id: 'task1',
      title: 'Review candidate profiles for Senior Engineer position',
      dueDate: '2024-06-20',
      agent: {
        id: 'agent1',
        name: 'Sourcing Agent Alpha',
        imageIndex: 0,
        leadsFound: 1247,
        successRate: 94.2,
        avgResponseTime: '2.3h'
      }
    },
    {
      id: 'task2',
      title: 'Schedule interviews for Product Manager candidates',
      dueDate: '2024-06-22',
      agent: {
        id: 'agent2',
        name: 'Screening Agent Beta',
        imageIndex: 1,
        leadsFound: 892,
        successRate: 89.7,
        avgResponseTime: '1.8h'
      }
    },
    {
      id: 'task3',
      title: 'Prepare offer letter for selected candidate',
      dueDate: '2024-06-25',
      agent: {
        id: 'agent3',
        name: 'Onboarding Agent Gamma',
        imageIndex: 3,
        leadsFound: 567,
        successRate: 92.1,
        avgResponseTime: '3.1h'
      }
    }
  ];

  // Sample escalated tasks data
  const sampleEscalatedTasks: EscalatedTask[] = [
    {
      id: 'escalated-1',
      title: 'Technical interview scheduling conflicts',
      description: 'Multiple candidates have conflicting availability with engineering team members for technical interviews.',
      agent: {
        id: 'agent2',
        name: 'Screening Agent Beta',
        imageIndex: 1,
        leadsFound: 892,
        successRate: 89.7,
        avgResponseTime: '1.8h'
      },
      dueDate: '2024-06-22',
      escalatedDate: '2024-06-18',
      priority: 'high',
      reason: 'Unable to resolve scheduling conflicts automatically. Manual intervention required to coordinate with hiring managers.'
    },
    {
      id: 'escalated-2',
      title: 'Candidate background verification delays',
      description: 'Background check process is taking longer than expected for top candidates, potentially delaying offer timeline.',
      agent: {
        id: 'agent1',
        name: 'Sourcing Agent Alpha',
        imageIndex: 0,
        leadsFound: 1247,
        successRate: 94.2,
        avgResponseTime: '2.3h'
      },
      dueDate: '2024-06-25',
      escalatedDate: '2024-06-19',
      priority: 'medium',
      reason: 'Third-party verification service experiencing delays. Alternative verification methods may be needed.'
    },
    {
      id: 'escalated-3',
      title: 'Salary negotiation outside parameters',
      description: 'Top candidate is requesting compensation above approved budget range for the position.',
      agent: {
        id: 'agent3',
        name: 'Onboarding Agent Gamma',
        imageIndex: 3,
        leadsFound: 567,
        successRate: 92.1,
        avgResponseTime: '3.1h'
      },
      dueDate: '2024-06-28',
      escalatedDate: '2024-06-20',
      priority: 'high',
      reason: 'Candidate expectations exceed budget parameters. Requires approval for budget adjustment or alternative compensation structure.'
    }
  ];

  // Handle section toggle - ensures only one section is expanded at a time
  const handleSectionToggle = (section: ExpandedSection) => {
    setExpandedSection(expandedSection === section ? 'chat' : section);
  };

  // Handle milestone selection
  const handleSelectMilestone = (milestoneId: string) => {
    setSelectedMilestoneId(milestoneId);
  };

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        if (!currentInitiative) return null;
        
        const selectedMilestone = currentInitiative.milestones.find(m => m.id === selectedMilestoneId);
        
        return (
          <div className="space-y-6">
            {/* Milestone Timeline */}
            <MilestoneTimeline
              milestones={currentInitiative.milestones}
              selectedMilestoneId={selectedMilestoneId}
              onSelectMilestone={handleSelectMilestone}
            />
            
            {/* Two-column layout */}
            <div className="flex gap-6">
              {/* Left column - Milestone List */}
              <div className="w-80 flex-shrink-0">
                <MilestoneList
                  milestones={currentInitiative.milestones}
                  selectedMilestoneId={selectedMilestoneId}
                  onSelectMilestone={handleSelectMilestone}
                />
              </div>
              
              {/* Right column - Milestone Detail */}
              <div className="flex-1">
                {selectedMilestone ? (
                  <MilestoneDetail
                    milestone={selectedMilestone}
                    aiAgents={currentInitiative.aiAgents}
                  />
                ) : (
                  <div className="text-center py-12">
                    <div className="text-sm text-n-300">
                      Select a milestone to view details
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case 'actions':
        return (
          <div className="space-y-6">
            <ProjectActionsList 
              actions={currentInitiative?.actions || []}
            />
          </div>
        );
      case 'agents':
        return (
          <div className="space-y-6">
            <AgentsList 
              agents={currentInitiative?.aiAgents || []}
            />
          </div>
        );
      case 'human-in-loop':
        return (
          <div className="space-y-6">
            {currentInitiative && (
              <HumanResponsibleCard human={currentInitiative.humanInLoop} />
            )}
          </div>
        );
      case 'escalations':
        return (
          <div className="space-y-6">
            <EscalatedTasksList tasks={sampleEscalatedTasks} />
          </div>
        );
      default:
        return null;
    }
  };

  // If initiative not found, show error
  if (!currentInitiative) {
    return (
      <div className="min-h-[calc(100vh-4.5rem)] bg-gr-25 p-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center gap-2 text-n-400 hover:text-n-500"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </div>
        <div className="text-center py-12">
          <h3 className="text-lg font-poppins font-medium text-n-500 mb-2">
            Initiative Not Found
          </h3>
          <p className="text-sm text-n-300">
            The initiative with ID "{initiativeId}" could not be found.
          </p>
        </div>
      </div>
    );
  }

  const completionPercentage = getCompletionPercentage(currentInitiative);
  const daysRemaining = getDaysRemaining(currentInitiative.endDate);

  return (
    <div className="h-fit bg-gr-25 p-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="flex items-center gap-2 text-n-400 hover:text-n-500"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Button>
      </div>

      {/* Main Grid Layout - 70/30 split */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 h-[calc(100vh-10.5rem)]">
        {/* Left Container - 70% */}
        <div className="lg:col-span-7 bg-white border border-n-75 rounded-xl p-6 flex flex-col">
          {/* Initiative Header */}
          <div className="space-y-4 mb-6">
            {/* Title and Completion */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-2xl font-poppins font-semibold text-n-500 mb-2">
                  {currentInitiative.name}
                </h1>
                <p className="text-sm font-poppins font-normal text-n-300">
                  {currentInitiative.shortDescription}
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-poppins font-semibold text-b-200">
                  {completionPercentage}% Complete
                </div>
              </div>
            </div>

            {/* Timeline and Notification */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm font-poppins font-normal text-n-400">
                <Clock className="w-4 h-4" />
                <span>Expected end: {formatDate(currentInitiative.endDate)}</span>
                <span>•</span>
                <span>{daysRemaining} days remaining</span>
              </div>
              <NotificationDropdown />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-n-100 mb-6">
            <div className="flex space-x-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-poppins font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-200 text-b-200'
                      : 'border-transparent text-n-400 hover:text-n-500 hover:border-n-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto">
            {renderTabContent()}
          </div>
        </div>

        {/* Right Container - 30% */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full">
          {/* Your Tasks Section */}
          <ExpandableSection
            title="Your tasks"
            isExpanded={expandedSection === 'tasks'}
            onToggle={() => handleSectionToggle('tasks')}
            className={expandedSection === 'tasks' ? 'flex-1' : 'flex-shrink-0'}
          >
            <ProjectTaskList tasks={sampleTasks} />
          </ExpandableSection>

          {/* Chat Section */}
          <ExpandableSection
            title="Chat"
            isExpanded={expandedSection === 'chat'}
            onToggle={() => handleSectionToggle('chat')}
            className={expandedSection === 'chat' ? 'flex-1' : 'flex-shrink-0'}
          >
            <ChatMessagesContainer onApproveProject={() => {}} />
          </ExpandableSection>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplatePage;