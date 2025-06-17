import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import JobItem from './JobItem';

const MyJobsSection: React.FC = () => {
  // Sample job data - this will be replaced with real data later
  const jobs = [
    {
      id: '1',
      title: 'Product Development Engineer I',
      jobId: 'P-110650',
      location: 'Philadelphia, United States',
      metrics: {
        incompleteApplies: 912,
        jobViews: 912,
        leads: 1820,
        applicants: 1
      }
    },
    {
      id: '2',
      title: 'Product Development Engineer I',
      jobId: 'P-110650',
      location: 'Philadelphia, United States',
      metrics: {
        incompleteApplies: 912,
        jobViews: 912,
        leads: 1820,
        applicants: 1
      }
    },
    {
      id: '3',
      title: 'Product Development Engineer I',
      jobId: 'P-110650',
      location: 'Philadelphia, United States',
      metrics: {
        incompleteApplies: 912,
        jobViews: 912,
        leads: 1820,
        applicants: 1
      }
    }
  ];

  const jobCount = 7; // Total number of jobs assigned

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-xl font-poppins font-semibold text-n-500">
              My Jobs
            </h2>
            <Badge 
              variant="secondary" 
              className="bg-n-50 text-n-400 border-n-75 hover:bg-n-50 px-2 py-1 text-xs font-poppins font-medium"
            >
              {jobCount}
            </Badge>
          </div>
          <p className="text-sm font-poppins font-normal text-n-300">
            Jobs that are assigned to you and need your attention
          </p>
        </div>
        
        <Button 
          variant="ghost" 
          className="text-p-300 hover:text-p-400 hover:bg-p-50 font-poppins font-medium"
        >
          View all
        </Button>
      </div>

      {/* Job Items */}
      <div className="space-y-3">
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            title={job.title}
            jobId={job.jobId}
            location={job.location}
            metrics={job.metrics}
          />
        ))}
      </div>
    </div>
  );
};

export default MyJobsSection;