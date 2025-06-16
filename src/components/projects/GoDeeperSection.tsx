import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GoDeeperSectionProps {}

const GoDeeperSection: React.FC<GoDeeperSectionProps> = () => {
  // Dummy data for prompts
  const prompts = [
    { id: 'p1', text: 'Analyze hiring funnel drop-offs to identify stages with highest candidate loss' },
    { id: 'p2', text: 'Compare agent performance by role to see which agents excel in specific hiring areas' },
    { id: 'p3', text: 'Predict future hiring needs based on growth plans and current trends' },
    { id: 'p4', text: 'Optimize job description for engagement to attract better candidates' },
  ];

  return (
    <div className="bg-gr-25 rounded-xl p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-poppins font-semibold text-n-500 mb-4">
        Go Deeper
      </h3>
      <div className="space-y-4">
        {prompts.map((prompt) => (
          <div
            key={prompt.id}
            onClick={() => console.log(`Executing prompt: ${prompt.text}`)}
            className="bg-white border border-n-100 rounded-xl p-4 hover:border-n-200 hover:shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-between group"
          >
            <span className="text-sm font-poppins font-normal text-n-500 flex-1">
              {prompt.text}
            </span>
            <ArrowRight className="w-4 h-4 text-n-300 group-hover:text-n-500 transition-colors ml-3 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoDeeperSection;