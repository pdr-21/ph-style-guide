import React from 'react';
import { Card } from '../ui/card';
import { MapPin, MoreVertical } from 'lucide-react';

interface JobMetrics {
  incompleteApplies: number;
  jobViews: number;
  leads: number;
  applicants: number;
}

interface JobItemProps {
  title: string;
  jobId: string;
  location: string;
  metrics: JobMetrics;
}

const JobItem: React.FC<JobItemProps> = ({ title, jobId, location, metrics }) => {
  return (
    <Card className="bg-white rounded-xl border border-n-75 p-4 hover:border-n-200 hover:shadow-sm transition-all duration-200">
      <div className="flex items-center justify-between">
        {/* Left side - Job info */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-sm font-poppins font-medium text-n-500">
              {title}
            </h3>
            <span className="text-xs font-poppins font-normal text-n-300">
              | {jobId}
            </span>
          </div>
          <div className="flex items-center text-xs font-poppins font-normal text-n-300">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
          </div>
        </div>

        {/* Right side - Metrics */}
        <div className="flex items-center space-x-6 ml-4">
          <div className="text-center">
            <div className="text-lg font-poppins font-medium text-n-500">
              {metrics.incompleteApplies}
            </div>
            <div className="text-xs font-poppins font-normal text-n-300">
              Incomplete Applies
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-poppins font-medium text-n-500">
              {metrics.jobViews}
            </div>
            <div className="text-xs font-poppins font-normal text-n-300">
              Job Views
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-poppins font-medium text-n-500">
              {metrics.leads.toLocaleString()}
            </div>
            <div className="text-xs font-poppins font-normal text-n-300">
              Leads
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-poppins font-medium text-n-500">
              {metrics.applicants}
            </div>
            <div className="text-xs font-poppins font-normal text-n-300">
              Applicants
            </div>
          </div>

          {/* More options button */}
          <button className="p-1 text-n-300 hover:text-n-500 hover:bg-n-50 rounded transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default JobItem;