import React, { useEffect, useRef, useState } from 'react';
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
      {/* Chat History Sidebar - always render, but with different styles */}
      <ChatHistorySidebar
        isCollapsed={isChatHistoryCollapsed}
        onToggleCollapse={handleToggleChatHistory}
      />

      {/* Main Chat Area */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isChatHistoryCollapsed ? 'ml-0' : 'ml-64'
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