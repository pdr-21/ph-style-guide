import React from 'react';
import PageHeader from '../components/common/PageHeader';

const ReportsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Reports" 
        description="Analytics and insights for your business performance" 
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg border border-n-100 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Business Analytics</h3>
          <p className="text-gray-600 mb-4">
            This page will contain your reporting and analytics interface including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Sales performance dashboards</li>
            <li>Contact engagement metrics</li>
            <li>Revenue and conversion tracking</li>
            <li>Custom report builder</li>
            <li>Data visualization charts and graphs</li>
            <li>Export capabilities for presentations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;