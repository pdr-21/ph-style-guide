import React from 'react';

interface QuickCommandItemProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const QuickCommandItem: React.FC<QuickCommandItemProps> = ({ 
  title, 
  description, 
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-n-100 rounded-xl p-4 hover:border-n-200 hover:shadow-sm transition-all duration-200 cursor-pointer min-h-[4rem] flex items-center justify-center"
    >
      {title || description ? (
        <div>
          {title && (
            <h3 className="text-sm font-poppins font-medium text-n-500 mb-1">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs font-poppins font-normal text-n-300">
              {description}
            </p>
          )}
        </div>
      ) : (
        <div className="w-full h-full bg-n-40 rounded-lg"></div>
      )}
    </div>
  );
};

export default QuickCommandItem;