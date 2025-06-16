import React from 'react';
import AttachedFileCard from './AttachedFileCard';
import { AttachedFile } from '../../types';
import { cn } from '../../lib/utils';

interface AttachedFilesSectionProps {
  files: AttachedFile[];
  className?: string;
}

const AttachedFilesSection: React.FC<AttachedFilesSectionProps> = ({
  files,
  className = ''
}) => {
  if (files.length === 0) {
    return (
      <div className={cn("text-center py-6", className)}>
        <div className="text-sm text-n-300">
          No attached files
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h4 className="text-sm font-poppins font-medium text-n-500">
        Attached Files ({files.length})
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {files.map((file) => (
          <AttachedFileCard
            key={file.id}
            file={file}
          />
        ))}
      </div>
    </div>
  );
};

export default AttachedFilesSection;