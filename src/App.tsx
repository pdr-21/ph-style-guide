import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Components from './pages/Components';
import StyleGuide from './pages/StyleGuide';
import ContactsPage from './pages/ContactsPage';
import CalendarPage from './pages/CalendarPage';
import ReportsPage from './pages/ReportsPage';
import DocumentsPage from './pages/DocumentsPage';
import EmailPage from './pages/EmailPage';
import CallsPage from './pages/CallsPage';
import SettingsPage from './pages/SettingsPage';
import ProjectsPage from './pages/ProjectsPage';
import ChatPage from './pages/ChatPage';
import { Environment, AppPage } from './types';

function App() {
  const [currentView, setCurrentView] = useState<Environment>('App');
  const [activeAppPage, setActiveAppPage] = useState<AppPage>('dashboard');
  const [activeStyleGuideSection, setActiveStyleGuideSection] = useState('colors');
  const [activeComponentSection, setActiveComponentSection] = useState('buttons');
  const [initialChatMessage, setInitialChatMessage] = useState<string>('');

  const handleViewChange = (view: Environment, subView?: string) => {
    setCurrentView(view);
    if (view === 'App' && subView) {
      // Check if subView is a valid AppPage
      const validAppPages: AppPage[] = ['dashboard', 'contacts', 'calendar', 'reports', 'documents', 'email', 'calls', 'chat', 'projects', 'settings'];
      if (validAppPages.includes(subView as AppPage)) {
        setActiveAppPage(subView as AppPage);
        // Clear initial chat message when navigating directly to chat
        if (subView === 'chat') {
          setInitialChatMessage('');
        }
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

  const handleSendMessageAndNavigate = (message: string) => {
    setInitialChatMessage(message);
    setCurrentView('App');
    setActiveAppPage('chat');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'App':
        switch (activeAppPage) {
          case 'dashboard':
            return <Dashboard onSendMessageAndNavigate={handleSendMessageAndNavigate} />;
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
          case 'chat':
            return <ChatPage initialChatMessage={initialChatMessage} />;
          case 'projects':
            return <ProjectsPage onSendMessageAndNavigate={handleSendMessageAndNavigate} />;
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