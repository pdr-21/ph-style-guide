import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import StrategiesListTableFrame from '../components/strategies/StrategiesListTableFrame';
import ChatBubble from '../components/common/ChatBubble';

const StrategiesListPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Strategies List"
        description="Browse and manage your strategy templates"
        breadcrumbs={["Strategy", "Strategies List"]}
        actions={
          <Button variant="default" size="default" className="gap-2 font-normal">
            <Plus className="h-4 w-4" />
            Create new strategy
          </Button>
        }
      />

      <div className="p-6">
        <StrategiesListTableFrame />
      </div>

      <ChatBubble />
    </div>
  );
};

export default StrategiesListPage; 