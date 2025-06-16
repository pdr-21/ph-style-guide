import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Bell, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NotificationOption {
  id: string;
  label: string;
  description: string;
}

interface NotificationDropdownProps {
  className?: string;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNotifications, setActiveNotifications] = useState<Set<string>>(new Set());
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Notification options
  const notificationOptions: NotificationOption[] = [
    {
      id: 'daily-summary',
      label: 'Daily Summary',
      description: 'Get daily progress updates'
    },
    {
      id: 'task-reminders',
      label: 'Task Reminders',
      description: 'Reminders for upcoming deadlines'
    },
    {
      id: 'escalation-alerts',
      label: 'Escalation Alerts',
      description: 'Immediate alerts for escalated tasks'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle notification option
  const toggleNotification = (optionId: string) => {
    setActiveNotifications(prev => {
      const newSet = new Set(prev);
      if (newSet.has(optionId)) {
        newSet.delete(optionId);
      } else {
        newSet.add(optionId);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-b-200 border-b-200 hover:bg-b-40"
      >
        <Bell className="w-4 h-4" />
        Notify me
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-n-100 rounded-lg shadow-lg z-50 p-2">
          <div className="space-y-1">
            {notificationOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleNotification(option.id)}
                className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-n-40 transition-colors text-left"
              >
                {/* Checkbox */}
                <div className={cn(
                  "w-4 h-4 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0",
                  activeNotifications.has(option.id)
                    ? "bg-b-200 border-b-200"
                    : "border-n-200"
                )}>
                  {activeNotifications.has(option.id) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm font-poppins font-medium text-n-500">
                    {option.label}
                  </div>
                  <div className="text-xs font-poppins font-normal text-n-300 mt-1">
                    {option.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;