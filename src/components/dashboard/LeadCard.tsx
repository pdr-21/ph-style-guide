import React from 'react';
import { Card } from '../ui/card';
import { User, MapPin } from 'lucide-react';

interface LeadCardProps {
  jobTitle: string;
  location: string;
  leadCount: number;
  jobId: string;
  sourcingDaysLeft: number;
}

const LeadCard: React.FC<LeadCardProps> = ({ 
  jobTitle, 
  location, 
  leadCount, 
  jobId, 
  sourcingDaysLeft 
}) => {
  return (
    <Card className="bg-white rounded-xl border border-n-75 p-4 hover:border-n-200 hover:shadow-sm transition-all duration-200 cursor-pointer">
      {/* Lead count with icon */}
      <div className="flex items-center space-x-2 mb-3">
        <User className="w-4 h-4 text-n-300" />
        <span className="text-lg font-poppins font-medium text-n-500">
          {leadCount}
        </span>
      </div>

      {/* Job title */}
      <h3 className="text-sm font-poppins font-medium text-n-500 mb-2">
        {jobTitle}
      </h3>

      {/* Location */}
      <div className="flex items-center text-xs font-poppins font-normal text-n-300 mb-3">
        <MapPin className="w-3 h-3 mr-1" />
        {location}
      </div>

      {/* Job ID and sourcing days */}
      <div className="space-y-1">
        <div className="text-xs font-poppins font-normal text-n-300">
          Job ID: {jobId}
        </div>
        <div className="text-xs font-poppins font-normal text-n-300">
          Sourcing days left: {sourcingDaysLeft}
        </div>
      </div>
    </Card>
  );
};

export default LeadCard;