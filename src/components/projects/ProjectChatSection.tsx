import React, { useState } from 'react';
import { User, Bot, ArrowRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ProjectChatSectionProps {
  className?: string;
}

const ProjectChatSection: React.FC<ProjectChatSectionProps> = ({ 
  className = '' 
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Hello! I\'m here to help you with this initiative. What would you like to know?',
      sender: 'ai',
      timestamp: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
    }
  ]);
  const [inputValue, setInputValue] = useState('');

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
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(message),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  // Format timestamp for display
  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`flex flex-col justify-between h-full ${className}`}>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-64">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            {/* Avatar - Only for user messages */}
            {message.sender === 'user' && (
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-b-200 text-white">
                <User className="w-3 h-3" />
              </div>
            )}

            {/* Message Bubble */}
            <div className={`max-w-[80%] ${
              message.sender === 'user' ? 'text-right' : 'text-left'
            }`}>
              <div className={`inline-block px-3 py-2 rounded-lg text-xs font-poppins font-normal ${
                message.sender === 'user'
                  ? 'bg-b-200 text-white'
                  : 'bg-n-50 text-n-500'
              }`}>
                {message.content}
              </div>
              <div className="text-xs text-n-200 mt-1 font-poppins font-normal">
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="border-t border-n-75 pt-3 mt-auto">
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
};

export default ProjectChatSection;