import React, { useState } from 'react';
import { Dropdown } from '../ui/dropdown';
import { Search, Mail, Lock, User, Phone, Calendar, DollarSign, Check, Globe, Building, MapPin } from 'lucide-react';

const DropdownPreview: React.FC = () => {
  const [formData, setFormData] = useState({
    country: '',
    department: '',
    priority: '',
    status: '',
    category: '',
    language: '',
    timezone: '',
    currency: ''
  });

  const handleDropdownChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Sample data for different dropdown types
  const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' },
  ];

  const departmentOptions = [
    { label: 'Engineering', value: 'engineering' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
    { label: 'Human Resources', value: 'hr' },
    { label: 'Finance', value: 'finance' },
    { label: 'Customer Support', value: 'support' },
  ];

  const priorityOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
    { label: 'Critical', value: 'critical' },
  ];

  const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
    { label: 'Suspended', value: 'suspended' },
  ];

  const categoryOptions = [
    { label: 'Bug Report', value: 'bug' },
    { label: 'Feature Request', value: 'feature' },
    { label: 'General Inquiry', value: 'inquiry' },
    { label: 'Technical Support', value: 'support' },
    { label: 'Billing Question', value: 'billing' },
  ];

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Japanese', value: 'ja' },
  ];

  const timezoneOptions = [
    { label: 'UTC-8 (Pacific)', value: 'pst' },
    { label: 'UTC-5 (Eastern)', value: 'est' },
    { label: 'UTC+0 (GMT)', value: 'gmt' },
    { label: 'UTC+1 (CET)', value: 'cet' },
    { label: 'UTC+9 (JST)', value: 'jst' },
  ];

  const currencyOptions = [
    { label: 'USD - US Dollar', value: 'usd' },
    { label: 'EUR - Euro', value: 'eur' },
    { label: 'GBP - British Pound', value: 'gbp' },
    { label: 'JPY - Japanese Yen', value: 'jpy' },
    { label: 'CAD - Canadian Dollar', value: 'cad' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Dropdown Component</h1>
          <p className="text-gray-600">Custom dropdown component integrated with our design system</p>
        </div>

        {/* Basic States */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Dropdown States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <Dropdown 
                  label="Default State"
                  placeholder="Select an option"
                  helperText="Choose from the available options"
                  options={countryOptions}
                  value={formData.country}
                  onChange={(value) => handleDropdownChange('country', value)}
                />
                
                <Dropdown 
                  label="With Selection"
                  placeholder="Select an option"
                  helperText="An option has been selected"
                  options={departmentOptions}
                  value="engineering"
                />
                
                <Dropdown 
                  label="Error State"
                  placeholder="Select an option"
                  helperText="Please select a valid option"
                  options={priorityOptions}
                  error={true}
                />
                
                <Dropdown 
                  label="Success State"
                  placeholder="Select an option"
                  helperText="Selection is valid"
                  options={statusOptions}
                  value="active"
                  success={true}
                />
                
                <Dropdown 
                  label="Disabled State"
                  placeholder="Select an option"
                  helperText="This dropdown is disabled"
                  options={categoryOptions}
                  disabled={true}
                />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <Dropdown 
                  label="Filled Variant"
                  placeholder="Select an option"
                  helperText="Filled background variant"
                  options={languageOptions}
                  variant="filled"
                  value={formData.language}
                  onChange={(value) => handleDropdownChange('language', value)}
                />
                
                <Dropdown 
                  label="Long Options List"
                  placeholder="Select timezone"
                  helperText="Dropdown with scrollable options"
                  options={[
                    ...timezoneOptions,
                    { label: 'UTC+2 (EET)', value: 'eet' },
                    { label: 'UTC+3 (MSK)', value: 'msk' },
                    { label: 'UTC+5:30 (IST)', value: 'ist' },
                    { label: 'UTC+8 (CST)', value: 'cst' },
                    { label: 'UTC+10 (AEST)', value: 'aest' },
                    { label: 'UTC-7 (MST)', value: 'mst' },
                    { label: 'UTC-6 (CST)', value: 'cst-us' },
                  ]}
                  value={formData.timezone}
                  onChange={(value) => handleDropdownChange('timezone', value)}
                />
                
                <Dropdown 
                  label="Currency Selection"
                  placeholder="Select currency"
                  helperText="Choose your preferred currency"
                  options={currencyOptions}
                  value={formData.currency}
                  onChange={(value) => handleDropdownChange('currency', value)}
                />
                
                <Dropdown 
                  label="No Helper Text"
                  placeholder="Select an option"
                  options={priorityOptions}
                />
                
                <Dropdown 
                  label="Minimal Options"
                  placeholder="Yes or No"
                  helperText="Simple binary choice"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Sizes</h2>
            <div className="space-y-6 max-w-md">
              <Dropdown 
                size="sm" 
                label="Small Dropdown"
                placeholder="Small dropdown"
                helperText="This is a small dropdown field"
                options={priorityOptions}
              />
              
              <Dropdown 
                size="default" 
                label="Default Dropdown"
                placeholder="Default dropdown"
                helperText="This is a default dropdown field"
                options={statusOptions}
              />
              
              <Dropdown 
                size="lg" 
                label="Large Dropdown"
                placeholder="Large dropdown"
                helperText="This is a large dropdown field"
                options={departmentOptions}
              />
            </div>
          </div>

          {/* With Icons Context */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Contextual Usage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative">
                  <Globe className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4 z-10" />
                  <Dropdown 
                    label="Country with Icon"
                    placeholder="Select country"
                    helperText="Choose your country"
                    options={countryOptions}
                    className="pl-10"
                  />
                </div>
                
                <div className="relative">
                  <Building className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4 z-10" />
                  <Dropdown 
                    label="Department with Icon"
                    placeholder="Select department"
                    helperText="Choose your department"
                    options={departmentOptions}
                    className="pl-10"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-[42px] transform -translate-y-1/2 text-n-200 w-4 h-4 z-10" />
                  <Dropdown 
                    label="Location with Icon"
                    placeholder="Select location"
                    helperText="Choose your location"
                    options={[
                      { label: 'New York, NY', value: 'ny' },
                      { label: 'Los Angeles, CA', value: 'la' },
                      { label: 'Chicago, IL', value: 'chi' },
                      { label: 'Houston, TX', value: 'hou' },
                      { label: 'Phoenix, AZ', value: 'phx' },
                    ]}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <Dropdown 
                  label="Priority Level"
                  placeholder="Select priority"
                  helperText="Set the priority level"
                  options={priorityOptions}
                  value="high"
                  error={false}
                />
                
                <Dropdown 
                  label="Account Status"
                  placeholder="Select status"
                  helperText="Current account status"
                  options={statusOptions}
                  value="active"
                  success={true}
                />
                
                <Dropdown 
                  label="Support Category"
                  placeholder="Select category"
                  helperText="Choose the type of support needed"
                  options={categoryOptions}
                />
              </div>
            </div>
          </div>

          {/* Form Examples */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Form Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User Profile Form */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-6">User Profile Settings</h3>
                <div className="space-y-6">
                  <Dropdown 
                    label="Country"
                    placeholder="Select your country"
                    helperText="This affects your timezone and currency"
                    options={countryOptions}
                    value={formData.country}
                    onChange={(value) => handleDropdownChange('country', value)}
                  />
                  
                  <Dropdown 
                    label="Language"
                    placeholder="Select language"
                    helperText="Choose your preferred language"
                    options={languageOptions}
                    value={formData.language}
                    onChange={(value) => handleDropdownChange('language', value)}
                  />
                  
                  <Dropdown 
                    label="Timezone"
                    placeholder="Select timezone"
                    helperText="Used for scheduling and notifications"
                    options={timezoneOptions}
                    value={formData.timezone}
                    onChange={(value) => handleDropdownChange('timezone', value)}
                  />
                </div>
              </div>

              {/* Support Ticket Form */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-6">Support Ticket</h3>
                <div className="space-y-6">
                  <Dropdown 
                    label="Category"
                    placeholder="Select category"
                    helperText="Choose the type of issue"
                    options={categoryOptions}
                    value={formData.category}
                    onChange={(value) => handleDropdownChange('category', value)}
                  />
                  
                  <Dropdown 
                    label="Priority"
                    placeholder="Select priority"
                    helperText="How urgent is this issue?"
                    options={priorityOptions}
                    value={formData.priority}
                    onChange={(value) => handleDropdownChange('priority', value)}
                  />
                  
                  <Dropdown 
                    label="Department"
                    placeholder="Select department"
                    helperText="Which team should handle this?"
                    options={departmentOptions}
                    value={formData.department}
                    onChange={(value) => handleDropdownChange('department', value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Interactive Demo</h2>
            <p className="text-sm text-gray-600 mb-4">
              Try interacting with these dropdowns using keyboard navigation (Tab, Enter, Arrow keys, Escape):
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
              <Dropdown 
                label="Keyboard Navigation"
                placeholder="Use Tab to focus"
                helperText="Try Enter, Arrow keys, Escape"
                options={priorityOptions}
              />
              
              <Dropdown 
                label="Click to Open"
                placeholder="Click to open menu"
                helperText="Click outside to close"
                options={statusOptions}
              />
              
              <Dropdown 
                label="Search & Select"
                placeholder="Type to filter (future)"
                helperText="Full keyboard support"
                options={departmentOptions}
              />
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Dropdown States</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Default:</strong> Standard dropdown state for user interaction</p>
                <p><strong>Focused:</strong> Active state when user clicks or tabs into dropdown</p>
                <p><strong>Open:</strong> Expanded state showing available options</p>
                <p><strong>Selected:</strong> State when an option has been chosen</p>
                <p><strong>Error:</strong> Invalid selection with error message and styling</p>
                <p><strong>Success:</strong> Valid selection with confirmation styling</p>
                <p><strong>Disabled:</strong> Non-interactive state for read-only fields</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Best Practices</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Labels:</strong> Always provide clear, descriptive labels</p>
                <p><strong>Helper Text:</strong> Use to provide additional context or instructions</p>
                <p><strong>Options:</strong> Keep option labels concise and descriptive</p>
                <p><strong>Validation:</strong> Show error states with helpful, actionable messages</p>
                <p><strong>Keyboard Navigation:</strong> Support full keyboard accessibility</p>
                <p><strong>Consistency:</strong> Maintain consistent styling across all dropdowns</p>
                <p><strong>Performance:</strong> Consider virtualization for very long option lists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownPreview;