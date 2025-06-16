import React from 'react';
import QuickCommandItem from '../dashboard/QuickCommandItem';

interface GoDeeperSectionProps {}

const GoDeeperSection: React.FC<GoDeeperSectionProps> = () => {
  // Dummy data for prompts
  const prompts = [
    { id: 'p1', title: 'Analyze hiring funnel drop-offs', description: 'Identify stages with highest candidate loss.' },
    { id: 'p2', title: 'Compare agent performance by role', description: 'See which agents excel in specific hiring areas.' },
    { id: 'p3', title: 'Predict future hiring needs', description: 'Forecast talent requirements based on growth plans.' },
    { id: 'p4', title: 'Optimize job description for engagement', description: 'Suggest improvements for better candidate attraction.' },
  ];

  return (
    <div className="bg-gr-25 rounded-xl p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-poppins font-semibold text-n-500 mb-4">
        Go Deeper
      </h3>
      <div className="space-y-4">
        {prompts.map((prompt) => (
          <QuickCommandItem
            key={prompt.id}
            title={prompt.title}
            description={prompt.description}
            onClick={() => console.log(`Executing prompt: ${prompt.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default GoDeeperSection;