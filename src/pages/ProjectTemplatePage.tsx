import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ExpandableSection from '../components/common/ExpandableSection';
import ProjectTaskList from '../components/projects/ProjectTaskList';
import ProjectChatSection from '../components/projects/ProjectChatSection';
import type { ProjectTask } from '../components/projects/ProjectTaskList';

interface ProjectTemplatePageProps {
  initiativeId: string;
  onBack: () => void;
}

type ExpandedSection = 'tasks' | 'chat';

const ProjectTemplatePage: React.FC<ProjectTemplatePageProps> = ({ 
  initiativeId, 
  onBack 
}) => {
  // State to manage which section is expanded (only one can be expanded at a time)
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>('chat');

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
        <div className="lg:col-span-7 bg-white border border-n-75 rounded-xl p-6">
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-n-300">
              <h3 className="text-lg font-poppins font-medium mb-2">
                Left Container
              </h3>
              <p className="text-sm">
                Initiative ID: {initiativeId}
              </p>
              <p className="text-xs mt-2">
                This container will hold the main content for the initiative template
              </p>
            </div>
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