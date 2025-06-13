import React from 'react';
import PageHeader from '../components/common/PageHeader';

const ContactsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Contacts" 
        description="Manage your contacts and customer relationships" 
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg border border-n-100 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Management</h3>
          <p className="text-gray-600 mb-4">
            This page will contain your contact management interface including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Contact list with search and filtering</li>
            <li>Contact details and interaction history</li>
            <li>Add/edit contact forms</li>
            <li>Contact segmentation and tagging</li>
            <li>Import/export functionality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;