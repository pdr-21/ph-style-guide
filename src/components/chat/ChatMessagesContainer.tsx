import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ArrowRight } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ProjectOverviewLayout from './layouts/ProjectOverviewLayout';
import HiringMetricsLayout from './layouts/HiringMetricsLayout';
import ProjectPlanLayout from './layouts/ProjectPlanLayout';
import type { ChatMessage as ChatMessageType, ChatBubbleMessage, LayoutDisplayMessage, SpecialLayoutType } from '../../types';

interface ChatMessagesContainerProps {
  className?: string;
  onApproveProject?: (title: string) => void;
}

const ChatMessagesContainer = forwardRef<any, ChatMessagesContainerProps>(({ 
  className = '',
  onApproveProject
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
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProjectTitle, setLoadingProjectTitle] = useState('');

  // Expose method to add initial message from parent
  useImperativeHandle(ref, () => ({
    addInitialMessage: (message: string) => {
      handleSendMessage(message);
    }
  }));

  // Check for special layout keywords and extract project title if applicable
  const checkForSpecialLayout = (message: string): { layoutType: SpecialLayoutType; projectTitle?: string } => {
    const lowerMessage = message.toLowerCase();
    
    // Project plan keywords - extract the hiring request
    const hiringMatch = lowerMessage.match(/(?:i want to hire|hire|need|looking for)\s+(\d+)\s+([a-zA-Z\s]+?)(?:\s+in my team|\s+for|\s+to|\s*$)/);
    if (hiringMatch) {
      const count = hiringMatch[1];
      const role = hiringMatch[2].trim();
      const projectTitle = `Hire ${count} ${role}${role.endsWith('s') ? '' : 's'}`;
      return { layoutType: 'projectPlan', projectTitle };
    }
    
    // Project overview keywords
    if (lowerMessage.includes('show me project overview') || 
        lowerMessage.includes('project overview') ||
        lowerMessage.includes('show project status') ||
        lowerMessage.includes('project dashboard')) {
      return { layoutType: 'projectOverview' };
    }
    
    // Hiring metrics keywords
    if (lowerMessage.includes('analyze hiring metrics') || 
        lowerMessage.includes('hiring metrics') ||
        lowerMessage.includes('hiring analytics') ||
        lowerMessage.includes('show hiring data') ||
        lowerMessage.includes('hiring performance')) {
      return { layoutType: 'hiringMetrics' };
    }
    
    return { layoutType: 'none' };
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
    
    // If already loading, just clear input and return
    if (isLoading) {
      setInputValue('');
      return;
    }

    // Add user message
    const userMessage: ChatBubbleMessage = {
      id: Date.now().toString(),
      type: 'chat',
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue(''); // Clear input immediately after adding user message

    // Check for special layout keywords
    const { layoutType, projectTitle } = checkForSpecialLayout(message);
    
    // If we detect a special layout keyword, add the layout to messages
    if (layoutType !== 'none') {
      if (layoutType === 'projectPlan') {
        // Set loading state for project plan
        setIsLoading(true);
        setLoadingProjectTitle(projectTitle || 'your goal');
        
        // Delay the addition of the project plan layout by 15 seconds
        setTimeout(() => {
          setIsLoading(false);
          const layoutMessage: LayoutDisplayMessage = {
            id: (Date.now() + 1).toString(),
            type: 'layout',
            layoutType,
            projectTitle,
            sender: 'ai',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, layoutMessage]);
        }, 15000); // 15 seconds delay
        
        return; // Don't add a regular AI response
      } else {
        // For other layout types, add immediately
        const layoutMessage: LayoutDisplayMessage = {
          id: (Date.now() + 1).toString(),
          type: 'layout',
          layoutType,
          projectTitle,
          sender: 'ai',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, layoutMessage]);
        return; // Don't add a regular AI response
      }
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

  // Render layout component based on layout type and data
  const renderLayoutComponent = (layoutType: SpecialLayoutType, projectTitle?: string) => {
    switch (layoutType) {
      case 'projectOverview':
        return <ProjectOverviewLayout />;
      case 'hiringMetrics':
        return <HiringMetricsLayout />;
      case 'projectPlan':
        return (
          <ProjectPlanLayout 
            projectTitle={projectTitle || 'Untitled Project'} 
            onApprove={onApproveProject || (() => {})}
          />
        );
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
                {renderLayoutComponent(message.layoutType, message.projectTitle)}
              </div>
            );
          }
          return null;
        })}
        
        {/* Loading Message */}
        {isLoading && (
          <div className="flex items-start space-x-3 py-3.5">
            {/* AI Avatar */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src={getAgentImageByIndex(0)}
                alt="AI Agent"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Loading Text with Gradient Animation */}
            <div className="flex-1 min-w-0">
              <p 
                className="text-sm font-poppins font-normal bg-gradient-to-r from-n-200 via-n-400 to-n-500 bg-clip-text text-transparent animate-pulse-gradient"
                style={{ backgroundSize: '200% 100%' }}
              >
                Fetching data for {loadingProjectTitle}...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

ChatMessagesContainer.displayName = 'ChatMessagesContainer';

export default ChatMessagesContainer;