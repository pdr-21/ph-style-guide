import React, { useState } from 'react';
import { Paperclip, Mic, ArrowRight } from 'lucide-react';
import ToggleSwitch from '../ui/ToggleSwitch';

interface ChatInputProps {
  showToggleSwitch?: boolean;
  onSendMessageAndNavigate?: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  showToggleSwitch = true, 
  onSendMessageAndNavigate 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [activeMode, setActiveMode] = useState('automatic');

  const modeOptions = [
    { id: 'automatic', label: 'Automatic' },
    { id: 'goals', label: 'Goals' },
    { id: 'problems', label: 'Problems' },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim() && onSendMessageAndNavigate) {
      onSendMessageAndNavigate(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="w-full">
      {/* Input container */}
      <div className="bg-white rounded-2xl border border-n-75 p-3 shadow-sm">
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

        {/* Bottom section with toggle and actions */}
        <div className="flex items-center justify-between">
          {/* Toggle Switch - conditionally rendered */}
          {showToggleSwitch && (
            <ToggleSwitch
              options={modeOptions}
              activeOptionId={activeMode}
              onOptionChange={setActiveMode}
            />
          )}

          {/* Action buttons */}
          <div className={`flex items-center space-x-3 ${!showToggleSwitch ? 'ml-auto' : ''}`}>
            <button className="p-2 text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button 
              onClick={handleSendMessage}
              className="p-2 bg-b-200 text-white hover:bg-b-300 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;