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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
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
        {actions.map((action, idx) => (
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
                setHoveredIdx(idx);
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
      {showPopover && hoveredIdx !== null && (
        <div
          data-popover="quick-action"
          onMouseLeave={() => setShowPopover(false)}
          className="absolute z-30 w-80 px-4 py-3 bg-white border border-n-100 rounded-xl shadow-lg flex flex-col gap-2"
          style={{ top: popoverPos.top, left: popoverPos.left }}
        >
          {/* Header */}
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-n-300" />
            <span className="text-xs font-poppins text-n-300">AI Strategy based on:</span>
          </div>

          {/* Dynamic content */}
          {(() => {
            const scenario = hoveredIdx % 3;
            switch (scenario) {
              case 0:
                return (
                  <div className="flex flex-col gap-2 text-xs text-n-500">
                    <p className="font-medium">Transcript from meeting John x Mathilde - EMEA Expansion</p>
                    <p className="italic">"... we want to open an office in the Netherlands and it would be nice to come up with a strategy for moving a few departments there..."</p>
                    <p><span className="font-medium">Meeting date:</span> 12-04-2024</p>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Meeting participants:</span>
                      <img src="https://source.unsplash.com/20x20/?face,man" alt="John Doe" className="w-5 h-5 rounded-full" />
                      <span>John Doe (me),</span>
                      <img src="https://source.unsplash.com/20x20/?face,woman" alt="Mathilde Zwike" className="w-5 h-5 rounded-full" />
                      <span>Mathilde Zwike</span>
                    </div>
                    <button className="mt-1 self-start px-3 py-1 bg-b-200 text-white rounded-full text-[10px] hover:bg-b-300 transition-colors">Follow-up</button>
                  </div>
                );
              case 1:
                return (
                  <div className="flex flex-col gap-2 text-xs text-n-500">
                    <p className="font-medium">Latest legislation developments require compliance with new regulations.</p>
                    <a
                      href="https://example.com/new-regulation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-b-300 hover:underline"
                    >
                      View regulation details
                    </a>
                    <button className="mt-1 self-start px-3 py-1 bg-b-200 text-white rounded-full text-[10px] hover:bg-b-300 transition-colors">Follow-up</button>
                  </div>
                );
              default:
                return (
                  <div className="flex flex-col gap-2 text-xs text-n-500">
                    <p className="font-medium">Quarterly Revenue Growth KPI shows a 25% increase compared to last year.</p>
                    <a
                      href="https://example.com/kpi-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-b-300 hover:underline"
                    >
                      View KPI dashboard
                    </a>
                    <button className="mt-1 self-start px-3 py-1 bg-b-200 text-white rounded-full text-[10px] hover:bg-b-300 transition-colors">Follow-up</button>
                  </div>
                );
            }
          })()}
        </div>
      )}
    </div>
  );
};

export default QuickActionsSection; 