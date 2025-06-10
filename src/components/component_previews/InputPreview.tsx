import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Search, Mail, Lock, Eye, EyeOff, User, Phone, Calendar, DollarSign, Check } from 'lucide-react';

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

        {/* Basic States */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Input States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  className="focus:border-b-200"
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  variant="filled"
                />
                
                <Input 
                  label="Label"
                  defaultValue="Filled text"
                  helperText="Helper text"
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  error={true}
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  disabled={true}
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  disabled={true}
                  variant="filled"
                />
                
                <div className="relative">
                  <Input 
                    label="Label"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    className="pr-10"
                  />
                  <Check className="absolute right-3 top-[42px] transform -translate-y-1/2 text-g-300 w-4 h-4" />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                />
                
                <Input 
                  label="Label"
                  defaultValue="Filled text"
                  helperText="Helper text"
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  error={true}
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  disabled={true}
                />
                
                <Input 
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  disabled={true}
                />
                
                <div className="relative">
                  <Input 
                    label="Label"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    className="pr-10"
                  />
                  <Check className="absolute right-3 top-[42px] transform -translate-y-1/2 text-g-300 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Sizes</h2>
            <div className="space-y-6 max-w-md">
              <Input 
                size="sm" 
                label="Small Input"
                placeholder="Small input"
                helperText="This is a small input field"
              />
              
              <Input 
                size="default" 
                label="Default Input"
                placeholder="Default input"
                helperText="This is a default input field"
              />
              
              <Input 
                size="lg" 
                label="Large Input"
                placeholder="Large input"
                helperText="This is a large input field"
              />
            </div>
          </div>

          {/* Input Types */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Input Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Input 
                  type="text" 
                  label="Text Input"
                  placeholder="Enter your name"
                  helperText="Enter your full name"
                  value={formData.text}
                  onChange={(e) => handleInputChange('text', e.target.value)}
                />
                
                <Input 
                  type="email" 
                  label="Email Input"
                  placeholder="Enter your email"
                  helperText="We'll never share your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                
                <Input 
                  type="password" 
                  label="Password Input"
                  placeholder="Enter your password"
                  helperText="Must be at least 8 characters"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                
                <Input 
                  type="search" 
                  label="Search Input"
                  placeholder="Search..."
                  helperText="Search through our database"
                  value={formData.search}
                  onChange={(e) => handleInputChange('search', e.target.value)}
                />
              </div>
              
              <div className="space-y-6">
                <Input 
                  type="tel" 
                  label="Phone Input"
                  placeholder="+1 (555) 123-4567"
                  helperText="Include country code"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
                
                <Input 
                  type="number" 
                  label="Number Input"
                  placeholder="Enter a number"
                  helperText="Only numeric values allowed"
                  value={formData.number}
                  onChange={(e) => handleInputChange('number', e.target.value)}
                />
                
                <Input 
                  type="date"
                  label="Date Input"
                  helperText="Select a date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
                
                <Input 
                  type="url" 
                  label="URL Input"
                  placeholder="https://example.com"
                  helperText="Enter a valid URL"
                />
              </div>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">With Icons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative">
                  <Input 
                    type="search" 
                    label="Search with Icon"
                    placeholder="Search..."
                    helperText="Search through our database"
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                </div>
                
                <div className="relative">
                  <Input 
                    type="email" 
                    label="Email with Icon"
                    placeholder="Enter your email"
                    helperText="We'll never share your email"
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                </div>
                
                <div className="relative">
                  <Input 
                    type="text" 
                    label="User with Icon"
                    placeholder="Enter your name"
                    helperText="Enter your full name"
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"}
                    label="Password with Toggle"
                    placeholder="Enter your password"
                    helperText="Must be at least 8 characters"
                    className="pl-10 pr-10"
                  />
                  <Lock className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[42px] transform -translate-y-1/2 text-n-200 hover:text-n-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="relative">
                  <Input 
                    type="tel" 
                    label="Phone with Icon"
                    placeholder="+1 (555) 123-4567"
                    helperText="Include country code"
                    className="pl-10"
                  />
                  <Phone className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                </div>
                
                <div className="relative">
                  <Input 
                    type="number" 
                    label="Currency with Icon"
                    placeholder="0.00"
                    helperText="Enter amount in USD"
                    className="pl-10"
                    step="0.01"
                  />
                  <DollarSign className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Error and Success States */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Validation States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Input 
                  label="Error State"
                  placeholder="Enter valid email"
                  helperText="Please enter a valid email address"
                  error={true}
                  defaultValue="invalid-email"
                />
                
                <Input 
                  label="Success State"
                  placeholder="Enter your email"
                  helperText="Email address is valid"
                  success={true}
                  defaultValue="user@example.com"
                />
              </div>
              
              <div className="space-y-6">
                <Input 
                  label="Required Field Error"
                  placeholder="This field is required"
                  helperText="This field cannot be empty"
                  error={true}
                />
                
                <div className="relative">
                  <Input 
                    label="Validated Input"
                    placeholder="Enter your username"
                    helperText="Username is available"
                    success={true}
                    defaultValue="john_doe"
                    className="pr-10"
                  />
                  <Check className="absolute right-3 top-[42px] transform -translate-y-1/2 text-g-300 w-4 h-4" />
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
                <h3 className="text-md font-medium text-gray-700 mb-6">Login Form</h3>
                <div className="space-y-6">
                  <div className="relative">
                    <Input 
                      type="email" 
                      label="Email Address"
                      placeholder="Enter your email"
                      helperText="We'll never share your email"
                      className="pl-10"
                    />
                    <Mail className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                  </div>
                  
                  <div className="relative">
                    <Input 
                      type="password" 
                      label="Password"
                      placeholder="Enter your password"
                      helperText="Must be at least 8 characters"
                      className="pl-10"
                    />
                    <Lock className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-6">Contact Form</h3>
                <div className="space-y-6">
                  <div className="relative">
                    <Input 
                      type="text" 
                      label="Full Name"
                      placeholder="Enter your full name"
                      helperText="First and last name"
                      className="pl-10"
                    />
                    <User className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
                  </div>
                  
                  <div className="relative">
                    <Input 
                      type="tel" 
                      label="Phone Number"
                      placeholder="+1 (555) 123-4567"
                      helperText="Include country code"
                      className="pl-10"
                    />
                    <Phone className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4" />
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
              <h4 className="text-md font-medium text-gray-700 mb-3">Input States</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Default:</strong> Standard input state for user interaction</p>
                <p><strong>Focused:</strong> Active state when user clicks or tabs into field</p>
                <p><strong>Filled:</strong> State when input contains user-entered data</p>
                <p><strong>Error:</strong> Invalid input with error message and styling</p>
                <p><strong>Success:</strong> Valid input with confirmation styling</p>
                <p><strong>Disabled:</strong> Non-interactive state for read-only fields</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Best Practices</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Labels:</strong> Always provide clear, descriptive labels</p>
                <p><strong>Helper Text:</strong> Use to provide additional context or instructions</p>
                <p><strong>Validation:</strong> Show error states with helpful, actionable messages</p>
                <p><strong>Icons:</strong> Use relevant icons to improve usability and recognition</p>
                <p><strong>Accessibility:</strong> Ensure proper focus management and screen reader support</p>
                <p><strong>Consistency:</strong> Maintain consistent styling across all form inputs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPreview;