import React, { useState } from 'react';
import { Paperclip, Mic, ArrowRight } from 'lucide-react';
import { Dropdown } from '../ui/dropdown';

const ChatInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  // Dropdown states
  const [responseDepth, setResponseDepth] = useState('quick');
  const [knowledgeSource, setKnowledgeSource] = useState('company');

  const responseDepthOptions = [
    { label: 'Quick response', value: 'quick' },
    { label: 'Deep thinking', value: 'deep' },
  ];

  const knowledgeSourceOptions = [
    { label: 'Company knowledge', value: 'company' },
    { label: 'Web', value: 'web' },
    { label: 'Auto', value: 'auto' },
  ];

  return (
    <div className="w-full">
      {/* Input container */}
      <div className="bg-white rounded-2xl border border-n-100 p-3 shadow-sm">
        {/* Input field */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="How can I help you?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full text-sm font-poppins font-normal text-n-500 placeholder:text-n-200 bg-transparent border-none outline-none resize-none"
          />
        </div>

        {/* Bottom section with controls and actions */}
        <div className="flex items-center justify-between flex-wrap gap-3 md:gap-0">
          {/* Left controls */}
          <div className="flex items-center space-x-3">
            {/* Response depth dropdown */}
            <div className="w-48">
              <Dropdown
                options={responseDepthOptions}
                value={responseDepth}
                onChange={setResponseDepth}
                size="sm"
                className="h-9 whitespace-nowrap text-xs"
              />
            </div>

            {/* Knowledge source dropdown */}
            <div className="w-48">
              <Dropdown
                options={knowledgeSourceOptions}
                value={knowledgeSource}
                onChange={setKnowledgeSource}
                size="sm"
                className="h-9 whitespace-nowrap text-xs"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* File attachment button */}
            <button className="p-2 text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors" aria-label="Attach file">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors" aria-label="Record audio">
              <Mic className="w-5 h-5" />
            </button>
            <button className="p-2 bg-b-200 text-white hover:bg-b-300 rounded-lg transition-colors" aria-label="Send message">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;