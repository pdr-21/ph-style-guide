import React from 'react';
import { User, Calendar, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Milestone, AI_Agent } from '../../types';
import { getAgentImageByIndex } from '../../lib/agentImages';
import AttachedFilesSection from './AttachedFilesSection';

interface MilestoneDetailProps {
  milestone: Milestone;
  aiAgents: AI_Agent[];
  className?: string;
}

const MilestoneDetail: React.FC<MilestoneDetailProps> = ({
  milestone,
  aiAgents,
  className = ''
}) => {
  // Find the assigned agent
  const assignedAgent = aiAgents.find(agent => agent.id === milestone.assignedAgentId);

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Get status styling
  const getStatusStyling = (status: Milestone['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-g-100 text-g-300 border border-g-200';
      case 'in-progress':
        return 'bg-b-40 text-b-300 border border-b-200';
      case 'not-started':
        return 'bg-n-50 text-n-400 border border-n-100';
      default:
        return 'bg-n-50 text-n-400 border border-n-100';
    }
  };

  // Check if this is a sourcing milestone
  const isSourcingMilestone = milestone.name.toLowerCase().includes('sourcing') || 
                             milestone.name.toLowerCase().includes('candidate');

  return (
    <div className={cn("space-y-6", className)}>
      {/* Milestone Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-poppins font-semibold text-n-500">
            {milestone.name}
          </h2>
          <span className={cn(
            "inline-flex items-center px-3 py-1 rounded-lg text-xs font-poppins font-medium capitalize",
            getStatusStyling(milestone.status)
          )}>
            {milestone.status.replace('-', ' ')}
          </span>
        </div>

        <p className="text-sm font-poppins font-normal text-n-300 leading-relaxed">
          {milestone.description}
        </p>
      </div>

      {/* Milestone Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Due Date */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-n-300" />
            <span className="text-sm font-poppins font-medium text-n-400">Due Date</span>
          </div>
          <div className="text-sm font-poppins font-normal text-n-500">
            {formatDate(milestone.dueDate)}
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-n-300" />
            <span className="text-sm font-poppins font-medium text-n-400">Progress</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-poppins font-normal text-n-500">
                {milestone.progressPercentage}% Complete
              </span>
            </div>
            <div className="w-full bg-n-50 rounded-full h-2">
              <div 
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  milestone.status === 'completed' ? "bg-g-300" :
                  milestone.status === 'in-progress' ? "bg-b-200" : "bg-n-200"
                )}
                style={{ width: `${milestone.progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Assigned Agent */}
      {assignedAgent && (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-n-300" />
            <span className="text-sm font-poppins font-medium text-n-400">Assigned Agent</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gr-25 rounded-lg">
            <div className="w-10 h-10 bg-n-50 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-n-300" />
            </div>
            <div>
              <div className="text-sm font-poppins font-medium text-n-500">
                {assignedAgent.name}
              </div>
              <div className="text-xs font-poppins font-normal text-n-300">
                {assignedAgent.successRate}% success rate • {assignedAgent.avgResponseTime} avg response
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sourced Candidates (if applicable) */}
      {isSourcingMilestone && milestone.sourcedCandidates && milestone.sourcedCandidates.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-poppins font-medium text-n-400">
            Sourced Candidates ({milestone.sourcedCandidates.length})
          </h3>
          <div className="space-y-2">
            {milestone.sourcedCandidates.map((candidate, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-3 bg-white border border-n-100 rounded-lg hover:border-n-200 transition-colors"
              >
                <div className="w-8 h-8 bg-n-50 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-n-300" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-poppins font-medium text-n-500">
                    {candidate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Attached Files */}
      <AttachedFilesSection files={milestone.attachedFiles || []} />
    </div>
  );
};

export default MilestoneDetail;