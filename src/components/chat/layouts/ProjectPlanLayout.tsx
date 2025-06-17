import React from 'react';
import { Button } from '../../ui/button';
import { Clock, Users, Target, CheckCircle, AlertTriangle, Calendar, FileText, Settings } from 'lucide-react';

interface ProjectPlanLayoutProps {
  projectTitle: string;
  onApprove: (title: string) => void;
}

const ProjectPlanLayout: React.FC<ProjectPlanLayoutProps> = ({
  projectTitle,
  onApprove
}) => {
  // Generate estimated timeline based on project type
  const getEstimatedTimeline = () => {
    if (projectTitle.toLowerCase().includes('designer')) {
      return { duration: '8-12 weeks', phases: 4 };
    } else if (projectTitle.toLowerCase().includes('engineer')) {
      return { duration: '10-14 weeks', phases: 5 };
    } else {
      return { duration: '6-10 weeks', phases: 4 };
    }
  };

  const timeline = getEstimatedTimeline();

  return (
    <div className="p-6 space-y-6 bg-white border border-n-100 rounded-xl">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-n-75">
        <h2 className="text-xl font-poppins font-semibold text-n-500">
          Project Plan: {projectTitle}
        </h2>
        <p className="text-sm font-poppins font-normal text-n-300">
          AI-generated hiring initiative plan ready for your review
        </p>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gr-25 rounded-lg p-4 border border-n-100">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-4 h-4 text-b-200" />
            <span className="text-sm font-poppins font-medium text-n-500">Timeline</span>
          </div>
          <div className="text-lg font-poppins font-semibold text-n-500">{timeline.duration}</div>
          <div className="text-xs text-n-300">{timeline.phases} phases planned</div>
        </div>

        <div className="bg-gr-25 rounded-lg p-4 border border-n-100">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-g-300" />
            <span className="text-sm font-poppins font-medium text-n-500">Team Size</span>
          </div>
          <div className="text-lg font-poppins font-semibold text-n-500">3 AI Agents</div>
          <div className="text-xs text-n-300">+ 1 Human Supervisor</div>
        </div>

        <div className="bg-gr-25 rounded-lg p-4 border border-n-100">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="w-4 h-4 text-p-300" />
            <span className="text-sm font-poppins font-medium text-n-500">Success Rate</span>
          </div>
          <div className="text-lg font-poppins font-semibold text-n-500">92%</div>
          <div className="text-xs text-n-300">Based on similar projects</div>
        </div>
      </div>

      {/* Planned Milestones */}
      <div className="space-y-4">
        <h3 className="text-lg font-poppins font-medium text-n-500">Planned Milestones</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-n-300" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-poppins font-medium text-n-500">Candidate Sourcing & Screening</div>
              <div className="text-xs text-n-300">Identify and evaluate potential candidates</div>
            </div>
            <div className="text-xs text-n-300">Week 1-3</div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-n-300" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-poppins font-medium text-n-500">Interview Process</div>
              <div className="text-xs text-n-300">Conduct technical and cultural fit interviews</div>
            </div>
            <div className="text-xs text-n-300">Week 4-6</div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-n-300" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-poppins font-medium text-n-500">Offer & Negotiation</div>
              <div className="text-xs text-n-300">Extend offers and handle negotiations</div>
            </div>
            <div className="text-xs text-n-300">Week 7-8</div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-n-300" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-poppins font-medium text-n-500">Onboarding Setup</div>
              <div className="text-xs text-n-300">Prepare onboarding materials and schedule</div>
            </div>
            <div className="text-xs text-n-300">Week 9-10</div>
          </div>
        </div>
      </div>

      {/* AI Agents Assignment */}
      <div className="space-y-4">
        <h3 className="text-lg font-poppins font-medium text-n-500">AI Agent Assignment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gr-25 rounded-lg border border-n-100">
            <div className="text-sm font-poppins font-medium text-n-500 mb-2">Sourcing Agent Alpha</div>
            <div className="text-xs text-n-300 mb-2">Candidate identification & outreach</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-g-300 rounded-full"></div>
              <span className="text-xs text-n-300">Ready to deploy</span>
            </div>
          </div>

          <div className="p-4 bg-gr-25 rounded-lg border border-n-100">
            <div className="text-sm font-poppins font-medium text-n-500 mb-2">Screening Agent Beta</div>
            <div className="text-xs text-n-300 mb-2">Initial screening & assessments</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-g-300 rounded-full"></div>
              <span className="text-xs text-n-300">Ready to deploy</span>
            </div>
          </div>

          <div className="p-4 bg-gr-25 rounded-lg border border-n-100">
            <div className="text-sm font-poppins font-medium text-n-500 mb-2">Coordination Agent Gamma</div>
            <div className="text-xs text-n-300 mb-2">Interview scheduling & logistics</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-g-300 rounded-full"></div>
              <span className="text-xs text-n-300">Ready to deploy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Human Oversight */}
      <div className="space-y-4">
        <h3 className="text-lg font-poppins font-medium text-n-500">Human Oversight</h3>
        <div className="p-4 bg-gr-25 rounded-lg border border-n-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-b-300 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">SJ</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-poppins font-medium text-n-500">Sarah Johnson</div>
              <div className="text-xs text-n-300">Senior Hiring Manager - Engineering</div>
            </div>
            <div className="text-xs text-n-300">Assigned Supervisor</div>
          </div>
        </div>
      </div>

      {/* Estimated Outcomes */}
      <div className="space-y-4">
        <h3 className="text-lg font-poppins font-medium text-n-500">Estimated Outcomes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="text-lg font-poppins font-semibold text-n-500">10</div>
            <div className="text-xs text-n-300">Target Hires</div>
          </div>
          <div className="text-center p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="text-lg font-poppins font-semibold text-n-500">150+</div>
            <div className="text-xs text-n-300">Candidates Sourced</div>
          </div>
          <div className="text-center p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="text-lg font-poppins font-semibold text-n-500">$28K</div>
            <div className="text-xs text-n-300">Est. Cost per Hire</div>
          </div>
          <div className="text-center p-3 bg-gr-25 rounded-lg border border-n-100">
            <div className="text-lg font-poppins font-semibold text-n-500">85%</div>
            <div className="text-xs text-n-300">Success Probability</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center space-x-4 pt-4 border-t border-n-75">
        <Button 
          variant="outline" 
          className="px-6"
        >
          Modify Plan
        </Button>
        <Button 
          onClick={() => onApprove(projectTitle)}
          className="px-8 bg-p-300 hover:bg-p-400 text-white"
        >
          Approve & Create Project
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="text-center p-3 bg-b-40 rounded-lg">
        <p className="text-xs font-poppins font-normal text-b-300">
          This is an AI-generated project plan. Timeline and outcomes are estimates based on historical data.
        </p>
      </div>
    </div>
  );
};

export default ProjectPlanLayout;