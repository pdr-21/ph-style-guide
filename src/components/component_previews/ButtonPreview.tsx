import React from 'react';
import { Button } from '../ui/button';
import { Download, Mail, Plus, Settings, Trash2 } from 'lucide-react';

const ButtonPreview: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12">
        {/* Variants */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="space-y-3">
                <Button variant="default">Default</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Primary</div>
                  <div className="font-mono">variant="default"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button variant="secondary">Secondary</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Secondary</div>
                  <div className="font-mono">variant="secondary"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button variant="outline">Outline</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Outline</div>
                  <div className="font-mono">variant="outline"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button variant="ghost">Ghost</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Ghost</div>
                  <div className="font-mono">variant="ghost"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button variant="link">Link</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Link</div>
                  <div className="font-mono">variant="link"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button variant="destructive">Destructive</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Destructive</div>
                  <div className="font-mono">variant="destructive"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Sizes</h2>
            <div className="flex flex-wrap items-end gap-4">
              <div className="space-y-3">
                <Button size="sm">Small</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Small</div>
                  <div className="font-mono">size="sm"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button size="default">Default</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Default</div>
                  <div className="font-mono">size="default"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button size="lg">Large</Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Large</div>
                  <div className="font-mono">size="lg"</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">Icon</div>
                  <div className="font-mono">size="icon"</div>
                </div>
              </div>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">With Icons</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Item
              </Button>
              
              <Button variant="secondary">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">States</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-3">
                <Button>Normal</Button>
                <div className="text-xs text-gray-600 text-center">Normal State</div>
              </div>
              
              <div className="space-y-3">
                <Button disabled>Disabled</Button>
                <div className="text-xs text-gray-600 text-center">Disabled State</div>
              </div>
              
              <div className="space-y-3">
                <Button className="opacity-75">Loading</Button>
                <div className="text-xs text-gray-600 text-center">Loading State</div>
              </div>
              
              <div className="space-y-3">
                <Button className="shadow-focus-normal">Focused</Button>
                <div className="text-xs text-gray-600 text-center">Focus State</div>
              </div>
            </div>
          </div>

          {/* Real-world Examples */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Real-world Examples</h2>
            <div className="space-y-6">
              {/* Form Actions */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-4">Form Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-4">Navigation</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost">← Previous</Button>
                  <Button>Next →</Button>
                  <Button variant="link">Skip for now</Button>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-4">Call to Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg">Get Started</Button>
                  <Button variant="secondary" size="lg">Learn More</Button>
                  <Button variant="outline" size="lg">Contact Sales</Button>
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
              <h4 className="text-md font-medium text-gray-700 mb-3">Variant Usage</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Default:</strong> Primary actions, main CTAs</p>
                <p><strong>Secondary:</strong> Supporting actions, alternative CTAs</p>
                <p><strong>Outline:</strong> Secondary actions, form cancellation</p>
                <p><strong>Ghost:</strong> Subtle actions, navigation</p>
                <p><strong>Link:</strong> Text-based actions, inline links</p>
                <p><strong>Destructive:</strong> Delete, remove, dangerous actions</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Size Guidelines</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Small:</strong> Compact interfaces, table actions</p>
                <p><strong>Default:</strong> Standard forms, general use</p>
                <p><strong>Large:</strong> Hero sections, prominent CTAs</p>
                <p><strong>Icon:</strong> Icon-only actions, toolbars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPreview;