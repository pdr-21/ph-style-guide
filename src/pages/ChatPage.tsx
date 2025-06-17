import React, { useEffect, useRef, useState } from 'react';
import ProjectChatSection from '../components/projects/ProjectChatSection';
import ChatHistorySidebar from '../components/chat/ChatHistorySidebar';
import ChatInput from '../components/dashboard/ChatInput';
import SuggestionButton from '../components/chat/SuggestionButton';

interface ChatPageProps {
  initialChatMessage?: string;
}

const ChatPage: React.FC<ChatPageProps> = ({ initialChatMessage }) => {
  const chatSectionRef = useRef<any>(null);
  const [isChatHistoryCollapsed, setIsChatHistoryCollapsed] = useState(false);
  const [localChatMessage, setLocalChatMessage] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);

  // Get current time for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  useEffect(() => {
    if (initialChatMessage && initialChatMessage.trim()) {
      // Add the initial message to the chat when component mounts or message changes
      if (chatSectionRef.current && chatSectionRef.current.addInitialMessage) {
        chatSectionRef.current.addInitialMessage(initialChatMessage);
      }
    }
  }, [initialChatMessage]);

  useEffect(() => {
    if (localChatMessage && hasInteracted) {
      // Add the local message to the chat when user interacts with this page's interface
      if (chatSectionRef.current && chatSectionRef.current.addInitialMessage) {
        chatSectionRef.current.addInitialMessage(localChatMessage);
      }
    }
  }, [localChatMessage, hasInteracted]);

  const handleToggleChatHistory = () => {
    setIsChatHistoryCollapsed(!isChatHistoryCollapsed);
  };

  const handleLocalSendMessage = (message: string) => {
    setLocalChatMessage(message);
    setHasInteracted(true);
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setLocalChatMessage(suggestionText);
    setHasInteracted(true);
  };

  // Check if we should show the initial interface or the chat interface
  const showInitialInterface = !initialChatMessage && !hasInteracted;

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
            {showInitialInterface ? (
              /* Initial Chat Interface */
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {/* Greeting */}
                <h1 className="text-2xl font-poppins font-semibold text-n-500">
                  {getGreeting()}, Samantha
                </h1>

                {/* Chat Input with custom width */}
                <div className="w-46">
                  <ChatInput 
                    showToggleSwitch={false}
                    onSendMessageAndNavigate={handleLocalSendMessage}
                  />
                </div>

                {/* Suggestion Buttons */}
                <div className="flex gap-4">
                  <SuggestionButton
                    text="Provide sourcing insights"
                    onClick={() => handleSuggestionClick("Provide sourcing insights")}
                  />
                  <SuggestionButton
                    text="Provide sourcing insights"
                    onClick={() => handleSuggestionClick("Provide sourcing insights")}
                  />
                  <SuggestionButton
                    text="Provide sourcing insights"
                    onClick={() => handleSuggestionClick("Provide sourcing insights")}
                  />
                </div>
              </div>
            ) : (
              /* Regular Chat Interface */
              <>
                <h3 className="text-lg font-poppins font-semibold text-n-500 mb-4">
                  AI Assistant Chat
                </h3>
                <div className="flex-1">
                  <ProjectChatSection ref={chatSectionRef} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;