import React, { useState, useRef, useEffect } from 'react';
import SparkleIcon from '../icons/SparkleIcon';
import { X, ChevronLeft, FileText, Target as TargetIcon, User as UserIcon, ChevronDown, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { userImages } from '../../lib/userImages';
import { getAgentImageByIndex } from '../../lib/agentImages';

const quickOptions = [
  'Rethink a strategy',
  'Open 10 new locations in the US',
  'Expand to EMEA Region',
  'Downscale and reduce employee costs',
];

const humanOptions = [
  'John Smith - CEO',
  'Sarah Johnson - VP Strategy',
  'Mike Chen - Head of Operations',
  'Emma Davis - Marketing Director',
];

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatBubble: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<'options' | 'form' | 'chat'>('options');
  const [strategyName, setStrategyName] = useState('Expand to EMEA Region');
  const [selectedHuman, setSelectedHuman] = useState('');
  const [humanDropdownOpen, setHumanDropdownOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const goalSuggestion = 'Achieve 20% market share in EMEA within 2 years';
  const panelRef = useRef<HTMLDivElement>(null);
  const humanDropdownRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [open]);

  // close dropdown on outside click
  useEffect(() => {
    if (!humanDropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (humanDropdownRef.current && !humanDropdownRef.current.contains(e.target as Node)) {
        setHumanDropdownOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [humanDropdownOpen]);

  const handleSubmitMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setStage('chat');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `I understand you're asking about "${inputMessage}". Let me help you with that strategy question. This is a simulated AI response that would normally come from your OpenAI integration.`,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleReset = () => {
    setStage('options');
    setMessages([]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmitMessage();
    }
  };

  if (open) {
    if (stage === 'form') {
      return (
        <div
          ref={panelRef}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[664px] rounded-[16px] border border-n-50 bg-white/60 backdrop-blur-[16px] text-n-500 shadow-lg"
        >
          {/* Form inputs */}
          <div className="flex flex-col gap-4 p-6 pr-8">
            {/* Strategy Name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-n-400 flex items-center gap-2">
                <FileText className="w-4 h-4 text-n-300" />
                Strategy Name
              </label>
              <div className="ml-6 rounded-lg bg-n-50/60 border border-transparent focus-within:border-n-75 px-3 py-2">
                <input
                  value={strategyName}
                  onChange={(e) => setStrategyName(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm text-n-400"
                />
              </div>
            </div>

            {/* Goal */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-n-400 flex items-center gap-2">
                <TargetIcon className="w-4 h-4 text-n-300" />
                Goal
              </label>
              <div className="ml-6 rounded-lg bg-n-50/60 border border-transparent focus-within:border-n-75 px-3 py-2">
                <input
                  defaultValue={goalSuggestion}
                  className="w-full bg-transparent outline-none text-sm text-n-400"
                />
              </div>
            </div>

            {/* Human in the loop */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-n-400 flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-n-300" />
                Human in the loop
              </label>
              <div className="ml-6 relative" ref={humanDropdownRef}>
                <button
                  onClick={() => setHumanDropdownOpen(!humanDropdownOpen)}
                  className="w-full rounded-lg bg-n-50/60 border border-transparent hover:border-n-75 px-3 py-2 text-left flex items-center justify-between"
                >
                  <span className="text-sm text-n-400">
                    {selectedHuman || 'Select person...'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-n-300" />
                </button>
                
                {humanDropdownOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-1 rounded-lg border border-n-75 bg-white shadow-lg z-50">
                    {humanOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedHuman(option);
                          setHumanDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left text-sm text-n-400 hover:bg-n-40 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Top stroke */}
          <div className="border-t border-n-75" />

          {/* Bottom bar */}
          <div className="flex items-center justify-between pr-4 pl-6 py-3">
            <div className="flex items-center gap-2 text-n-400">
              <button onClick={() => setStage('options')} className="text-n-400 hover:text-n-500">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium">New strategy</span>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm" className="h-8 px-4 rounded-lg font-normal">
                Plan strategy
              </Button>
            </div>
          </div>
        </div>
      );
    }

    if (stage === 'chat') {
      return (
        <div
          ref={panelRef}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[664px] rounded-[16px] border border-n-50 bg-white/60 backdrop-blur-[16px] text-n-500 shadow-lg max-h-[500px] flex flex-col"
        >
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? '' : ''}`}>
                <div className="flex-shrink-0">
                  <img
                    src={message.sender === 'user' ? userImages.johnDoe : getAgentImageByIndex(0)}
                    alt={message.sender === 'user' ? 'User' : 'AI'}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-n-400 leading-relaxed">
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Top stroke */}
          <div className="border-t border-n-75" />

          {/* Input row */}
          <div className="flex items-center pr-4 pl-6 py-3">
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent outline-none placeholder-n-200 text-sm text-n-400"
            />
            <div className="flex items-center gap-2 ml-3">
              <button 
                onClick={handleReset}
                className="text-n-300 hover:text-n-500 transition-colors"
                title="Reset to options"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={handleSubmitMessage}
                className="w-8 h-8 rounded-full bg-b-400 hover:bg-b-500 flex items-center justify-center text-white transition-colors"
                disabled={!inputMessage.trim()}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setOpen(false)} className="text-n-300 hover:text-n-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={panelRef}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[664px] rounded-[16px] border border-n-50 bg-white/60 backdrop-blur-[16px] text-n-500 shadow-lg"
      >
        {/* Quick options */}
        <div className="flex flex-col gap-1 p-3">
          {quickOptions.map((opt) => (
            <button
              key={opt}
              className="flex rounded-[12px] px-3 py-3 justify-start text-sm font-normal text-n-200 hover:bg-n-40 hover:text-n-400 transition-colors"
              onClick={() => {
                if (opt === 'Expand to EMEA Region') {
                  setStage('form');
                }
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Top stroke */}
        <div className="border-t border-n-75" />

        {/* Input row */}
        <div className="flex items-center pr-4 pl-6 py-3">
          <input
            type="text"
            placeholder="Ask anything..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent outline-none placeholder-n-200 text-sm text-n-400"
          />
          <div className="flex items-center gap-2 ml-3">
            <button 
              onClick={handleSubmitMessage}
              className="w-8 h-8 rounded-full bg-b-400 hover:bg-b-500 flex items-center justify-center text-white transition-colors"
              disabled={!inputMessage.trim()}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => setOpen(false)} className="text-n-300 hover:text-n-500">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className="fixed left-1/2 -translate-x-1/2 bottom-4 z-40 group flex items-center justify-between w-[264px] h-10 pl-3 pr-4 rounded-full border bg-b-40 border-b-50 text-b-400 transition-all duration-200 hover:bottom-5 hover:shadow-[0_0_6px_rgba(77,62,224,0.2)]"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full">
          <SparkleIcon className="h-4 w-4 text-b-400" />
        </div>
        <span className="text-sm font-normal leading-none">Ask anything...</span>
      </div>
      <div className="flex items-center gap-1">
        <kbd className="flex items-center justify-center h-4 w-4 rounded border border-b-400 bg-transparent text-xs font-medium font-['SF Pro'] text-b-400">
          ⌘
        </kbd>
        <kbd className="flex items-center justify-center h-4 w-4 rounded border border-b-400 bg-transparent text-xs font-medium font-['SF Pro'] text-b-400">
          S
        </kbd>
      </div>
    </button>
  );
};

export default ChatBubble; 