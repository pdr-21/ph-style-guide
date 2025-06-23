import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Star } from 'lucide-react';

const actions: string[] = [
  'Open 10 new locations in the US',
  'Expand to EMEA region',
  'Downscale and reduce employee costs',
  'Increase efficiency through digital/AI transformation',
  'Launch new product line',
  'Comply with new labor regulations',
  'Enter hypergrowth phase',
];

const moreActions: string[] = [
  'Shift to remote-first work',
  'Company merger/acquisition',
  'Improve diversity and inclusion (DEI)',
  'Address high attrition in tech roles',
  'Increase internal mobility',
  'Automate customer support',
];

const QuickActionsSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-4 relative" ref={sectionRef}>
      <h2 className="text-sm font-poppins font-medium text-n-400">
        Strategies based on your data:
      </h2>

      <div className="flex flex-wrap gap-3 items-center">
        {actions.map((action) => (
          <button
            key={action}
            className="bg-white border border-n-75 rounded-full px-4 py-3 text-xs font-poppins font-medium text-n-500 text-left shadow-sm hover:bg-n-40 transition-colors"
            onMouseEnter={(e) => {
              if (sectionRef.current) {
                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                const parentRect = sectionRef.current.getBoundingClientRect();
                setPopoverPos({
                  top: rect.bottom - parentRect.top + 8,
                  left: rect.left - parentRect.left,
                });
                setShowPopover(true);
              }
            }}
            onMouseLeave={(e) => {
              // if moving into popover, don't hide; we'll handle in popover leave
              const related = e.relatedTarget as HTMLElement;
              if (related && related.dataset.popover === 'quick-action') return;
              setShowPopover(false);
            }}
          >
            {action}
          </button>
        ))}

        {/* See more toggle and dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center text-xs font-poppins font-medium text-b-300 hover:underline focus:outline-none"
          >
            See more
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-72 bg-white border border-n-75 rounded-xl shadow-lg z-20 p-2">
              {moreActions.map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-3 py-2 text-xs font-poppins font-medium text-n-500 hover:bg-n-40 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popover */}
      {showPopover && (
        <div
          data-popover="quick-action"
          onMouseLeave={() => setShowPopover(false)}
          className="absolute z-30 px-4 py-3 bg-white border border-n-100 rounded-xl shadow-lg flex items-center gap-2"
          style={{ top: popoverPos.top, left: popoverPos.left }}
        >
          <Star className="w-4 h-4 text-b-200 fill-b-200" />
          <span className="text-xs font-poppins font-medium text-b-200 whitespace-nowrap">AI Insight based on:</span>
        </div>
      )}
    </div>
  );
};

export default QuickActionsSection; 