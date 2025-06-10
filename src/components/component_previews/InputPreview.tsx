import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Search, Mail, Lock, Eye, EyeOff, User, Phone, Calendar, DollarSign } from 'lucide-react';

const InputPreview: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    search: '',
    phone: '',
    number: '',
    date: '',
    currency: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Input Component</h1>
          <p className="text-gray-600">ShadCN input component integrated with our design system</p>
        </div>

        {/* Basic Variants */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Input 
                  placeholder="Default input" 
                  value={formData.text}
                  onChange={(e) => handleInputChange('text', e.target.value)}
                />
                <div className="text-xs text-gray-600">
                  <div className="font-medium">Default</div>
                  <div className="font-mono">variant="default"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Input 
                  variant="error" 
                  placeholder="Error state input"
                  defaultValue="Invalid input"
                />
                <div className="text-xs text-gray-600">
                  <div className="font-medium">Error</div>
                  <div className="font-mono">variant="error"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Sizes</h2>
            <div className="space-y-4">
              <div className="space-y-3">
                <Input 
                  size="sm" 
                  placeholder="Small input"
                />
                <div className="text-xs text-gray-600">
                  <div className="font-medium">Small</div>
                  <div className="font-mono">size="sm"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Input 
                  size="default" 
                  placeholder="Default input"
                />
                <div className="text-xs text-gray-600">
                  <div className="font-medium">Default</div>
                  <div className="font-mono">size="default"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Input 
                  size="lg" 
                  placeholder="Large input"
                />
                <div className="text-xs text-gray-600">
                  <div className="font-medium">Large</div>
                  <div className="font-mono">size="lg"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Types */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Input Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Text Input</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your name"
                    value={formData.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Input</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password Input</label>
                  <Input 
                    type="password" 
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Input</label>
                  <Input 
                    type="search" 
                    placeholder="Search..."
                    value={formData.search}
                    onChange={(e) => handleInputChange('search', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Input</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number Input</label>
                  <Input 
                    type="number" 
                    placeholder="Enter a number"
                    value={formData.number}
                    onChange={(e) => handleInputChange('number', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Input</label>
                  <Input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL Input</label>
                  <Input 
                    type="url" 
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">With Icons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search with Icon</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                    <Input 
                      type="search" 
                      placeholder="Search..."
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email with Icon</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">User with Icon</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                    <Input 
                      type="text" 
                      placeholder="Enter your name"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password with Toggle</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-n-200 hover:text-n-400 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone with Icon</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency with Icon</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                    <Input 
                      type="number" 
                      placeholder="0.00"
                      className="pl-10"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* States */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Normal State</label>
                  <Input placeholder="Normal input" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Focused State</label>
                  <Input placeholder="Click to focus" autoFocus />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Disabled State</label>
                  <Input placeholder="Disabled input" disabled />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-red-700 mb-2">Error State</label>
                  <Input 
                    variant="error" 
                    placeholder="Error input"
                    defaultValue="Invalid value"
                  />
                  <p className="text-xs text-r-400 mt-1">This field contains an error</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Examples */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Form Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Login Form */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-4">Login Form</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                      <Input 
                        type="email" 
                        placeholder="Enter your email"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                      <Input 
                        type="password" 
                        placeholder="Enter your password"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-4">Contact Form</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                      <Input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Input Types</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Text:</strong> General text input, names, titles</p>
                <p><strong>Email:</strong> Email addresses with validation</p>
                <p><strong>Password:</strong> Secure password entry</p>
                <p><strong>Search:</strong> Search queries and filters</p>
                <p><strong>Tel:</strong> Phone numbers and contact info</p>
                <p><strong>Number:</strong> Numeric values and quantities</p>
                <p><strong>Date:</strong> Date selection and scheduling</p>
                <p><strong>URL:</strong> Website addresses and links</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Best Practices</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Labels:</strong> Always provide clear, descriptive labels</p>
                <p><strong>Placeholders:</strong> Use helpful placeholder text</p>
                <p><strong>Validation:</strong> Show error states with helpful messages</p>
                <p><strong>Icons:</strong> Use relevant icons to improve usability</p>
                <p><strong>Accessibility:</strong> Ensure proper focus management</p>
                <p><strong>Responsive:</strong> Test across different screen sizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPreview;