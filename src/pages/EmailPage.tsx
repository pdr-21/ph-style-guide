import React from 'react';
import PageHeader from '../components/common/PageHeader';

const EmailPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Email" 
        description="Manage your email communications and campaigns" 
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg border border-n-100 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Email Management</h3>
          <p className="text-gray-600 mb-4">
            This page will contain your email management interface including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Inbox and email organization</li>
            <li>Email composition and templates</li>
            <li>Automated email sequences</li>
            <li>Email campaign management</li>
            <li>Performance tracking and analytics</li>
            <li>Integration with contact records</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;