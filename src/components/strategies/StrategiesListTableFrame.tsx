import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { agentImages } from '../../lib/agentImages';
import { useStrategies } from '../../context/StrategiesContext';
import { useNavigate } from 'react-router-dom';

const quickFilters = [
  'All',
  'Human Resources',
  'Hiring',
  'Retention',
  'Onboarding',
  'Team Management',
];

const columns = [
  'Strategy Name',
  'Description',
  'Status',
  'Start Date',
  'End Date',
  'Completion Rate',
  'AI Agents',
  'Human in the Loop',
  'Actions',
];

const StatusBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center justify-center h-6 px-2 rounded-md text-xs font-normal bg-n-50 text-n-500">
    {label}
  </span>
);

interface TaskDistributionProps {
  percent: number; // 0-100
}

const TaskDistribution: React.FC<TaskDistributionProps> = ({ percent }) => {
  // Hard-coded breakdown for demo
  const breakdown = [
    { label: 'Completed', value: 24, color: 'bg-g-300' },
    { label: 'Escalated', value: 3, color: 'bg-r-300' },
    { label: 'Paused', value: 2, color: 'bg-y-300' },
    { label: 'Not started', value: 15, color: 'bg-n-200' },
  ];

  return (
    <div className="relative group w-32">{/* 128px */}
      <div className="mb-1 flex items-center text-sm text-n-500 font-normal">
        {percent}%
      </div>
      <div className="h-2 w-full bg-white border border-g-300 rounded-full">
        <div
          className="h-full bg-g-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Popover */}
      <div className="absolute z-10 hidden group-hover:flex flex-col gap-2 w-56 p-4 bg-white border border-n-75 rounded-lg shadow-lg left-1/2 -translate-x-1/2 top-full mt-2">
        <span className="text-sm font-medium text-n-500 mb-2">Task Distribution</span>
        {breakdown.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-sm text-n-500">
            <div className="flex items-center gap-2">
              <span className={`inline-block w-2.5 h-2.5 rounded-full ${item.color}`} />
              {item.label}
            </div>
            <span>{item.value}</span>
          </div>
        ))}
        <div className="pt-2 mt-2 border-t border-n-75 text-sm text-n-400 flex justify-between">
          <span>Total tasks</span>
          <span>{breakdown.reduce((s, b) => s + b.value, 0)}</span>
        </div>
      </div>
    </div>
  );
};

interface AvatarStackProps {
  images: string[];
}

const AvatarStack: React.FC<AvatarStackProps> = ({ images }) => (
  <div className="flex -space-x-3">
    {images.map((src, idx) => (
      <div key={idx} className="relative group">
        <img
          src={src}
          alt="Agent"
          className="w-8 h-8 rounded-full border-2 border-white bg-white object-cover hover:scale-105 transition-transform"
        />
        <div className="absolute z-20 left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white border border-n-75 rounded-lg shadow-lg px-3 py-2 text-xs text-n-500 whitespace-nowrap">
          AI Agent
        </div>
      </div>
    ))}
  </div>
);

const rows = [
  {
    name: 'Q4 Engineering Hiring',
    description: 'Hiring 4 Senior Engineering roles to meet the Q4 team requirements',
    status: 'In Progress',
    startDate: '1 Oct 2024',
    endDate: '1 Jan 2025',
    progress: 62,
    human: {
      name: 'Jane Smith',
      src: 'https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0',
    },
    selectedAgents: null,
  },
  {
    name: 'Onboarding Process Optimization',
    description: 'Streamlining onboarding to reduce ramp-up time for new hires',
    status: 'Planned',
    startDate: '15 Jan 2025',
    endDate: '15 Mar 2025',
    progress: 0,
    human: {
      name: 'Mark Johnson',
      src: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    selectedAgents: null,
  },
  {
    name: 'Team Management Upskilling',
    description: 'Training managers on modern leadership and feedback techniques',
    status: 'In Progress',
    startDate: '10 Nov 2024',
    endDate: '10 Feb 2025',
    progress: 45,
    human: {
      name: 'Emily Davis',
      src: 'https://plus.unsplash.com/premium_photo-1661730351855-346069d20ef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    selectedAgents: null,
  },
  {
    name: 'Retention Improvement Strategy',
    description: 'Initiative to boost employee retention through engagement programs',
    status: 'Paused',
    startDate: '5 Sep 2024',
    endDate: '5 Dec 2024',
    progress: 30,
    human: {
      name: 'Alex Carter',
      src: 'https://images.unsplash.com/photo-1624395213232-ea2bcd36b865?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    selectedAgents: null,
  },
  {
    name: 'Diversity Hiring Initiative',
    description: 'Increase diversity in hiring pipeline across all departments',
    status: 'In Progress',
    startDate: '20 Aug 2024',
    endDate: '20 Nov 2024',
    progress: 55,
    human: {
      name: 'Sophia Lee',
      src: 'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    selectedAgents: null,
  },
  {
    name: 'Automation Implementation',
    description: 'Deploying AI tools to automate repetitive recruiting tasks',
    status: 'Completed',
    startDate: '1 May 2024',
    endDate: '31 Jul 2024',
    progress: 100,
    human: {
      name: 'Olivia Brown',
      src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    selectedAgents: null,
  },
];

// Row actions dropdown
const RowActions: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-n-300 hover:text-n-500 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 13.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 20.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white border border-n-75 rounded-md shadow-lg w-28 text-sm text-n-500 z-30 flex flex-col">
          <button className="w-full text-left px-3 py-2 hover:bg-n-40">Edit</button>
          <button className="w-full text-left px-3 py-2 hover:bg-n-40">Pause</button>
          <button className="w-full text-left px-3 py-2 hover:bg-n-40">Archive</button>
          <button className="w-full text-left px-3 py-2 hover:bg-n-40 text-r-400">Delete</button>
        </div>
      )}
    </div>
  );
};

const StrategiesListTableFrame: React.FC = () => {
  const { strategies } = useStrategies();
  const navigate = useNavigate();

  // Combine static rows with dynamic strategies for demo purposes
  const allRows = [
    ...strategies.map(strategy => ({
      id: strategy.id, // Add ID for navigation
      name: strategy.name,
      description: strategy.description,
      status: strategy.status,
      startDate: strategy.startDate,
      endDate: strategy.endDate,
      progress: strategy.progress,
      human: strategy.humanInLoop ? {
        name: strategy.humanInLoop.name,
        src: strategy.humanInLoop.avatar,
      } : {
        name: 'Unassigned',
        src: 'https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0',
      },
      selectedAgents: strategy.selectedAgents,
      isUserCreated: true, // Flag to identify user-created strategies
    })),
    ...rows.map(row => ({ ...row, isUserCreated: false, selectedAgents: null })) // Keep existing static rows for demo
  ];

  // Handle row click to navigate to strategy details
  const handleRowClick = (row: any) => {
    if (row.isUserCreated && row.id) {
      navigate(`/strategies/view/${row.id}`);
    }
  };

  return (
    <div className="border border-n-75 rounded-[10px] bg-white">
      {/* Quick filter tags */}
      <div className="flex flex-wrap gap-2 p-6">
        {quickFilters.map((f) => (
          <button
            key={f}
            type="button"
            className="rounded-lg border border-n-200 bg-n-40 px-3 py-1.5 text-sm text-n-500 hover:bg-n-50"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-left gap-4 px-6 pb-6">
        {/* Search input */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-n-300" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-n-200 bg-white py-2 pl-9 pr-3 text-sm text-n-500 placeholder-n-300 focus:outline-none focus:ring-2 focus:ring-b-200"
          />
        </div>

        {/* Filter button - skeleton (no dropdown yet) */}
        <Button variant="ghost" size="sm" className="gap-2 text-n-500">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </div>

      {/* Table headers */}
      <div className="border-t border-n-75 overflow-visible">
        <table className="w-full table-fixed divide-y divide-n-75">
          <thead>
            <tr className="bg-gr-25 text-sm font-medium text-n-400">
              {columns.map((col) => {
                let widthClass = '';
                if (col === 'Status' || col === 'AI Agents' || col === 'Actions') widthClass = 'w-[148px]';
                if (col === 'Start Date' || col === 'End Date') widthClass = 'w-[132px]';
                return (
                  <th
                    key={col}
                    className={`whitespace-nowrap px-6 py-3 text-left ${widthClass}`}
                  >
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {allRows.map((row, idx) => (
              <tr 
                key={idx} 
                className={`text-sm text-n-500 ${row.isUserCreated ? 'cursor-pointer hover:bg-n-25 transition-colors' : ''}`}
                onClick={() => handleRowClick(row)}
              >
                <td className="px-6 py-4 whitespace-nowrap max-w-xs bg-white">
                  {row.name}
                </td>
                <td className="px-6 py-4 max-w-[280px] truncate bg-white">
                  {row.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-[148px] bg-white">
                  <StatusBadge label={row.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-[132px] bg-white">
                  {row.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-[132px] bg-white">
                  {row.endDate}
                </td>
                <td className="px-6 py-4 w-[148px] bg-white">
                  <TaskDistribution percent={row.progress} />
                </td>
                <td className="px-6 py-4">
                  <AvatarStack 
                    images={
                      row.selectedAgents 
                        ? row.selectedAgents.slice(0, 3).map((agent: any) => agent.avatar)
                        : [agentImages[0], agentImages[1], agentImages[2]]
                    } 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-[148px] bg-white">
                  <div className="flex items-center gap-2">
                    <div className="relative group">
                      <img src={row.human.src} alt={row.human.name} className="w-8 h-8 rounded-full border-2 border-white bg-white object-cover" />
                      <div className="absolute z-20 left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white border border-n-75 rounded-lg shadow-lg px-3 py-2 text-xs text-n-500 whitespace-nowrap">
                        {row.human.name}
                      </div>
                    </div>
                    <span className="text-sm font-normal text-n-500">{row.human.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-[148px] bg-white">
                  <div className="flex items-center gap-4">
                    <button className="text-n-300 hover:text-n-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <RowActions />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StrategiesListTableFrame; 