import React from 'react';
import { Plus, PanelLeftClose, PanelLeftOpen, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ChatHistorySidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  className?: string;
}

const ChatHistorySidebar: React.FC<ChatHistorySidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  className = ''
}) => {
  // Sample chat history data
  const chatHistory = [
    { id: '1', title: 'Schedule intake meeting', timestamp: 'Today' },
    { id: '2', title: 'Chief Investment Officer reachout', timestamp: 'Today' },
    { id: '3', title: 'Generate job progress report', timestamp: 'Today' },
    { id: '4', title: 'ICU Nurse Shortlist', timestamp: 'Today' },
  ];

  // When collapsed, return null to completely hide the sidebar
  if (isCollapsed) {
    return null;
  }

  return (
    <div className={cn(
      "fixed left-16 top-18 w-64 h-[calc(100vh-72px)] bg-gr-25 border-r border-n-75 z-30 flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="p-4 border-b border-n-75">
        <div className="flex items-center justify-between mb-4">
        
          <button
            onClick={onToggleCollapse}
            className="w-8 h-8 flex items-center justify-center text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors"
            title="Collapse chat history"
          >
            <PanelLeftClose className="w-5 h-5" />
          </button>
        </div>

        {/* New Chat Button */}
        <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-n-50 hover:bg-n-100 rounded-lg transition-colors text-n-400 hover:text-n-500">
          <Plus className="w-4 h-4" />
          <span className="text-sm font-poppins font-medium">New chat</span>
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-xs font-poppins font-medium text-n-300 uppercase tracking-wider mb-4">
            RECENT CHATS
          </h3>

          {/* Today Section */}
          <div className="mb-6">
            <h4 className="text-sm font-poppins font-medium text-n-400 mb-3">
              Today
            </h4>
            <div className="space-y-2">
              {chatHistory.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full text-left p-2 rounded-lg hover:bg-n-50 transition-colors group"
                >
                  <div className="text-sm font-poppins font-normal text-n-500 group-hover:text-n-600 line-clamp-2">
                    {chat.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* More Button */}
          <button className="flex items-center space-x-2 text-b-200 hover:text-b-300 transition-colors">
            <ChevronDown className="w-4 h-4" />
            <span className="text-sm font-poppins font-medium">More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHistorySidebar;