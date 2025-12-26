import { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Code, 
  LogOut, 
  GraduationCap, 
  Menu,
  X,
  Home,
  Target,
  Search,
  Bot,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import StudyMaterials from './StudyMaterials';
import SeniorConnect from './SeniorConnect';
import AlumniSection from './AlumniSection';
import SkillsSection from './SkillsSection';
import DashboardHome from './DashboardHome';
import CollegeClubs from './CollegeClubs';
import AIChatbot from './AIChatbot';
import GlobalSearch from './GlobalSearch';

interface DashboardProps {
  userName: string;
  onLogout: () => void;
}

export default function Dashboard({ userName, onLogout }: DashboardProps) {
  const [activeSection, setActiveSection] = useState<'home' | 'materials' | 'connect' | 'alumni' | 'skills' | 'clubs'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState<string[]>(['home']);
  const [historyIndex, setHistoryIndex] = useState(0);

  const menuItems = [
    { id: 'home' as const, label: 'Dashboard', icon: Home },
    { id: 'materials' as const, label: 'Study Materials', icon: BookOpen },
    { id: 'connect' as const, label: 'Senior Connect', icon: Users },
    { id: 'clubs' as const, label: 'College Clubs', icon: Target },
    { id: 'alumni' as const, label: 'Alumni', icon: Award },
    { id: 'skills' as const, label: 'Skills Hub', icon: Code },
  ];

  const handleNavigate = (section: string) => {
    setActiveSection(section as any);
    
    // Update navigation history
    const newHistory = navigationHistory.slice(0, historyIndex + 1);
    newHistory.push(section);
    setNavigationHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleSectionChange = (section: typeof activeSection) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    
    // Update navigation history
    const newHistory = navigationHistory.slice(0, historyIndex + 1);
    newHistory.push(section);
    setNavigationHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setActiveSection(navigationHistory[newIndex] as any);
    }
  };

  const goForward = () => {
    if (historyIndex < navigationHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setActiveSection(navigationHistory[newIndex] as any);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-b md:border-r border-border md:min-h-screen">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-foreground">LU EduHub</span>
              <p className="text-xs text-muted-foreground">Student Portal</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block p-4 space-y-2`}>
          <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Welcome back,</p>
            <p className="font-semibold text-foreground">{userName}</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 border-t border-border mt-4 space-y-2">
            <Button
              variant="ghost"
              onClick={() => setSearchOpen(true)}
              className="w-full justify-start"
            >
              <Search className="w-5 h-5 mr-3" />
              Search
            </Button>
            <Button
              variant="ghost"
              onClick={() => setChatbotOpen(true)}
              className="w-full justify-start"
            >
              <Bot className="w-5 h-5 mr-3" />
              AI Assistant
            </Button>
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="text-sm text-muted-foreground flex-1">Theme</span>
              <ThemeToggle />
            </div>
            <Button
              variant="ghost"
              onClick={onLogout}
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {activeSection === 'home' && <DashboardHome userName={userName} />}
        {activeSection === 'materials' && <StudyMaterials />}
        {activeSection === 'connect' && <SeniorConnect userName={userName} />}
        {activeSection === 'clubs' && <CollegeClubs />}
        {activeSection === 'alumni' && <AlumniSection />}
        {activeSection === 'skills' && <SkillsSection />}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-40">
        <Button
          size="icon"
          onClick={() => setSearchOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
          title="Search"
        >
          <Search className="w-6 h-6" />
        </Button>
        <Button
          size="icon"
          onClick={() => setChatbotOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
          title="AI Assistant"
        >
          <Bot className="w-6 h-6" />
        </Button>
      </div>

      {/* AI Chatbot */}
      {chatbotOpen && <AIChatbot onClose={() => setChatbotOpen(false)} />}

      {/* Global Search */}
      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={handleNavigate} />

      {/* Navigation Buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-40">
        <Button
          size="icon"
          onClick={goBack}
          disabled={historyIndex === 0}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          title="Go Back"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          size="icon"
          onClick={goForward}
          disabled={historyIndex === navigationHistory.length - 1}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          title="Go Forward"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}