import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Components from './pages/Components';
import StyleGuide from './pages/StyleGuide';
import { Environment, AppPage } from './types';

function App() {
  const [currentView, setCurrentView] = useState<Environment>('App');
  const [activeAppPage, setActiveAppPage] = useState<AppPage>('dashboard');
  const [activeStyleGuideSection, setActiveStyleGuideSection] = useState('colors');
  const [activeComponentSection, setActiveComponentSection] = useState('buttons');

  const handleViewChange = (view: Environment, subView?: string) => {
    setCurrentView(view);
    if (view === 'App' && subView) {
      // Check if subView is a valid AppPage
      const validAppPages: AppPage[] = ['dashboard', 'contacts', 'calendar', 'reports', 'documents', 'email', 'calls', 'settings'];
      if (validAppPages.includes(subView as AppPage)) {
        setActiveAppPage(subView as AppPage);
      } else {
        setActiveAppPage('dashboard');
      }
    } else if (view === 'App') {
      setActiveAppPage('dashboard');
    } else if (view === 'Style Guide' && subView) {
      setActiveStyleGuideSection(subView);
    } else if (view === 'Components' && subView) {
      setActiveComponentSection(subView);
    }
  };

  // Placeholder components for app pages
  const ContactsPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Contacts</h1>
      <p className="text-gray-600">Contacts page content will be implemented here.</p>
    </div>
  );

  const CalendarPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Calendar</h1>
      <p className="text-gray-600">Calendar page content will be implemented here.</p>
    </div>
  );

  const ReportsPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Reports</h1>
      <p className="text-gray-600">Reports page content will be implemented here.</p>
    </div>
  );

  const DocumentsPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Documents</h1>
      <p className="text-gray-600">Documents page content will be implemented here.</p>
    </div>
  );

  const EmailPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Email</h1>
      <p className="text-gray-600">Email page content will be implemented here.</p>
    </div>
  );

  const CallsPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Calls</h1>
      <p className="text-gray-600">Calls page content will be implemented here.</p>
    </div>
  );

  const SettingsPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h1>
      <p className="text-gray-600">Settings page content will be implemented here.</p>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'App':
        switch (activeAppPage) {
          case 'dashboard':
            return <Dashboard />;
          case 'contacts':
            return <ContactsPage />;
          case 'calendar':
            return <CalendarPage />;
          case 'reports':
            return <ReportsPage />;
          case 'documents':
            return <DocumentsPage />;
          case 'email':
            return <EmailPage />;
          case 'calls':
            return <CallsPage />;
          case 'settings':
            return <SettingsPage />;
          default:
            return <Dashboard />;
        }
      case 'Components':
        return <Components activeComponentSection={activeComponentSection} />;
      case 'Style Guide':
        return <StyleGuide activeSection={activeStyleGuideSection} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      onViewChange={handleViewChange}
      activeAppPage={activeAppPage}
      activeStyleGuideSection={activeStyleGuideSection}
      activeComponentSection={activeComponentSection}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;