import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ArrowRight } from 'lucide-react';
import ChatMessage from './ChatMessage';
import type { ChatMessage as ChatMessageType } from './ChatMessage';

interface ChatMessagesContainerProps {
  className?: string;
}

const ChatMessagesContainer = forwardRef<any, ChatMessagesContainerProps>(({ 
  className = '' 
}, ref) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      content: 'Hello! I\'m here to help you with this initiative. What would you like to know?',
      sender: 'ai'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Expose method to add initial message from parent
  useImperativeHandle(ref, () => ({
    addInitialMessage: (message: string) => {
      handleSendMessage(message);
    }
  }));

  // Simulate AI responses
  const getAIResponse = (userMessage: string): string => {
    const responses = [
      'I understand your question about the initiative. Let me analyze the current status and provide you with relevant insights.',
      'Based on the project data, I can see there are several areas we should focus on. Would you like me to elaborate on any specific aspect?',
      'That\'s a great point. The current metrics show positive progress, and I can help you identify the next steps.',
      'I\'ve reviewed the task distribution and agent performance. Here are my recommendations for optimizing the workflow.',
      'The timeline looks achievable given the current resources. Let me break down the key milestones for you.',
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Handle sending a message
  const handleSendMessage = (message: string = inputValue) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      content: message,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(message),
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className={`flex flex-col justify-between h-full min-h-[400px] ${className}`}>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            userAvatarImageIndex={0} // Use first agent image for demo user avatar
            aiAgentImageIndex={0} // Use first agent image for AI
          />
        ))}
      </div>

      {/* Chat Input */}
      <div className="border-t border-n-75 pt-3 mt-auto px-4">
        <div className="bg-gr-25 rounded-lg p-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask about this initiative..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(inputValue);
                  setInputValue('');
                }
              }}
              className="w-full px-3 py-2 pr-10 text-xs font-poppins font-normal text-n-500 placeholder:text-n-200 bg-gr-25 border-none rounded-lg focus:outline-none resize-none"
            />
            <button
              onClick={() => {
                handleSendMessage(inputValue);
                setInputValue('');
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-p-400 text-white rounded-md hover:bg-p-300 transition-colors"
            >
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ChatMessagesContainer.displayName = 'ChatMessagesContainer';

export default ChatMessagesContainer;