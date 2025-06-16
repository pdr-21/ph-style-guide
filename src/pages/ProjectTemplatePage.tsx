import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import ExpandableSection from '../components/common/ExpandableSection';
import ProjectTaskList from '../components/projects/ProjectTaskList';
import ProjectChatSection from '../components/projects/ProjectChatSection';
import NotificationDropdown from '../components/projects/NotificationDropdown';
import type { ProjectTask } from '../components/projects/ProjectTaskList';
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
      category: 'Hiring'
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
      category: 'Onboarding'
    }
  ];

  // Find the current initiative
  const currentInitiative = dummyInitiatives.find(init => init.id === initiativeId);

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

  // Handle section toggle - ensures only one section is expanded at a time
  const handleSectionToggle = (section: ExpandedSection) => {
    setExpandedSection(expandedSection === section ? 'chat' : section);
  };

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-poppins font-medium text-n-500 mb-2">
                Overview Content
              </h3>
              <p className="text-sm text-n-300">
                This tab will contain the initiative overview, including key metrics, progress charts, and summary information.
              </p>
            </div>
          </div>
        );
      case 'actions':
        return (
          <div className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-poppins font-medium text-n-500 mb-2">
                Actions Content
              </h3>
              <p className="text-sm text-n-300">
                This tab will contain available actions, workflows, and automation options for the initiative.
              </p>
            </div>
          </div>
        );
      case 'agents':
        return (
          <div className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-poppins font-medium text-n-500 mb-2">
                Agents Content
              </h3>
              <p className="text-sm text-n-300">
                This tab will contain detailed information about AI agents working on this initiative, their performance metrics, and task assignments.
              </p>
            </div>
          </div>
        );
      case 'human-in-loop':
        return (
          <div className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-poppins font-medium text-n-500 mb-2">
                Human in the Loop Content
              </h3>
              <p className="text-sm text-n-300">
                This tab will contain information about human oversight, approvals needed, and human-AI collaboration details.
              </p>
            </div>
          </div>
        );
      case 'escalations':
        return (
          <div className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-poppins font-medium text-n-500 mb-2">
                Escalations Content
              </h3>
              <p className="text-sm text-n-300">
                This tab will contain escalated tasks, issues requiring attention, and resolution workflows.
              </p>
            </div>
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
    <div className="min-h-[calc(100vh-4.5rem)] bg-gr-25 p-8">
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
            <ProjectChatSection />
          </ExpandableSection>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplatePage;