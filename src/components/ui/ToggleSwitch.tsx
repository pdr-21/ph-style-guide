import React, { useState, useEffect, useRef } from 'react';
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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(React.RefObject<HTMLButtonElement>)[]>([]);

  // Initialize refs for each option
  useEffect(() => {
    optionRefs.current = options.map(() => React.createRef<HTMLButtonElement>());
  }, [options]);

  // Update indicator position and width when active option changes
  useEffect(() => {
    const activeIndex = options.findIndex(option => option.id === activeOptionId);
    
    if (activeIndex !== -1 && optionRefs.current[activeIndex]?.current && containerRef.current) {
      const activeButton = optionRefs.current[activeIndex].current;
      const container = containerRef.current;
      
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;
      
      setIndicatorStyle({ left, width });
    }
  }, [activeOptionId, options]);

  return (
    <div 
      ref={containerRef}
      className={`relative bg-n-50 rounded-lg p-1 ${className}`}
    >
      {/* Moving indicator */}
      <div
        className="absolute top-1 bottom-1 bg-b-200 rounded-md transition-all duration-300 ease-in-out"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />
      
      {/* Options */}
      <div className="relative flex">
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
    </div>
  );
};

export default ToggleSwitch;
export type { ToggleOption };