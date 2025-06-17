import React, { useState } from 'react';
import { User, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { getAgentImageByIndex } from '../../lib/agentImages';
import { cn } from '../../lib/utils';
import { ChatBubbleMessage } from '../../types';

interface ChatMessageProps {
  message: ChatBubbleMessage;
  aiAgentImageIndex: number;
  className?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  aiAgentImageIndex,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
  };

  const handleLike = () => {
    console.log('Liked message:', message.id);
  };

  const handleDislike = () => {
    console.log('Disliked message:', message.id);
  };

  return (
    <div className={cn("flex items-start space-x-3 py-3.5", className)}>
      {/* Avatar - always on the left */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
        {message.sender === 'user' ? (
          <div className="w-full h-full bg-n-100 flex items-center justify-center">
            <User className="w-4 h-4 text-n-300" />
          </div>
        ) : (
          <img
            src={getAgentImageByIndex(aiAgentImageIndex)}
            alt="AI Agent"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        <div
          className={cn(
            "relative group",
            message.sender === 'ai' && "flex items-start space-x-3"
          )}
          onMouseEnter={() => message.sender === 'ai' && setIsHovered(true)}
          onMouseLeave={() => message.sender === 'ai' && setIsHovered(false)}
        >
          {/* Message Bubble */}
          <div
            className={cn(
              "inline-block text-sm font-poppins font-normal max-w-full",
              message.sender === 'user'
                ? "text-n-300"
                : "text-n-500"
            )}
          >
            {message.content}
          </div>

          {/* Action Buttons for AI messages */}
          {message.sender === 'ai' && (
            <div
              className={cn(
                "flex items-center space-x-2 ml-3 transition-opacity duration-200",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              <button
                onClick={handleCopy}
                className="p-1.5 text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors"
                title="Copy message"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={handleLike}
                className="p-1.5 text-n-300 hover:text-g-300 hover:bg-g-100 rounded-lg transition-colors"
                title="Like message"
              >
                <ThumbsUp className="w-4 h-4" />
              </button>
              <button
                onClick={handleDislike}
                className="p-1.5 text-n-300 hover:text-r-300 hover:bg-r-100 rounded-lg transition-colors"
                title="Dislike message"
              >
                <ThumbsDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;