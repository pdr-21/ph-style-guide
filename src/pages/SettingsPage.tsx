import React from 'react';
import PageHeader from '../components/common/PageHeader';

const SettingsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Settings" 
        description="Configure your application preferences and account settings" 
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg border border-n-100 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Application Settings</h3>
          <p className="text-gray-600 mb-4">
            This page will contain your settings and configuration interface including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>User profile and account management</li>
            <li>Notification preferences</li>
            <li>Security and privacy settings</li>
            <li>Integration configurations</li>
            <li>Team and user management</li>
            <li>System preferences and customization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;