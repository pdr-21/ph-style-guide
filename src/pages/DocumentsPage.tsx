import React from 'react';
import PageHeader from '../components/common/PageHeader';

const DocumentsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Documents" 
        description="Manage and organize your business documents" 
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg border border-n-100 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Document Management</h3>
          <p className="text-gray-600 mb-4">
            This page will contain your document management interface including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>File upload and storage</li>
            <li>Document categorization and tagging</li>
            <li>Version control and history</li>
            <li>Sharing and collaboration tools</li>
            <li>Search and filtering capabilities</li>
            <li>Integration with contacts and deals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;