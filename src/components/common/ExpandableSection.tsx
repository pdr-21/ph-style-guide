import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
  isExpanded,
  onToggle,
  className = ''
}) => {
  return (
    <div className={cn("bg-white border border-n-75 rounded-xl overflow-hidden", className)}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-n-40 transition-colors border-b border-n-75"
      >
        <h3 className="text-sm font-poppins font-medium text-n-500">
          {title}
        </h3>
        <div className="text-n-300">
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </button>

      {/* Content */}
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isExpanded ? "flex-1 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;