import React, { useState } from 'react';
import { Paperclip, Mic, ArrowRight, Edit3 } from 'lucide-react';
import ToggleSwitch from '../ui/ToggleSwitch';
import SparkleIcon from '../icons/SparkleIcon';

const ChatInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('automatic');

  // Define toggle options with icons
  const toggleOptions = [
    {
      id: 'automatic',
      label: 'Automatic',
      icon: SparkleIcon
    },
    {
      id: 'goals',
      label: 'Goals',
      icon: Edit3
    },
    {
      id: 'problems',
      label: 'Problems'
    }
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

        {/* Bottom section with toggle and actions */}
        <div className="flex items-center justify-between">
          {/* Toggle Switch */}
          <ToggleSwitch
            options={toggleOptions}
            activeOptionId={activeTab}
            onOptionChange={setActiveTab}
            className="h-8"
          />

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 text-n-300 hover:text-n-500 hover:bg-n-50 rounded-lg transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button className="p-2 bg-b-200 text-white hover:bg-b-300 rounded-lg transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;