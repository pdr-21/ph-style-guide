import React from 'react';
import PageHeader from '../components/common/PageHeader';

const CalendarPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Calendar" 
        description="Schedule and manage your appointments and events" 
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg border border-n-100 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Calendar & Scheduling</h3>
          <p className="text-gray-600 mb-4">
            This page will contain your calendar and scheduling interface including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Monthly, weekly, and daily calendar views</li>
            <li>Event creation and management</li>
            <li>Meeting scheduling with contacts</li>
            <li>Recurring event support</li>
            <li>Calendar sharing and collaboration</li>
            <li>Integration with email and notifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;