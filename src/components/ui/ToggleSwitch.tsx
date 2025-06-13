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
    const updateIndicator = () => {
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
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 10);
    return () => clearTimeout(timer);
  }, [activeOptionId, options]);

  // Also update on window resize
  useEffect(() => {
    const handleResize = () => {
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
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeOptionId, options]);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-flex bg-n-50 rounded-xl border border-n-100 p-1 ${className}`}
    >
      {/* Moving indicator background */}
      <div
        className="absolute top-1 bottom-1 bg-b-200 rounded-lg transition-all duration-300 ease-in-out shadow-sm"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />
      
      {/* Options */}
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