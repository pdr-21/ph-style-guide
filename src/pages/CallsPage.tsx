import React from 'react';
import PageHeader from '../components/common/PageHeader';

const CallsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Calls" 
        description="Track and manage your phone communications" 
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg border border-n-100 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Call Management</h3>
          <p className="text-gray-600 mb-4">
            This page will contain your call management interface including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Call log and history tracking</li>
            <li>Click-to-call functionality</li>
            <li>Call recording and notes</li>
            <li>Scheduled call reminders</li>
            <li>Call performance analytics</li>
            <li>Integration with contact profiles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallsPage;