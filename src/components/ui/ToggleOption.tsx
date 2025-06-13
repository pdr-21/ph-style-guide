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
      className={`relative z-10 px-3 py-2 text-xs font-poppins font-medium transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-n-500'
      }`}
    >
      <div className="flex items-center">
        {Icon && (
          <Icon className={`w-3 h-3 ${label ? 'mr-1.5' : ''}`} />
        )}
        {label && <span>{label}</span>}
      </div>
    </button>
  );
};

export default ToggleOption;