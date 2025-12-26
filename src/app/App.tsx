import { useState } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './providers/ThemeProvider';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'dashboard'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCurrentView('home');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {currentView === 'home' && (
          <HomePage onLogin={() => setCurrentView('login')} />
        )}
        {currentView === 'login' && (
          <LoginPage onLogin={handleLogin} onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'dashboard' && isLoggedIn && (
          <Dashboard userName={userName} onLogout={handleLogout} />
        )}
      </div>
      <Toaster />
    </ThemeProvider>
  );
}