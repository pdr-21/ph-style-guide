import React, { useState } from 'react';
import { Paperclip, Mic, ArrowRight } from 'lucide-react';

const ChatInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('Automatic');

  const tabs = ['Automatic', 'Goals', 'Problems'];

  return (
    <div className="w-full">
      {/* Input container */}
      <div className="bg-white rounded-2xl border border-n-100 p-6 shadow-sm">
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

        {/* Bottom section with tabs and actions */}
        <div className="flex items-center justify-between">
          {/* Tabs */}
          <div className="flex items-center space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-poppins font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-b-200 text-white'
                    : 'bg-n-50 text-n-400 hover:bg-n-100 hover:text-n-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

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