import React from 'react';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';

interface ViewInitiativeButtonProps {
  initiativeId: string;
  onView?: (initiativeId: string) => void;
  className?: string;
}

const ViewInitiativeButton: React.FC<ViewInitiativeButtonProps> = ({ 
  initiativeId, 
  onView,
  className = '' 
}) => {
  const handleClick = () => {
    if (onView) {
      onView(initiativeId);
    } else {
      // Default behavior - could navigate to initiative detail page
      console.log(`Viewing initiative: ${initiativeId}`);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleClick}
      className={`flex items-center gap-2 ${className}`}
    >
      <span>View</span>
      <ExternalLink className="w-3 h-3" />
    </Button>
  );
};

export default ViewInitiativeButton;