import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  description: string;
  /** Optional breadcrumb labels to render above the title */
  breadcrumbs?: string[];
  /** Optional action element displayed on the right side (e.g., button) */
  actions?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, breadcrumbs, actions }) => {
  return (
    <div className="bg-white border-b border-n-75 p-8 ">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} className="mb-6" />
      )}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
        {/* Title & description */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>

        {/* Right aligned actions */}
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
    </div>
  );
};

export default PageHeader;