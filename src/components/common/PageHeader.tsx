import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-white border-b border-n-75 p-8 mb-8">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default PageHeader;