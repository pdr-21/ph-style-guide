import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useStrategies } from '../context/StrategiesContext';
import { Bell, ChevronDown, Flag, Target, User, Edit3, Bot, Plus, Calendar, CheckCircle2, BarChart3 } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Button } from '../components/ui/button';
import ChatBubble from '../components/common/ChatBubble';
import AgentProfileCard from '../components/common/AgentProfileCard';
import { userImages } from '../lib/userImages';
import { getAgentImageByIndex } from '../lib/agentImages';

const NewStrategyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addStrategy } = useStrategies();
  const strategyName = searchParams.get('name') || 'New Strategy';
  const goal = searchParams.get('goal') || '';
  const humanInLoop = searchParams.get('human') || '';

  // Notification settings state
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    dailyUpdates: true,
    weeklyUpdates: false,
    notifyOnEscalations: true,
  });
  const notificationDropdownRef = useRef<HTMLDivElement>(null);

  // Editing state
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [editingHuman, setEditingHuman] = useState(false);
  const [editedTitle, setEditedTitle] = useState(strategyName);
  const [editedDescription, setEditedDescription] = useState(goal);
  const [editedHuman, setEditedHuman] = useState(humanInLoop);
  
  // Hover states
  const [hoveringTitle, setHoveringTitle] = useState(false);
  const [hoveringDescription, setHoveringDescription] = useState(false);
  const [hoveringHuman, setHoveringHuman] = useState(false);
  
  // Milestone data
  const generateMilestones = () => {
    const today = new Date();
    return [
      {
        id: 1,
        name: 'Initial Candidate Sourcing',
        dueDate: new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
        assignedAgent: 'Sourcing Agent',
        progress: 0
      },
      {
        id: 2,
        name: 'Candidate Screening & Evaluation',
        dueDate: new Date(today.getTime() + 28 * 24 * 60 * 60 * 1000), // 4 weeks from now
        assignedAgent: 'Screening Agent',
        progress: 0
      },
      {
        id: 3,
        name: 'Interview Coordination',
        dueDate: new Date(today.getTime() + 42 * 24 * 60 * 60 * 1000), // 6 weeks from now
        assignedAgent: 'Interview Scheduling Agent',
        progress: 0
      },
      {
        id: 4,
        name: 'Final Selection & Offers',
        dueDate: new Date(today.getTime() + 56 * 24 * 60 * 60 * 1000), // 8 weeks from now
        assignedAgent: 'Offer Agent',
        progress: 0
      }
    ];
  };

  // Milestone editing states
  const [milestoneList, setMilestoneList] = useState(generateMilestones());
  const [editingMilestone, setEditingMilestone] = useState<number | null>(null);
  const [hoveringMilestone, setHoveringMilestone] = useState<number | null>(null);
  const [isAddingMilestone, setIsAddingMilestone] = useState(false);
  
  // Refs for click outside detection
  const titleEditRef = useRef<HTMLDivElement>(null);
  const descriptionEditRef = useRef<HTMLDivElement>(null);
  const humanEditRef = useRef<HTMLDivElement>(null);

  // Human options for dropdown
  const humanOptions = [
    'John Smith - CEO',
    'Sarah Johnson - VP Strategy',
    'Mike Chen - Head of Operations',
    'Emma Davis - Marketing Director',
  ];

  // Agent options with assigned avatar indices and stats
  const agentOptions = [
    { name: 'Fraud Detection', avatar: getAgentImageByIndex(0), leadsFound: 1243, successRate: 97.5, avgResponseTime: '1.2s' },
    { name: 'Candidate Communication Agent', avatar: getAgentImageByIndex(1), leadsFound: 2847, successRate: 94.2, avgResponseTime: '2.3h' },
    { name: 'Sourcing Agent', avatar: getAgentImageByIndex(2), leadsFound: 3521, successRate: 89.7, avgResponseTime: '4.1h' },
    { name: 'Job Ad Agent', avatar: getAgentImageByIndex(3), leadsFound: 892, successRate: 92.1, avgResponseTime: '15m' },
    { name: 'Recruitment Process Agent', avatar: getAgentImageByIndex(4), leadsFound: 1756, successRate: 88.3, avgResponseTime: '1.8h' },
    { name: 'Onboarding Agent', avatar: getAgentImageByIndex(5), leadsFound: 543, successRate: 96.8, avgResponseTime: '3.2h' },
    { name: 'Retention Agent', avatar: getAgentImageByIndex(6), leadsFound: 1234, successRate: 85.9, avgResponseTime: '2.7h' },
    { name: 'Offer Agent', avatar: getAgentImageByIndex(7), leadsFound: 678, successRate: 91.4, avgResponseTime: '45m' },
    { name: 'Screening Agent', avatar: getAgentImageByIndex(8), leadsFound: 2156, successRate: 93.6, avgResponseTime: '1.5h' },
    { name: 'Interview Scheduling Agent', avatar: getAgentImageByIndex(9), leadsFound: 1987, successRate: 95.2, avgResponseTime: '22m' },
  ];



  // Human profile data mapping
  const getHumanProfileData = (humanInLoop: string) => {
    const profileMap: { [key: string]: any } = {
      'John Smith - CEO': {
        role: 'Chief Executive Officer',
        department: 'Executive',
        email: 'john.smith@company.com'
      },
      'Sarah Johnson - VP Strategy': {
        role: 'VP of Strategy',
        department: 'Strategy',
        email: 'sarah.johnson@company.com'
      },
      'Mike Chen - Head of Operations': {
        role: 'Head of Operations',
        department: 'Operations',
        email: 'mike.chen@company.com'
      },
      'Emma Davis - Marketing Director': {
        role: 'Marketing Director',
        department: 'Marketing',
        email: 'emma.davis@company.com'
      },
    };
    
    return profileMap[humanInLoop] || {
      role: 'Team Member',
      department: 'General',
      email: 'contact@company.com'
    };
  };

  // Agents state - pre-select agents that are used in milestones
  const [selectedAgents, setSelectedAgents] = useState<typeof agentOptions>(() => {
    const milestoneAgentNames = milestoneList.map((m: any) => m.assignedAgent);
    return agentOptions.filter(agent => milestoneAgentNames.includes(agent.name));
  });
  const [agentsDropdownOpen, setAgentsDropdownOpen] = useState(false);
  const agentsDropdownRef = useRef<HTMLDivElement>(null);

  // Popover state
  const [showAgentProfile, setShowAgentProfile] = useState(false);
  const [showHumanProfile, setShowHumanProfile] = useState(false);
  const [profilePosition, setProfilePosition] = useState({ top: 0, left: 0 });
  const [hoveredAgent, setHoveredAgent] = useState<typeof agentOptions[0] | null>(null);
  const agentProfileRef = useRef<HTMLDivElement>(null);
  const humanProfileRef = useRef<HTMLDivElement>(null);
  const strategyContainerRef = useRef<HTMLDivElement>(null);

  const breadcrumbItems = [
    'Strategy',
    'Strategies List', 
    'New Strategy'
  ];

  // Format current date and time for draft status
  const formatDateTime = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Format date for strategy details
  const formatDate = (daysOffset: number = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Format milestone due date
  const formatMilestoneDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
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

  // Helper function to get user info from the human in loop string
  const getHumanInfo = (humanInLoop: string) => {
    if (!humanInLoop) return null;
    
    // Extract just the name part (remove " - Title" if it exists)
    const name = humanInLoop.split(' - ')[0];
    
    // Map names to appropriate avatar images
    const avatarMap: { [key: string]: string } = {
      'John Smith': userImages.johnDoe,
      'Sarah Johnson': userImages.mathildeZwike,
      'Mike Chen': userImages.johnDoe,
      'Emma Davis': userImages.mathildeZwike,
    };
    
    return {
      name,
      avatar: avatarMap[name] || userImages.johnDoe
    };
  };

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

  // Close agents dropdown on outside click
  useEffect(() => {
    if (!agentsDropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (agentsDropdownRef.current && !agentsDropdownRef.current.contains(e.target as Node)) {
        setAgentsDropdownOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [agentsDropdownOpen]);

  const handleNotificationToggle = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  // Handle agent selection
  const handleAgentToggle = (agent: typeof agentOptions[0]) => {
    setSelectedAgents(prev => {
      const isSelected = prev.some(a => a.name === agent.name);
      if (isSelected) {
        return prev.filter(a => a.name !== agent.name);
      } else {
        return [...prev, agent];
      }
    });
  };

  // Popover handlers for agents
  const handleAgentMouseEnter = (event: React.MouseEvent, agent: typeof agentOptions[0]) => {
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
    // Check if we're moving back to any agent element
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

  // Handle click outside for editing
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (titleEditRef.current && !titleEditRef.current.contains(event.target as Node) && editingTitle) {
        setEditingTitle(false);
      }
      if (descriptionEditRef.current && !descriptionEditRef.current.contains(event.target as Node) && editingDescription) {
        setEditingDescription(false);
      }
      if (humanEditRef.current && !humanEditRef.current.contains(event.target as Node) && editingHuman) {
        setEditingHuman(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [editingTitle, editingDescription, editingHuman]);

  // Handle key press for editing
  const handleKeyPress = (e: React.KeyboardEvent, type: 'title' | 'description') => {
    if (e.key === 'Enter') {
      if (type === 'title') setEditingTitle(false);
      if (type === 'description') setEditingDescription(false);
    }
    if (e.key === 'Escape') {
      if (type === 'title') {
        setEditedTitle(strategyName);
        setEditingTitle(false);
      }
      if (type === 'description') {
        setEditedDescription(goal);
        setEditingDescription(false);
      }
    }
  };

  // Milestone handlers
  const handleAddMilestone = () => {
    const newMilestone = {
      id: Math.max(...milestoneList.map((m: any) => m.id)) + 1,
      name: '',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
      assignedAgent: '',
      progress: 0
    };
    setMilestoneList([...milestoneList, newMilestone]);
    setEditingMilestone(newMilestone.id);
    setIsAddingMilestone(false);
  };

  const handleMilestoneUpdate = (id: number, field: string, value: any) => {
    setMilestoneList(milestoneList.map((m: any) => 
      m.id === id ? { ...m, [field]: value } : m
    ));
  };

  const handleDeleteMilestone = (id: number) => {
    setMilestoneList(milestoneList.filter((m: any) => m.id !== id));
    setEditingMilestone(null);
  };

  // Format date for input
  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  // Calculate overall completion rate
  const calculateCompletionRate = () => {
    if (milestoneList.length === 0) return 0;
    const totalProgress = milestoneList.reduce((sum: number, milestone: any) => sum + milestone.progress, 0);
    return Math.round(totalProgress / milestoneList.length);
  };

  // Generate end date based on latest milestone or default 90 days
  const generateEndDate = () => {
    if (milestoneList.length === 0) {
      // Default to 90 days from now
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 90);
      return endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    
    // Find the latest milestone due date
    const latestMilestone = milestoneList.reduce((latest: any, current: any) => {
      return current.dueDate > latest.dueDate ? current : latest;
    });
    
    // Add buffer of 7 days after the latest milestone
    const endDate = new Date(latestMilestone.dueDate);
    endDate.setDate(endDate.getDate() + 7);
    return endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Handle starting/saving the strategy
  const handleStartStrategy = () => {
    // Validate required fields
    if (!editedTitle.trim()) {
      alert('Please enter a strategy name');
      return;
    }
    
    if (milestoneList.length === 0) {
      alert('Please add at least one milestone');
      return;
    }
    
    if (selectedAgents.length === 0) {
      alert('Please select at least one AI agent');
      return;
    }

    // Prepare human in loop data
    let humanInLoopData = null;
    if (editedHuman) {
      const humanInfo = getHumanInfo(editedHuman);
      const profileData = getHumanProfileData(editedHuman);
      humanInLoopData = {
        name: humanInfo?.name || 'Unknown',
        avatar: humanInfo?.avatar || '',
        role: profileData.role,
        department: profileData.department,
        email: profileData.email,
      };
    }

    // Create the strategy object
    const newStrategy = {
      name: editedTitle,
      description: editedDescription || 'No description provided',
      status: 'In Progress' as const,
      startDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      endDate: generateEndDate(),
      progress: calculateCompletionRate(),
      milestones: milestoneList,
      selectedAgents: selectedAgents,
      humanInLoop: humanInLoopData,
    };

    // Add strategy to context
    addStrategy(newStrategy);
    
    // Navigate to strategies list
    navigate('/strategies/list');
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
                    {/* Draft Status */}
                    <div className="flex items-center gap-2 text-sm text-n-300">
                      <span>Draft saved {formatDateTime()}</span>
                      
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
                              {/* Daily Updates */}
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={notificationSettings.dailyUpdates}
                                  onChange={() => handleNotificationToggle('dailyUpdates')}
                                  className="w-4 h-4 text-b-400 bg-white border-n-200 rounded focus:ring-b-400 focus:ring-2"
                                />
                                <span className="text-sm text-n-400">Daily updates</span>
                              </label>
                              
                              {/* Weekly Updates */}
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={notificationSettings.weeklyUpdates}
                                  onChange={() => handleNotificationToggle('weeklyUpdates')}
                                  className="w-4 h-4 text-b-400 bg-white border-n-200 rounded focus:ring-b-400 focus:ring-2"
                                />
                                <span className="text-sm text-n-400">Weekly updates</span>
                              </label>
                              
                              {/* Notify on Escalations */}
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
                    
                    {/* Start Strategy Button */}
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="h-8 px-4"
                      onClick={handleStartStrategy}
                    >
                      Start Strategy
                    </Button>
                  </div>
                </div>
                
                {/* Strategy Name */}
                <div 
                  ref={titleEditRef}
                  className="relative group mb-8"
                  onMouseEnter={() => setHoveringTitle(true)}
                  onMouseLeave={() => setHoveringTitle(false)}
                >
                  {!editingTitle && hoveringTitle && (
                    <Edit3 
                      className="absolute left-0 top-1/2 transform -translate-x-8 -translate-y-1/2 w-5 h-5 text-n-300 hover:text-b-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setEditingTitle(true)}
                    />
                  )}
                  {editingTitle ? (
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      onKeyDown={(e) => handleKeyPress(e, 'title')}
                      className="text-[32px] font-semibold text-n-400 bg-transparent border border-b-200 rounded px-3 py-2 focus:outline-none focus:border-b-300 w-full"
                      autoFocus
                    />
                  ) : (
                    <h1 
                      className="text-[32px] font-semibold text-n-400 cursor-pointer hover:text-b-200 transition-colors"
                      onClick={() => setEditingTitle(true)}
                    >
                      {editedTitle}
                    </h1>
                  )}
                </div>
                
                {/* Strategy Details Container */}
                <div className="bg-white rounded-[12px] p-6 mb-8">
                  <div className="flex items-center gap-4">
                    <Flag className="w-5 h-5 text-b-200 flex-shrink-0" />
                    
                    <div>
                      <h3 className="text-sm font-medium text-n-500 mb-1">Strategy details</h3>
                      <div className="flex items-center gap-1 text-xs text-n-300">
                        <span>Generated through Chat on {formatDate()}</span>
                        <span>•</span>
                        <span>Expected end date {formatDate(90)}</span>
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
                  <div 
                    ref={descriptionEditRef}
                    className="relative group"
                    onMouseEnter={() => setHoveringDescription(true)}
                    onMouseLeave={() => setHoveringDescription(false)}
                  >
                    {!editingDescription && hoveringDescription && (
                      <Edit3 
                        className="absolute left-0 top-0 transform -translate-x-6 translate-y-0.5 w-4 h-4 text-n-300 hover:text-b-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setEditingDescription(true)}
                      />
                    )}
                    {editingDescription ? (
                      <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e, 'description')}
                        className="text-sm text-n-300 leading-relaxed bg-transparent border border-b-200 rounded px-3 py-2 focus:outline-none focus:border-b-300 w-full min-h-[4rem] resize-vertical"
                        autoFocus
                      />
                    ) : (
                      <p 
                        className="text-sm text-n-300 leading-relaxed cursor-pointer hover:text-b-200 transition-colors"
                        onClick={() => setEditingDescription(true)}
                      >
                        {editedDescription || 'No goal specified'}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Milestones Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-b-200" />
                      <h2 className="text-[20px] font-semibold text-n-400">Milestones</h2>
                    </div>
                    
                    {/* Add Milestone Button */}
                    <button
                      onClick={handleAddMilestone}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-b-300 bg-white border border-n-200 rounded-lg hover:border-b-200 hover:text-b-400 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Milestone</span>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {milestoneList.map((milestone: any) => (
                      <div 
                        key={milestone.id} 
                        className="space-y-2 relative group"
                        onMouseEnter={() => setHoveringMilestone(milestone.id)}
                        onMouseLeave={() => setHoveringMilestone(null)}
                      >
                        {/* Edit/Delete buttons on hover */}
                        {hoveringMilestone === milestone.id && editingMilestone !== milestone.id && (
                          <div className="absolute right-0 top-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => setEditingMilestone(milestone.id)}
                              className="p-1 text-n-300 hover:text-b-300 transition-colors"
                              title="Edit milestone"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteMilestone(milestone.id)}
                              className="p-1 text-n-300 hover:text-red-500 transition-colors"
                              title="Delete milestone"
                            >
                              ×
                            </button>
                          </div>
                        )}
                        
                        {editingMilestone === milestone.id ? (
                          /* Editing Mode */
                          <div className="space-y-3 p-3 bg-n-25 rounded-lg border border-n-100">
                            {/* Milestone name editing */}
                            <div className="flex items-center gap-3">
                              <ProgressCircle progress={milestone.progress} />
                              <input
                                type="text"
                                value={milestone.name}
                                onChange={(e) => handleMilestoneUpdate(milestone.id, 'name', e.target.value)}
                                placeholder="Milestone name"
                                className="flex-1 text-base font-medium text-n-500 bg-white border border-n-200 rounded px-3 py-1.5 focus:outline-none focus:border-b-300"
                                autoFocus={milestone.name === ''}
                              />
                            </div>
                            
                            {/* Due date and assigned agent editing */}
                            <div className="flex items-center gap-4 ml-9">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-n-300" />
                                <input
                                  type="date"
                                  value={formatDateForInput(milestone.dueDate)}
                                  onChange={(e) => handleMilestoneUpdate(milestone.id, 'dueDate', new Date(e.target.value))}
                                  className="text-sm text-n-300 bg-white border border-n-200 rounded px-2 py-1 focus:outline-none focus:border-b-300"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <Bot className="w-4 h-4 text-n-300" />
                                <select
                                  value={milestone.assignedAgent}
                                  onChange={(e) => handleMilestoneUpdate(milestone.id, 'assignedAgent', e.target.value)}
                                  className="text-sm text-n-300 bg-white border border-n-200 rounded px-2 py-1 focus:outline-none focus:border-b-300"
                                >
                                  <option value="">Select agent...</option>
                                  {agentOptions.map((agent) => (
                                    <option key={agent.name} value={agent.name}>
                                      {agent.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            
                            {/* Save/Cancel buttons */}
                            <div className="flex items-center gap-2 ml-9">
                              <button
                                onClick={() => setEditingMilestone(null)}
                                className="px-3 py-1 text-sm font-medium text-white bg-b-400 rounded hover:bg-b-500 transition-colors"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditingMilestone(null)}
                                className="px-3 py-1 text-sm font-medium text-n-400 bg-white border border-n-200 rounded hover:bg-n-25 transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* Display Mode */
                          <>
                            {/* Milestone name with progress circle */}
                            <div className="flex items-center gap-3">
                              <ProgressCircle progress={milestone.progress} />
                              <h3 className="text-base font-medium text-n-500">
                                {milestone.name || 'Untitled Milestone'}
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
                                  {milestone.assignedAgent || 'No agent assigned'}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
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
                    <span className="text-[20px] font-semibold text-n-400">{calculateCompletionRate()}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-n-100 rounded-full h-3">
                    <div 
                      className="bg-b-400 h-3 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${calculateCompletionRate()}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Human in the Loop Section */}
                {humanInLoop && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-5 h-5 text-b-200" />
                      <h2 className="text-[20px] font-semibold text-n-400">Human in the Loop</h2>
                    </div>
                    
                    <div 
                      ref={humanEditRef}
                      className="relative group"
                      onMouseEnter={() => setHoveringHuman(true)}
                      onMouseLeave={() => setHoveringHuman(false)}
                    >
                      {!editingHuman && hoveringHuman && (
                        <Edit3 
                          className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 w-4 h-4 text-n-300 hover:text-b-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => setEditingHuman(true)}
                        />
                      )}
                      
                      {editingHuman ? (
                        <div className="relative">
                          <div 
                            className="flex items-center gap-2 p-2 border border-b-200 rounded cursor-pointer bg-white hover:border-b-300 transition-colors"
                            onClick={() => setEditingHuman(!editingHuman)}
                          >
                            {(() => {
                              const humanInfo = getHumanInfo(editedHuman);
                              return humanInfo ? (
                                <>
                                  <img 
                                    src={humanInfo.avatar} 
                                    alt={humanInfo.name} 
                                    className="w-8 h-8 rounded-full border-2 border-white bg-white object-cover" 
                                  />
                                  <span className="text-sm font-medium text-b-300">{humanInfo.name}</span>
                                  <ChevronDown className="w-4 h-4 text-n-300 ml-auto" />
                                </>
                              ) : null;
                            })()}
                          </div>
                          
                          {editingHuman && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-n-100 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                              {humanOptions.map((option) => {
                                const humanInfo = getHumanInfo(option);
                                return humanInfo ? (
                                  <div
                                    key={option}
                                    className="flex items-center gap-2 p-3 hover:bg-n-25 cursor-pointer transition-colors"
                                    onClick={() => {
                                      setEditedHuman(option);
                                      setEditingHuman(false);
                                    }}
                                  >
                                    <img 
                                      src={humanInfo.avatar} 
                                      alt={humanInfo.name} 
                                      className="w-8 h-8 rounded-full border-2 border-white bg-white object-cover" 
                                    />
                                    <span className="text-sm font-medium text-n-400">{humanInfo.name}</span>
                                  </div>
                                ) : null;
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        (() => {
                          const humanInfo = getHumanInfo(editedHuman);
                          return humanInfo ? (
                            <div 
                              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity human-hover-trigger"
                              onClick={() => setEditingHuman(true)}
                              onMouseEnter={handleHumanMouseEnter}
                              onMouseLeave={handleHumanMouseLeave}
                            >
                              <img 
                                src={humanInfo.avatar} 
                                alt={humanInfo.name} 
                                className="w-8 h-8 rounded-full border-2 border-white bg-white object-cover" 
                              />
                              <span className="text-sm font-medium text-b-300 hover:text-b-400 transition-colors">
                                {humanInfo.name}
                              </span>
                            </div>
                          ) : (
                            <p className="text-sm text-n-300 leading-relaxed">
                              {humanInLoop}
                            </p>
                          );
                        })()
                      )}
                    </div>
                  </div>
                )}

                {/* AI Agents Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-b-200" />
                      <h2 className="text-[20px] font-semibold text-n-400">AI Agents</h2>
                    </div>
                    
                    {/* Add Agents Button */}
                    <div className="relative" ref={agentsDropdownRef}>
                      <button
                        onClick={() => setAgentsDropdownOpen(!agentsDropdownOpen)}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-b-300 bg-white border border-n-200 rounded-lg hover:border-b-200 hover:text-b-400 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Agents</span>
                      </button>
                      
                      {agentsDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 w-80 bg-white border border-n-100 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                          <div className="p-2">
                            <div className="text-xs font-medium text-n-400 px-3 py-2 border-b border-n-50 mb-2">
                              Select agents to include in your strategy
                            </div>
                            {agentOptions.map((agent) => {
                              const isSelected = selectedAgents.some(a => a.name === agent.name);
                              return (
                                <div
                                  key={agent.name}
                                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                    isSelected 
                                      ? 'bg-b-50 border border-b-100' 
                                      : 'hover:bg-n-25'
                                  }`}
                                  onClick={() => handleAgentToggle(agent)}
                                >
                                  <img 
                                    src={agent.avatar} 
                                    alt={agent.name} 
                                    className="w-8 h-8 rounded-full object-cover" 
                                  />
                                  <span className={`text-sm font-medium flex-1 ${
                                    isSelected ? 'text-b-400' : 'text-n-400'
                                  }`}>
                                    {agent.name}
                                  </span>
                                  {isSelected && (
                                    <div className="w-4 h-4 bg-b-400 rounded-full flex items-center justify-center">
                                      <span className="text-white text-xs">✓</span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                                     {/* Selected Agents Display */}
                  {selectedAgents.length > 0 ? (
                    <div className="space-y-3">
                      {selectedAgents.map((agent) => (
                        <div 
                          key={agent.name}
                          className="flex items-center justify-between"
                        >
                          <div 
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
                          <button
                            onClick={() => handleAgentToggle(agent)}
                            className="text-n-300 hover:text-n-500 transition-colors text-lg leading-none"
                            title="Remove agent"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-n-300 italic">No agents selected</p>
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
          {editedHuman && (
            <AgentProfileCard
              name={getHumanInfo(editedHuman)?.name || 'Team Member'}
              imageUrl={getHumanInfo(editedHuman)?.avatar || userImages.johnDoe}
              type="human"
              isVisible={showHumanProfile}
              position={profilePosition}
              role={getHumanProfileData(editedHuman).role}
              department={getHumanProfileData(editedHuman).department}
              email={getHumanProfileData(editedHuman).email}
            />
          )}
        </div>
      </div>
      
      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  );
};

export default NewStrategyPage; 