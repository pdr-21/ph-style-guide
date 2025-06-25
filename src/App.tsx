import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import { StrategiesProvider } from './context/StrategiesContext';
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
import StrategiesPage from './pages/StrategiesPage';
import StrategiesListPage from './pages/StrategiesListPage';
import StrategiesAnalyticsPage from './pages/StrategiesAnalyticsPage';
import NewStrategyPage from './pages/NewStrategyPage';
import { Environment, AppPage } from './types';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

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
        strategies: '/strategies',
        'strategies/list': '/strategies/list',
        'strategies/analytics': '/strategies/analytics',
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

  return (
    <StrategiesProvider>
      <Layout 
        currentView={currentView} 
        onViewChange={handleViewChange}
        activeAppPage={activeAppPage}
        activeStyleGuideSection={activeStyleGuideSection}
        activeComponentSection={activeComponentSection}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/calls" element={<CallsPage />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/strategies/list" element={<StrategiesListPage />} />
          <Route path="/strategies/analytics" element={<StrategiesAnalyticsPage />} />
          <Route path="/strategies/new" element={<NewStrategyPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/style-guide/:section" element={<StyleGuide activeSection={activeStyleGuideSection} />} />
          <Route path="/components/:section" element={<Components activeComponentSection={activeComponentSection} />} />
        </Routes>
      </Layout>
    </StrategiesProvider>
  );
}

export default App;