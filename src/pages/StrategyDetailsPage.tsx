import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Bell, Flag, Target, User, Edit3, Bot, Calendar, CheckCircle2, BarChart3, Play, Pause } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Button } from '../components/ui/button';
import ChatBubble from '../components/common/ChatBubble';
import AgentProfileCard from '../components/common/AgentProfileCard';
import { useStrategies, Strategy } from '../context/StrategiesContext';

const StrategyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { strategies, updateStrategy } = useStrategies();
  
  // Find the strategy by ID
  const strategy = strategies.find(s => s.id === id);
  
  // If strategy not found, redirect to strategies list
  useEffect(() => {
    if (!strategy) {
      navigate('/strategies/list');
    }
  }, [strategy, navigate]);
  
  if (!strategy) {
    return <div>Loading...</div>;
  }

  // State for popover functionality
  const [showAgentProfile, setShowAgentProfile] = useState(false);
  const [showHumanProfile, setShowHumanProfile] = useState(false);
  const [profilePosition, setProfilePosition] = useState({ top: 0, left: 0 });
  const [hoveredAgent, setHoveredAgent] = useState<Strategy['selectedAgents'][0] | null>(null);
  const agentProfileRef = useRef<HTMLDivElement>(null);
  const humanProfileRef = useRef<HTMLDivElement>(null);
  const strategyContainerRef = useRef<HTMLDivElement>(null);

  // Notification settings state
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    dailyUpdates: true,
    weeklyUpdates: false,
    notifyOnEscalations: true,
  });
  const notificationDropdownRef = useRef<HTMLDivElement>(null);

  const breadcrumbItems = [
    'Strategy',
    'Strategies List',
    strategy.name
  ];

  // Format current date and time for last updated
  const formatDateTime = () => {
    const updatedAt = new Date(strategy.updatedAt);
    return updatedAt.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Format milestone due date
  const formatMilestoneDate = (date: Date) => {
    const milestoneDate = new Date(date);
    return milestoneDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Progress Circle Component
  const ProgressCircle: React.FC<{ progress: number; size?: number }> = ({ progress, size = 24 }) => {
    const radius = (size - 2) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-n-100"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-b-400 transition-all duration-300 ease-in-out"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  };

  // Get status color and icon
  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'In Progress':
        return { color: 'text-b-400', bgColor: 'bg-b-50', icon: Play };
      case 'Paused':
        return { color: 'text-y-400', bgColor: 'bg-y-50', icon: Pause };
      case 'Completed':
        return { color: 'text-g-400', bgColor: 'bg-g-50', icon: CheckCircle2 };
      case 'Draft':
        return { color: 'text-n-400', bgColor: 'bg-n-50', icon: Edit3 };
      default:
        return { color: 'text-n-400', bgColor: 'bg-n-50', icon: Flag };
    }
  };

  const statusDisplay = getStatusDisplay(strategy.status);
  const StatusIcon = statusDisplay.icon;

  // Close notification dropdown on outside click
  useEffect(() => {
    if (!notificationDropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(e.target as Node)) {
        setNotificationDropdownOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [notificationDropdownOpen]);

  const handleNotificationToggle = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  // Popover handlers for agents
  const handleAgentMouseEnter = (event: React.MouseEvent, agent: Strategy['selectedAgents'][0]) => {
    const target = event.currentTarget as HTMLElement;
    if (strategyContainerRef.current) {
      const targetRect = target.getBoundingClientRect();
      const containerRect = strategyContainerRef.current.getBoundingClientRect();
      
      setProfilePosition({
        top: targetRect.bottom - containerRect.top + 8,
        left: targetRect.left - containerRect.left + targetRect.width / 2
      });
      setHoveredAgent(agent);
      setShowAgentProfile(true);
    }
  };

  const handleAgentMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (agentProfileRef.current && agentProfileRef.current.contains(relatedTarget)) {
      return;
    }
    setShowAgentProfile(false);
    setHoveredAgent(null);
  };

  const handleAgentProfileMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.closest('.agent-hover-trigger')) {
      return;
    }
    setShowAgentProfile(false);
    setHoveredAgent(null);
  };

  // Popover handlers for human
  const handleHumanMouseEnter = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    if (strategyContainerRef.current) {
      const targetRect = target.getBoundingClientRect();
      const containerRect = strategyContainerRef.current.getBoundingClientRect();
      
      setProfilePosition({
        top: targetRect.bottom - containerRect.top + 8,
        left: targetRect.left - containerRect.left + targetRect.width / 2
      });
      setShowHumanProfile(true);
    }
  };

  const handleHumanMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (humanProfileRef.current && humanProfileRef.current.contains(relatedTarget)) {
      return;
    }
    setShowHumanProfile(false);
  };

  const handleHumanProfileMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.closest('.human-hover-trigger')) {
      return;
    }
    setShowHumanProfile(false);
  };

  // Handle strategy actions
  const handleStrategyAction = (action: 'pause' | 'resume' | 'complete') => {
    let newStatus: Strategy['status'] = strategy.status;
    
    switch (action) {
      case 'pause':
        newStatus = 'Paused';
        break;
      case 'resume':
        newStatus = 'In Progress';
        break;
      case 'complete':
        newStatus = 'Completed';
        break;
    }
    
    updateStrategy(strategy.id, { status: newStatus });
  };

  return (
    <div className="min-h-screen bg-gr-25">
      <div ref={strategyContainerRef} className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Header Section with Breadcrumbs and Status */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-start-3 lg:col-span-8">
                {/* Breadcrumbs and Status Row */}
                <div className="flex items-center justify-between mb-6">
                  <Breadcrumbs items={breadcrumbItems} />
                  
                  <div className="flex items-center gap-4">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${statusDisplay.bgColor}`}>
                        <StatusIcon className={`w-4 h-4 ${statusDisplay.color}`} />
                        <span className={`text-sm font-medium ${statusDisplay.color}`}>
                          {strategy.status}
                        </span>
                      </div>
                      
                      {/* Notification Settings Dropdown */}
                      <div className="relative" ref={notificationDropdownRef}>
                        <button
                          onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                          className="flex items-center justify-center w-8 h-8 bg-white border border-n-100 rounded-lg hover:bg-n-25 transition-colors"
                          title="Notification settings"
                        >
                          <Bell className="w-4 h-4 text-n-400" />
                        </button>
                        
                        {notificationDropdownOpen && (
                          <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-n-100 rounded-lg shadow-lg z-50 p-3">
                            <h4 className="text-sm font-medium text-n-400 mb-3">Notification Settings</h4>
                            
                            <div className="space-y-3">
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={notificationSettings.dailyUpdates}
                                  onChange={() => handleNotificationToggle('dailyUpdates')}
                                  className="w-4 h-4 text-b-400 bg-white border-n-200 rounded focus:ring-b-400 focus:ring-2"
                                />
                                <span className="text-sm text-n-400">Daily updates</span>
                              </label>
                              
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={notificationSettings.weeklyUpdates}
                                  onChange={() => handleNotificationToggle('weeklyUpdates')}
                                  className="w-4 h-4 text-b-400 bg-white border-n-200 rounded focus:ring-b-400 focus:ring-2"
                                />
                                <span className="text-sm text-n-400">Weekly updates</span>
                              </label>
                              
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={notificationSettings.notifyOnEscalations}
                                  onChange={() => handleNotificationToggle('notifyOnEscalations')}
                                  className="w-4 h-4 text-b-400 bg-white border-n-200 rounded focus:ring-b-400 focus:ring-2"
                                />
                                <span className="text-sm text-n-400">Notify on escalations</span>
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    {strategy.status === 'In Progress' && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-4"
                        onClick={() => handleStrategyAction('pause')}
                      >
                        <Pause className="w-4 h-4 mr-2" />
                        Pause
                      </Button>
                    )}
                    
                    {strategy.status === 'Paused' && (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="h-8 px-4"
                        onClick={() => handleStrategyAction('resume')}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Resume
                      </Button>
                    )}
                    
                    {(strategy.status === 'In Progress' || strategy.status === 'Paused') && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-4"
                        onClick={() => handleStrategyAction('complete')}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Strategy Name */}
                <div className="mb-8">
                  <h1 className="text-[32px] font-semibold text-n-400">
                    {strategy.name}
                  </h1>
                </div>
                
                {/* Strategy Details Container */}
                <div className="bg-white rounded-[12px] p-6 mb-8">
                  <div className="flex items-center gap-4">
                    <Flag className="w-5 h-5 text-b-200 flex-shrink-0" />
                    
                    <div>
                      <h3 className="text-sm font-medium text-n-500 mb-1">Strategy details</h3>
                      <div className="flex items-center gap-1 text-xs text-n-300">
                        <span>Started on {strategy.startDate}</span>
                        <span>•</span>
                        <span>Expected end date {strategy.endDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-b-200" />
                    <h2 className="text-[20px] font-semibold text-n-400">Description</h2>
                  </div>
                  <p className="text-sm text-n-300 leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
                
                {/* Milestones Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-b-200" />
                    <h2 className="text-[20px] font-semibold text-n-400">Milestones</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {strategy.milestones.map((milestone) => (
                      <div key={milestone.id} className="space-y-2">
                        {/* Milestone name with progress circle */}
                        <div className="flex items-center gap-3">
                          <ProgressCircle progress={milestone.progress} />
                          <h3 className="text-base font-medium text-n-500">
                            {milestone.name}
                          </h3>
                        </div>
                        
                        {/* Due date and assigned agent */}
                        <div className="flex items-center gap-4 ml-9">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-n-300" />
                            <span className="text-sm text-n-300">
                              Due {formatMilestoneDate(milestone.dueDate)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bot className="w-4 h-4 text-n-300" />
                            <span className="text-sm text-n-300">
                              {milestone.assignedAgent}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Completion Rate Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-b-200" />
                      <h2 className="text-[20px] font-semibold text-n-400">Completion Rate</h2>
                    </div>
                    <span className="text-[20px] font-semibold text-n-400">{strategy.progress}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-n-100 rounded-full h-3">
                    <div 
                      className="bg-b-400 h-3 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${strategy.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Human in the Loop Section */}
                {strategy.humanInLoop && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-5 h-5 text-b-200" />
                      <h2 className="text-[20px] font-semibold text-n-400">Human in the Loop</h2>
                    </div>
                    
                    <div 
                      className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity human-hover-trigger"
                      onMouseEnter={handleHumanMouseEnter}
                      onMouseLeave={handleHumanMouseLeave}
                    >
                      <img 
                        src={strategy.humanInLoop.avatar} 
                        alt={strategy.humanInLoop.name} 
                        className="w-8 h-8 rounded-full border-2 border-white bg-white object-cover" 
                      />
                      <span className="text-sm font-medium text-b-300">
                        {strategy.humanInLoop.name}
                      </span>
                    </div>
                  </div>
                )}

                {/* AI Agents Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-5 h-5 text-b-200" />
                    <h2 className="text-[20px] font-semibold text-n-400">AI Agents</h2>
                  </div>
                  
                  {strategy.selectedAgents.length > 0 ? (
                    <div className="space-y-3">
                      {strategy.selectedAgents.map((agent) => (
                        <div 
                          key={agent.name}
                          className="flex items-center gap-2 agent-hover-trigger cursor-pointer"
                          onMouseEnter={(e) => handleAgentMouseEnter(e, agent)}
                          onMouseLeave={handleAgentMouseLeave}
                        >
                          <img 
                            src={agent.avatar} 
                            alt={agent.name} 
                            className="w-8 h-8 rounded-full border-2 border-white bg-white object-cover" 
                          />
                          <span className="text-sm font-medium text-b-300 hover:text-b-400 transition-colors">
                            {agent.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-n-300 italic">No agents assigned</p>
                  )}
                </div>
            
              </div>
            </div>
          </div>
        </div>

        {/* Agent Profile Popover */}
        <div
          ref={agentProfileRef}
          onMouseLeave={handleAgentProfileMouseLeave}
        >
          {hoveredAgent && (
            <AgentProfileCard
              name={hoveredAgent.name}
              imageUrl={hoveredAgent.avatar}
              type="ai-agent"
              isVisible={showAgentProfile}
              position={profilePosition}
              leadsFound={hoveredAgent.leadsFound}
              successRate={hoveredAgent.successRate}
              avgResponseTime={hoveredAgent.avgResponseTime}
            />
          )}
        </div>

        {/* Human Profile Popover */}
        <div
          ref={humanProfileRef}
          onMouseLeave={handleHumanProfileMouseLeave}
        >
          {strategy.humanInLoop && (
            <AgentProfileCard
              name={strategy.humanInLoop.name}
              imageUrl={strategy.humanInLoop.avatar}
              type="human"
              isVisible={showHumanProfile}
              position={profilePosition}
              role={strategy.humanInLoop.role}
              department={strategy.humanInLoop.department}
              email={strategy.humanInLoop.email}
            />
          )}
        </div>
      </div>
      
      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  );
};

export default StrategyDetailsPage; 