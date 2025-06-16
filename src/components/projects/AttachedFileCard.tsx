import React from 'react';
import { Card } from '../ui/card';
import { FileText, File, Image, Archive, Download } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AttachedFile } from '../../types';

interface AttachedFileCardProps {
  file: AttachedFile;
  className?: string;
}

const AttachedFileCard: React.FC<AttachedFileCardProps> = ({
  file,
  className = ''
}) => {
  // Get file icon based on type
  const getFileIcon = (type: string) => {
    const lowerType = type.toLowerCase();
    
    if (lowerType.includes('pdf')) {
      return <FileText className="w-5 h-5 text-r-300" />;
    }
    if (lowerType.includes('word') || lowerType.includes('doc')) {
      return <FileText className="w-5 h-5 text-b-200" />;
    }
    if (lowerType.includes('excel') || lowerType.includes('xls') || lowerType.includes('csv')) {
      return <FileText className="w-5 h-5 text-g-300" />;
    }
    if (lowerType.includes('image') || lowerType.includes('png') || lowerType.includes('jpg') || lowerType.includes('jpeg')) {
      return <Image className="w-5 h-5 text-k-300" />;
    }
    if (lowerType.includes('zip') || lowerType.includes('rar') || lowerType.includes('archive')) {
      return <Archive className="w-5 h-5 text-n-400" />;
    }
    
    return <File className="w-5 h-5 text-n-400" />;
  };

  // Get file type color for background
  const getFileTypeColor = (type: string) => {
    const lowerType = type.toLowerCase();
    
    if (lowerType.includes('pdf')) {
      return 'bg-r-50 border-r-100';
    }
    if (lowerType.includes('word') || lowerType.includes('doc')) {
      return 'bg-b-40 border-b-100';
    }
    if (lowerType.includes('excel') || lowerType.includes('xls') || lowerType.includes('csv')) {
      return 'bg-g-100 border-g-200';
    }
    if (lowerType.includes('image') || lowerType.includes('png') || lowerType.includes('jpg') || lowerType.includes('jpeg')) {
      return 'bg-k-50 border-k-100';
    }
    
    return 'bg-n-40 border-n-100';
  };

  // Handle file download/view
  const handleFileAction = () => {
    if (file.url && file.url !== '#') {
      window.open(file.url, '_blank');
    } else {
      // Simulate download action
      console.log(`Downloading file: ${file.name}`);
    }
  };

  return (
    <Card 
      className={cn(
        "bg-white rounded-xl border border-n-100 p-4 hover:border-n-200 hover:shadow-sm transition-all duration-200 cursor-pointer group",
        className
      )}
      onClick={handleFileAction}
    >
      <div className="flex items-start space-x-3">
        {/* File Icon */}
        <div className={cn(
          "w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0",
          getFileTypeColor(file.type)
        )}>
          {getFileIcon(file.type)}
        </div>
        
        {/* File Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-poppins font-medium text-n-500 truncate group-hover:text-b-300 transition-colors">
                {file.name}
              </h4>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs font-poppins font-normal text-n-300 uppercase">
                  {file.type}
                </span>
                <span className="text-xs font-poppins font-normal text-n-200">
                  •
                </span>
                <span className="text-xs font-poppins font-normal text-n-300">
                  {file.size}
                </span>
              </div>
            </div>
            
            {/* Download Icon */}
            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 text-n-300 hover:text-b-300" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AttachedFileCard;