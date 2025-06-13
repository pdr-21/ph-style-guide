import React from 'react';
import QuickCommandItem from './QuickCommandItem';

const QuickCommandsGrid: React.FC = () => {
  // Sample quick command data - this will be replaced with real data later
  const quickCommands = [
    { id: 1, title: '', description: '' },
    { id: 2, title: '', description: '' },
    { id: 3, title: '', description: '' },
    { id: 4, title: '', description: '' },
    { id: 5, title: '', description: '' },
    { id: 6, title: '', description: '' },
  ];

  return (
    <div className="space-y-4">
      {quickCommands.map((command) => (
        <QuickCommandItem
          key={command.id}
          title={command.title}
          description={command.description}
        />
      ))}
    </div>
  );
};

export default QuickCommandsGrid;