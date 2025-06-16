import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ProjectTemplatePageProps {
  initiativeId: string;
  onBack: () => void;
}

const ProjectTemplatePage: React.FC<ProjectTemplatePageProps> = ({ 
  initiativeId, 
  onBack 
}) => {
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
        <div className="lg:col-span-3 bg-white border border-n-75 rounded-xl p-6">
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-n-300">
              <h3 className="text-lg font-poppins font-medium mb-2">
                Right Container
              </h3>
              <p className="text-xs">
                This container will hold supplementary content and actions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplatePage;