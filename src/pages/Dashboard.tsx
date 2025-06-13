import React from 'react';
import ChatInput from '../components/dashboard/ChatInput';
import QuickCommandsGrid from '../components/dashboard/QuickCommandsGrid';

const Dashboard: React.FC = () => {
  // Get current time for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="p-8">
      {/* Main grid layout - 70/30 split */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 max-w-7xl mx-auto">
        {/* Left column - 70% */}
        <div className="lg:col-span-7">
          {/* Gradient container */}
          <div className="bg-gradient-to-bl from-b-40 to-white rounded-2xl p-8 mb-6">
            {/* Summary header with icon */}
            <div className="flex items-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M8.5 4C6.02303 4 4 5.96016 4 8.36016C4 8.40797 4 8.45578 4 8.50359C4 8.53227 4 8.55139 4 8.58008L4 15.0247C4 15.5602 4.45395 16 5.00658 16C5.55921 16 6.01316 15.5602 6.01316 15.0247L6.01316 11.9936C6.72368 12.4526 7.58224 12.7203 8.5 12.7203C10.9868 12.7203 13 10.7602 13 8.36016C13 5.96016 10.9868 4 8.5 4Z" fill="#4D3EE0"/>
                <path d="M15.5 11C15.3472 10.9991 15.1978 11.0455 15.0724 11.133C14.9471 11.2204 14.8519 11.3446 14.8 11.4884L13.9069 13.9057L11.4883 14.7961C11.345 14.8488 11.2214 14.9442 11.1341 15.0694C11.0468 15.1946 11 15.3436 11 15.4963C11 15.6489 11.0468 15.7979 11.1341 15.9231C11.2214 16.0483 11.345 16.1437 11.4883 16.1964L13.9069 17.0925L14.7972 19.5116C14.8499 19.6549 14.9453 19.7785 15.0705 19.8658C15.1956 19.9532 15.3446 20 15.4972 20C15.6498 20 15.7988 19.9532 15.9239 19.8658C16.0491 19.7785 16.1445 19.6549 16.1972 19.5116L17.0931 17.0925L19.5117 16.202C19.655 16.1493 19.7786 16.0539 19.8659 15.9287C19.9532 15.8035 20 15.6545 20 15.5019C20 15.3492 19.9532 15.2003 19.8659 15.0751C19.7786 14.9499 19.655 14.8545 19.5117 14.8017L17.0931 13.9057L16.2028 11.4865C16.1504 11.3426 16.0547 11.2185 15.9288 11.1314C15.8029 11.0443 15.6531 10.9984 15.5 11Z" fill="#4D3EE0"/>
              </svg>
              <span className="text-sm font-poppins font-medium text-b-300">
                Summary provided by Phrancis
              </span>
            </div>

            {/* Greeting */}
            <h1 className="text-3xl font-poppins font-semibold text-n-500 mb-8">
              {getGreeting()}, John
            </h1>

            {/* Chat Input Component */}
            <ChatInput />
          </div>
        </div>

        {/* Right column - 30% */}
        <div className="lg:col-span-3">
          {/* Header */}
          <h2 className="text-xl font-poppins font-semibold text-n-500 mb-6">
            Look deeper in your data
          </h2>

          {/* Quick Commands Grid */}
          <QuickCommandsGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;