import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useLocation } from 'react-router-dom';
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

// Strategy detection patterns
const strategyPatterns = [
  {
    keywords: ['expand', 'emea', 'europe', 'european'],
    strategy: 'Expand to EMEA Region',
    goal: 'Achieve 20% market share in EMEA within 2 years'
  },
  {
    keywords: ['open', 'locations', 'us', 'united states', 'america'],
    strategy: 'Open 10 new locations in the US',
    goal: 'Establish 10 new retail locations across key US markets'
  },
  {
    keywords: ['rethink', 'review', 'reassess', 'strategy'],
    strategy: 'Rethink a strategy',
    goal: 'Optimize current strategic approach for better results'
  },
  {
    keywords: ['downscale', 'reduce', 'costs', 'employee', 'layoffs'],
    strategy: 'Downscale and reduce employee costs',
    goal: 'Reduce operational costs by 15% through strategic downsizing'
  }
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

interface ChatState {
  strategyName?: string;
  goal?: string;
  humanInLoop?: string;
}

const ChatBubble: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isStrategyPage = location.pathname.startsWith('/strategies/new');
  
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<'options' | 'form' | 'chat'>('options');
  const [strategyName, setStrategyName] = useState('Expand to EMEA Region');
  const [selectedHuman, setSelectedHuman] = useState('');
  const [humanDropdownOpen, setHumanDropdownOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [chatState, setChatState] = useState<ChatState>({});
  const [detectedGoal, setDetectedGoal] = useState('Achieve 20% market share in EMEA within 2 years');
  const goalSuggestion = detectedGoal;
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

  // Function to detect strategy intent from user message
  const detectStrategyIntent = (message: string) => {
    const lowercaseMessage = message.toLowerCase();
    
    for (const pattern of strategyPatterns) {
      const matchCount = pattern.keywords.filter(keyword => 
        lowercaseMessage.includes(keyword)
      ).length;
      
      // If at least 2 keywords match, consider it a match
      if (matchCount >= 2) {
        return pattern;
      }
      
      // Also check for exact strategy name mentions
      if (lowercaseMessage.includes(pattern.strategy.toLowerCase())) {
        return pattern;
      }
    }
    
    return null;
  };

  // Function to generate creative goal using OpenAI
  const generateCreativeGoal = async (userMessage: string, strategy: any) => {
    console.log('🎯 Generating goal for:', userMessage, 'Strategy:', strategy.strategy);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              id: 'goal-gen',
              text: `Based on this user request: "${userMessage}" and the strategy "${strategy.strategy}", generate a specific, measurable, and creative business goal. Make it concise (1-2 sentences) and include metrics or timeframes where appropriate. Focus on what the user actually wants to achieve.`,
              sender: 'user',
              timestamp: new Date()
            }
          ],
          strategyName: strategy.strategy,
          goal: 'Generate a creative goal',
          humanInLoop: '',
        }),
      });

      console.log('📡 Goal generation response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Generated goal:', data.reply);
        
        // Clean the goal text by removing common unwanted patterns
        let cleanGoal = data.reply.trim();
        
        // Remove markdown formatting
        cleanGoal = cleanGoal.replace(/\*\*(.*?)\*\*/g, '$1'); // Remove **bold**
        cleanGoal = cleanGoal.replace(/\*(.*?)\*/g, '$1'); // Remove *italic*
        
        // Remove ALL possible prefixes aggressively
        cleanGoal = cleanGoal.replace(/^(Business\s+)?(Goal|Objective|Target|Strategy|Mission|Vision|Aim|Purpose)[:.]?\s*/i, '');
        cleanGoal = cleanGoal.replace(/^\*\*(Business\s+)?(Goal|Objective|Target|Strategy)[:.]?\*\*:?\s*/i, '');
        cleanGoal = cleanGoal.replace(/^(The\s+)?(goal|objective|target|strategy)\s+(is\s+to\s+|should\s+be\s+to\s+)?/i, '');
        cleanGoal = cleanGoal.replace(/^(Our\s+|The\s+|My\s+|This\s+)?(business\s+|strategic\s+)?(goal|objective|target|aim)\s+(is\s+)?[:.]?\s*/i, '');
        
        // Remove bullet points at the start
        cleanGoal = cleanGoal.replace(/^[-•]\s*/, '');
        
        // Remove numbered lists at the start
        cleanGoal = cleanGoal.replace(/^\d+\.\s*/, '');
        
        // Final aggressive cleanup - remove any remaining unwanted starts
        cleanGoal = cleanGoal.replace(/^[^a-zA-Z]*/, ''); // Remove any non-letter characters at start
        cleanGoal = cleanGoal.replace(/^(to\s+)?/i, ''); // Remove "to " at start if present
        
        // Clean up multiple spaces and ensure proper capitalization
        cleanGoal = cleanGoal.replace(/\s+/g, ' ').trim();
        
        // Ensure first letter is capitalized
        if (cleanGoal.length > 0) {
          cleanGoal = cleanGoal.charAt(0).toUpperCase() + cleanGoal.slice(1);
        }
        
        console.log('🧹 Cleaned goal:', cleanGoal);
        setDetectedGoal(cleanGoal);
      } else {
        console.log('❌ API failed, using fallback goal');
        setDetectedGoal(strategy.goal);
      }
    } catch (error) {
      console.error('❌ Error generating creative goal:', error);
      setDetectedGoal(strategy.goal);
    } finally {
      console.log('🔄 Transitioning to form...');
      // Transition to form after goal generation
      setTimeout(() => {
        setIsThinking(false);
        setStage('form');
      }, 500);
    }
  };

  const handleSubmitMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Check for strategy intent first
    const detectedStrategy = detectStrategyIntent(inputMessage);
    
    if (detectedStrategy) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
        timestamp: new Date(),
      };

      const originalInput = inputMessage; // Store the original input
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setStage('chat');

      // Add AI response about detected strategy after a brief delay
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `I see you're interested in "${detectedStrategy.strategy}". Let me help you set this up with the proper details.`,
          sender: 'ai',
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, aiMessage]);

        // Start thinking state
        setTimeout(() => {
          setIsThinking(true);
          
          // Pre-populate form with detected strategy
          setStrategyName(detectedStrategy.strategy);
          
          // Generate creative goal using OpenAI
          generateCreativeGoal(originalInput, detectedStrategy);
        }, 1000);
      }, 800);
      
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    const currentInput = inputMessage;
    setInputMessage('');
    setStage('chat');
    setIsLoading(true);

    try {
      // Call OpenAI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: currentMessages,
          strategyName: chatState.strategyName || strategyName,
          goal: chatState.goal,
          humanInLoop: chatState.humanInLoop || selectedHuman,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error while processing your request. Please try again.',
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setStage('options');
    setMessages([]);
    setInputMessage('');
    setChatState({});
    setIsLoading(false);
    setIsThinking(false);
    setStrategyName('Expand to EMEA Region');
    setDetectedGoal('Achieve 20% market share in EMEA within 2 years');
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
                  value={goalSuggestion}
                  onChange={(e) => setDetectedGoal(e.target.value)}
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
              <Button 
                variant="secondary" 
                size="sm" 
                className="h-8 px-4 rounded-lg font-normal"
                onClick={() => {
                  // Store strategy in session storage
                  const strategyData = {
                    id: `strategy-${Date.now()}`,
                    name: strategyName,
                    goal: goalSuggestion,
                    humanInLoop: selectedHuman,
                    createdAt: new Date().toISOString(),
                  };
                  
                  sessionStorage.setItem('currentStrategy', JSON.stringify(strategyData));
                  
                  // Navigate to new strategy page with URL params
                  const params = new URLSearchParams({
                    name: strategyName,
                    goal: goalSuggestion,
                    human: selectedHuman || '',
                  });
                  
                  navigate(`/strategies/new?${params.toString()}`);
                  setOpen(false);
                }}
              >
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
                  <div className="text-sm text-n-400 leading-relaxed prose prose-sm prose-neutral max-w-none">
                    <ReactMarkdown
                      components={{
                        // Custom styling for markdown elements
                        strong: ({ children }) => (
                          <span className="font-semibold text-n-500">{children}</span>
                        ),
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0">{children}</p>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>
                        ),
                        li: ({ children }) => (
                          <li className="text-n-400">{children}</li>
                        ),
                        h1: ({ children }) => (
                          <h1 className="text-base font-semibold text-n-500 mb-2">{children}</h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-sm font-semibold text-n-500 mb-1">{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-sm font-medium text-n-500 mb-1">{children}</h3>
                        ),
                        code: ({ children }) => (
                          <code className="bg-n-50 px-1 py-0.5 rounded text-xs font-mono text-n-500">{children}</code>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-2 border-n-100 pl-3 italic text-n-300">{children}</blockquote>
                        ),
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img
                    src={getAgentImageByIndex(0)}
                    alt="AI"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-n-300 leading-relaxed flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-n-300 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-n-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-n-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Strategy thinking indicator */}
            {isThinking && (
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img
                    src={getAgentImageByIndex(0)}
                    alt="AI"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-n-300 leading-relaxed flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-b-300 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-b-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-b-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span>Generating personalized goal...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Top stroke */}
          <div className="border-t border-n-75" />

          {/* Input row */}
          <div className="flex items-center pr-4 pl-6 py-3">
            <input
              type="text"
              placeholder={isStrategyPage ? "Discuss strategy..." : "Plan your strategy..."}
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
                className="w-8 h-8 rounded-full bg-b-400 hover:bg-b-500 flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputMessage.trim() || isLoading}
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
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
            placeholder={isStrategyPage ? "Discuss strategy..." : "Plan your strategy..."}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent outline-none placeholder-n-200 text-sm text-n-400"
          />
          <div className="flex items-center gap-2 ml-3">
            <button 
              onClick={handleSubmitMessage}
              className="w-8 h-8 rounded-full bg-b-400 hover:bg-b-500 flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputMessage.trim() || isLoading}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
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
        <span className="text-sm font-normal leading-none">
          {isStrategyPage ? 'Discuss strategy...' : 'Plan your strategy...'}
        </span>
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