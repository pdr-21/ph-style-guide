import React, { useState, useEffect } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react';

const DashboardContent: React.FC = () => {
  const [greeting, setGreeting] = useState('');
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  const quickCommands = [
    'Automatic',
    'Goals',
    'Problems'
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="grid grid-cols-10 gap-8 max-w-7xl mx-auto">
        {/* Left Column - 70% */}
        <div className="col-span-7">
          <div className="bg-gradient-to-bl from-b-40 to-white rounded-2xl p-8 h-full">
            {/* Summary Header */}
            <div className="flex items-center mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M8.5 4C6.02303 4 4 5.96016 4 8.36016C4 8.40797 4 8.45578 4 8.50359C4 8.53227 4 8.55139 4 8.58008L4 15.0247C4 15.5602 4.45395 16 5.00658 16C5.55921 16 6.01316 15.5602 6.01316 15.0247L6.01316 11.9936C6.72368 12.4526 7.58224 12.7203 8.5 12.7203C10.9868 12.7203 13 10.7602 13 8.36016C13 5.96016 10.9868 4 8.5 4Z" fill="#4D3EE0"/>
                <path d="M15.5 11C15.3472 10.9991 15.1978 11.0455 15.0724 11.133C14.9471 11.2204 14.8519 11.3446 14.8 11.4884L13.9069 13.9057L11.4883 14.7961C11.345 14.8488 11.2214 14.9442 11.1341 15.0694C11.0468 15.1946 11 15.3436 11 15.4963C11 15.6489 11.0468 15.7979 11.1341 15.9231C11.2214 16.0483 11.345 16.1437 11.4883 16.1964L13.9069 17.0925L14.7972 19.5116C14.8499 19.6549 14.9453 19.7785 15.0705 19.8658C15.1956 19.9532 15.3446 20 15.4972 20C15.6498 20 15.7988 19.9532 15.9239 19.8658C16.0491 19.7785 16.1445 19.6549 16.1972 19.5116L17.0931 17.0925L19.5117 16.202C19.655 16.1493 19.7786 16.0539 19.8659 15.9287C19.9532 15.8035 20 15.6545 20 15.5019C20 15.3492 19.9532 15.2003 19.8659 15.0751C19.7786 14.9499 19.655 14.8545 19.5117 14.8017L17.0931 13.9057L16.2028 11.4865C16.1504 11.3426 16.0547 11.2185 15.9288 11.1314C15.8029 11.0443 15.6531 10.9984 15.5 11Z" fill="#4D3EE0"/>
              </svg>
              <span className="text-b-300 text-sm font-poppins font-medium">
                Summary provided by Phrancis
              </span>
            </div>

            {/* Greeting */}
            <h1 className="text-4xl font-poppins font-semibold text-n-500 mb-12">
              {greeting}, John
            </h1>

            {/* Chat Input Container */}
            <div className="bg-white rounded-2xl border border-n-100 shadow-sm">
              {/* Input Field */}
              <div className="p-6">
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="How can I help you?"
                  className="w-full h-32 resize-none border-none outline-none text-base font-poppins font-normal text-n-500 placeholder:text-n-200"
                />
              </div>

              {/* Bottom Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-n-75">
                {/* Quick Commands */}
                <div className="flex items-center space-x-3">
                  {quickCommands.map((command, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-poppins font-medium transition-colors ${
                        index === 0 
                          ? 'bg-b-200 text-white' 
                          : 'bg-n-50 text-n-400 hover:bg-n-100 hover:text-n-500'
                      }`}
                    >
                      {command}
                    </button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="p-2 hover:bg-n-50 rounded-lg transition-colors">
                    <Paperclip className="w-5 h-5 text-n-300" />
                  </button>
                  <button className="p-2 hover:bg-n-50 rounded-lg transition-colors">
                    <Mic className="w-5 h-5 text-n-300" />
                  </button>
                  <button className="p-2 bg-b-200 hover:bg-b-300 rounded-lg transition-colors">
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 30% */}
        <div className="col-span-3">
          <div className="bg-white">
            {/* Header */}
            <h2 className="text-xl font-poppins font-semibold text-b-300 mb-6">
              Look deeper in your data
            </h2>

            {/* Quick Commands Placeholder */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="bg-n-40 rounded-lg p-4 h-16 flex items-center justify-center"
                >
                  <span className="text-n-200 text-sm font-poppins font-medium">
                    Quick Command {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;