import React, { useEffect, useRef, useState } from 'react';
import { PanelLeftOpen } from 'lucide-react';
import ProjectChatSection from '../components/projects/ProjectChatSection';
import ChatHistorySidebar from '../components/chat/ChatHistorySidebar';

interface ChatPageProps {
  initialChatMessage?: string;
}

const ChatPage: React.FC<ChatPageProps> = ({ initialChatMessage }) => {
  const chatSectionRef = useRef<any>(null);
  const [isChatHistoryCollapsed, setIsChatHistoryCollapsed] = useState(false);

  useEffect(() => {
    if (initialChatMessage && initialChatMessage.trim()) {
      // Add the initial message to the chat when component mounts or message changes
      if (chatSectionRef.current && chatSectionRef.current.addInitialMessage) {
        chatSectionRef.current.addInitialMessage(initialChatMessage);
      }
    }
  }, [initialChatMessage]);

  const handleToggleChatHistory = () => {
    setIsChatHistoryCollapsed(!isChatHistoryCollapsed);
  };

  return (
    <div className="h-[calc(100vh-72px)] flex">
      {/* Chat History Sidebar - only render when not collapsed */}
      {!isChatHistoryCollapsed && (
        <ChatHistorySidebar
          isCollapsed={isChatHistoryCollapsed}
          onToggleCollapse={handleToggleChatHistory}
        />
      )}

      {/* Expand Icon - only render when collapsed */}
      {isChatHistoryCollapsed && (
        <div className="fixed left-16 top-18 w-16 h-[calc(100vh-72px)] bg-white border-r border-n-75 z-30 flex flex-col">
          <div className="p-4">
            <button
              onClick={handleToggleChatHistory}
              className="w-8 h-8 flex items-center justify-center text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors"
              title="Expand chat history"
            >
              <PanelLeftOpen className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isChatHistoryCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <div className="h-full p-6">
          <div className="bg-white rounded-xl border border-n-100 p-6 h-full flex flex-col">
            <h3 className="text-lg font-poppins font-semibold text-n-500 mb-4">
              AI Assistant Chat
            </h3>
            <div className="flex-1">
              <ProjectChatSection ref={chatSectionRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;