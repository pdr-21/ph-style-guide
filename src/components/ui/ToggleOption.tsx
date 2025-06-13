import React from 'react';

interface ToggleOptionProps {
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  onClick: () => void;
  optionRef: React.RefObject<HTMLButtonElement>;
}

const ToggleOption: React.FC<ToggleOptionProps> = ({
  label,
  icon: Icon,
  isActive,
  onClick,
  optionRef
}) => {
  return (
    <button
      ref={optionRef}
      onClick={onClick}
      className={`px-4 py-2 text-xs font-poppins font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
        isActive 
          ? 'bg-white border border-b-200 text-b-200 shadow-sm' 
          : 'text-n-400 hover:text-n-500 hover:bg-n-100'
      }`}
    >
      <div className="flex items-center justify-center">
        {Icon && (
          <Icon className={`w-3 h-3 ${label ? 'mr-1.5' : ''}`} />
        )}
        {label && <span>{label}</span>}
      </div>
    </button>
  );
};

export default ToggleOption;