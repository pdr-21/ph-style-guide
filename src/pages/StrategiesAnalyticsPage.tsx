import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import ChatBubble from '../components/common/ChatBubble';

const StrategiesAnalyticsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Strategies Analytics"
        description="Detailed analytics and insights into your strategies"
        breadcrumbs={["Strategy", "Strategies Analytics"]}
        actions={
          <Button variant="default" size="default" className="gap-2 font-normal">
            <Plus className="h-4 w-4" />
            Create new strategy
          </Button>
        }
      />

      <div className="p-8">
        <p>This is the analytics page for strategies.</p>
      </div>

      <ChatBubble />
    </div>
  );
};

export default StrategiesAnalyticsPage; 