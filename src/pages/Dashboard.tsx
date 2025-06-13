import React from 'react';
import PageHeader from '../components/common/PageHeader';

const Dashboard: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Dashboard" 
        description="Welcome to your dashboard" 
      />
      
      <div className="p-8">
        {/* Content will be added later */}
      </div>
    </div>
  );
};

export default Dashboard;