import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ArrowRight } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ProjectOverviewLayout from './layouts/ProjectOverviewLayout';
import HiringMetricsLayout from './layouts/HiringMetricsLayout';
import type { ChatMessage as ChatMessageType, ChatBubbleMessage, LayoutDisplayMessage, SpecialLayoutType } from '../../types';

interface ChatMessagesContainerProps {
  className?: string;
}

const ChatMessagesContainer = forwardRef<any, ChatMessagesContainerProps>(({ 
  className = '' 
}, ref) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      type: 'chat',
      content: 'Hello! I\'m here to help you with this initiative. What would you like to know?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Expose method to add initial message from parent
  useImperativeHandle(ref, () => ({
    addInitialMessage: (message: string) => {
      handleSendMessage(message);
    }
  }));

  // Check for special layout keywords
  const checkForSpecialLayout = (message: string): SpecialLayoutType => {
    const lowerMessage = message.toLowerCase();
    
    // Project overview keywords
    if (lowerMessage.includes('show me project overview') || 
        lowerMessage.includes('project overview') ||
        lowerMessage.includes('show project status') ||
        lowerMessage.includes('project dashboard')) {
      return 'projectOverview';
    }
    
    // Hiring metrics keywords
    if (lowerMessage.includes('analyze hiring metrics') || 
        lowerMessage.includes('hiring metrics') ||
        lowerMessage.includes('hiring analytics') ||
        lowerMessage.includes('show hiring data') ||
        lowerMessage.includes('hiring performance')) {
      return 'hiringMetrics';
    }
    
    return 'none';
  };

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
    const userMessage: ChatBubbleMessage = {
      id: Date.now().toString(),
      type: 'chat',
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Check for special layout keywords
    const detectedLayout = checkForSpecialLayout(message);
    
    // If we detect a special layout keyword, add the layout to messages
    if (detectedLayout !== 'none') {
      const layoutMessage: LayoutDisplayMessage = {
        id: (Date.now() + 1).toString(),
        type: 'layout',
        layoutType: detectedLayout,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, layoutMessage]);
      return; // Don't add a regular AI response
    }

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage: ChatBubbleMessage = {
        id: (Date.now() + 1).toString(),
        type: 'chat',
        content: getAIResponse(message),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  // Render layout component based on layout type
  const renderLayoutComponent = (layoutType: SpecialLayoutType) => {
    switch (layoutType) {
      case 'projectOverview':
        return <ProjectOverviewLayout />;
      case 'hiringMetrics':
        return <HiringMetricsLayout />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col justify-between h-full min-h-[400px] ${className}`}>
      {/* Messages Container with embedded layouts */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-4">
        {messages.map((message) => {
          if (message.type === 'chat') {
            return (
              <ChatMessage
                key={message.id}
                message={message}
                aiAgentImageIndex={0} // Use first agent image for AI
              />
            );
          } else if (message.type === 'layout') {
            return (
              <div key={message.id} className="my-6">
                {renderLayoutComponent(message.layoutType)}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
});

ChatMessagesContainer.displayName = 'ChatMessagesContainer';

export default ChatMessagesContainer;