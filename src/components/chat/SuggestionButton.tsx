import React from 'react';

interface SuggestionButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const SuggestionButton: React.FC<SuggestionButtonProps> = ({
  text,
  onClick,
  className = ''
}) => {
  return (
    <div className={`p-[1px] rounded-xl bg-gradient-to-r from-[#FFBD45] via-[#CDC4F5] via-[#C8EFEB] to-[#EBA680] ${className}`}>
      <button
        onClick={onClick}
        className="w-full bg-white rounded-xl px-4 py-3 flex items-center space-x-3 hover:bg-n-40 transition-colors"
      >
        {/* AI Gradient SVG Icon */}
        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.15625 1.9375L10.0312 5.96875L14.0625 7.84375C14.3125 7.96875 14.5 8.21875 14.5 8.5C14.5 8.8125 14.3125 9.0625 14.0625 9.1875L10.0312 11.0625L8.15625 15.0938C8.03125 15.3438 7.78125 15.5 7.5 15.5C7.1875 15.5 6.9375 15.3438 6.8125 15.0938L4.9375 11.0625L0.90625 9.1875C0.65625 9.0625 0.5 8.8125 0.5 8.5C0.5 8.21875 0.65625 7.96875 0.90625 7.84375L4.9375 5.96875L6.8125 1.9375C6.9375 1.6875 7.1875 1.5 7.5 1.5C7.78125 1.5 8.03125 1.6875 8.15625 1.9375Z" fill="url(#ai-gradient-icon)"/>
          <defs>
            <linearGradient id="ai-gradient-icon" x1="-1.5" y1="2.16667" x2="11.4814" y2="12.2559" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC6E8"/>
              <stop offset="0.105" stopColor="#CBC6FF"/>
              <stop offset="1" stopColor="#4D3EE0"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Button Text */}
        <span className="text-sm font-poppins font-normal text-n-500">
          {text}
        </span>
      </button>
    </div>
  );
};

export default SuggestionButton;