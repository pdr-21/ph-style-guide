import React, { useState, useEffect } from 'react';
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
import { Environment, AppPage } from './types';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [currentView, setCurrentView] = useState<Environment>('App');
  const [activeAppPage, setActiveAppPage] = useState<AppPage>('dashboard');
  const [activeStyleGuideSection, setActiveStyleGuideSection] = useState('colors');
  const [activeComponentSection, setActiveComponentSection] = useState('buttons');

  const location = useLocation();
  const navigate = useNavigate();

  const handleViewChange = (view: Environment, subView?: string) => {
    setCurrentView(view);

    if (view === 'App') {
      const appPathMap: Record<AppPage, string> = {
        dashboard: '/',
        contacts: '/contacts',
        calendar: '/calendar',
        reports: '/reports',
        documents: '/documents',
        email: '/email',
        calls: '/calls',
        projects: '/projects',
        settings: '/settings'
      };

      const target = subView && appPathMap[subView as AppPage] ? appPathMap[subView as AppPage] : '/';
      navigate(target);
      const nextPage: AppPage = subView && appPathMap[subView as AppPage] ? (subView as AppPage) : 'dashboard';
      setActiveAppPage(nextPage);
    } else if (view === 'Style Guide') {
      const section = subView || 'colors';
      navigate(`/style-guide/${section}`);
      setActiveStyleGuideSection(section);
    } else if (view === 'Components') {
      const section = subView || 'buttons';
      navigate(`/components/${section}`);
      setActiveComponentSection(section);
    }
  };

  // Sync component state with URL (e.g., when user navigates via browser buttons or direct link)
  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/style-guide')) {
      setCurrentView('Style Guide');
      const [, , section = 'colors'] = path.split('/');
      setActiveStyleGuideSection(section);
    } else if (path.startsWith('/components')) {
      setCurrentView('Components');
      const [, , section = 'buttons'] = path.split('/');
      setActiveComponentSection(section);
    } else {
      // Default to App environment
      setCurrentView('App');
      const pagePath = path === '/' ? 'dashboard' : path.replace(/^\//, '') as AppPage;
      setActiveAppPage(pagePath);
    }
  }, [location.pathname]);

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
          case 'projects':
            // Placeholder for external link - will be handled later
            return <Dashboard />; // Temporarily show dashboard
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