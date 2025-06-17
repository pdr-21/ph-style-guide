import React, { useEffect, useRef } from 'react';
import PageHeader from '../components/common/PageHeader';
import ProjectChatSection from '../components/projects/ProjectChatSection';

interface ChatPageProps {
  initialChatMessage?: string;
}

const ChatPage: React.FC<ChatPageProps> = ({ initialChatMessage }) => {
  const chatSectionRef = useRef<any>(null);

  useEffect(() => {
    if (initialChatMessage && initialChatMessage.trim()) {
      // Add the initial message to the chat when component mounts or message changes
      if (chatSectionRef.current && chatSectionRef.current.addInitialMessage) {
        chatSectionRef.current.addInitialMessage(initialChatMessage);
      }
    }
  }, [initialChatMessage]);

  return (
    <div className="h-full flex flex-col">
      <PageHeader 
        title="Chat" 
        description="Communicate with AI agents and team members" 
      />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto h-full">
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