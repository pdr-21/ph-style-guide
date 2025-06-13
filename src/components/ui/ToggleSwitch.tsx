import React, { useRef } from 'react';
import ToggleOption from './ToggleOption';

interface ToggleOption {
  id: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface ToggleSwitchProps {
  options: ToggleOption[];
  activeOptionId: string;
  onOptionChange: (optionId: string) => void;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  options,
  activeOptionId,
  onOptionChange,
  className = ''
}) => {
  const optionRefs = useRef<(React.RefObject<HTMLButtonElement>)[]>(
    options.map(() => React.createRef<HTMLButtonElement>())
  );

  return (
    <div className={`inline-flex bg-n-50 rounded-xl border border-n-100 p-1 ${className}`}>
      {options.map((option, index) => (
        <ToggleOption
          key={option.id}
          label={option.label}
          icon={option.icon}
          isActive={option.id === activeOptionId}
          onClick={() => onOptionChange(option.id)}
          optionRef={optionRefs.current[index]}
        />
      ))}
    </div>
  );
};

export default ToggleSwitch;
export type { ToggleOption };