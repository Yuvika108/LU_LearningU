import { useState, useEffect } from 'react';
import { Search, FileText, Users, Award, Code, Target, Book, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (section: string) => void;
}

export default function GlobalSearch({ isOpen, onClose, onNavigate }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const searchData = [
    // Study Materials
    { id: 1, title: 'Data Structures Notes', category: 'Study Materials', type: 'Notes', year: '2nd Year', icon: FileText, section: 'materials' },
    { id: 2, title: 'Operating Systems Lab', category: 'Study Materials', type: 'Lab Work', year: '3rd Year', icon: FileText, section: 'materials' },
    { id: 3, title: 'Database Management Systems', category: 'Study Materials', type: 'Notes', year: '3rd Year', icon: FileText, section: 'materials' },
    { id: 4, title: 'Python Programming Tutorial', category: 'Study Materials', type: 'YouTube', year: 'Freshers', icon: FileText, section: 'materials' },
    { id: 5, title: 'Computer Networks Notes', category: 'Study Materials', type: 'Notes', year: '4th Year', icon: FileText, section: 'materials' },
    
    // Seniors
    { id: 6, title: 'Rahul Kumar - Placement Guidance', category: 'Senior Connect', type: 'Mentor', year: '4th Year CSE', icon: Users, section: 'connect' },
    { id: 7, title: 'Priya Singh - Academic Help', category: 'Senior Connect', type: 'Mentor', year: '3rd Year IT', icon: Users, section: 'connect' },
    
    // Clubs
    { id: 8, title: 'CodeX - Coding Club', category: 'College Clubs', type: 'Technical', description: 'Competitive programming', icon: Target, section: 'clubs' },
    { id: 9, title: 'Robotics Club', category: 'College Clubs', type: 'Technical', description: 'Build robots', icon: Target, section: 'clubs' },
    { id: 10, title: 'Photography Club', category: 'College Clubs', type: 'Creative', description: 'Capture moments', icon: Target, section: 'clubs' },
    
    // Alumni
    { id: 11, title: 'Amit Sharma - Google SDE', category: 'Alumni', type: 'Success Story', company: 'Google', icon: Award, section: 'alumni' },
    { id: 12, title: 'Neha Gupta - Microsoft PM', category: 'Alumni', type: 'Success Story', company: 'Microsoft', icon: Award, section: 'alumni' },
    
    // Skills
    { id: 13, title: 'Web Development Roadmap', category: 'Skills Hub', type: 'Tutorial', skill: 'Web Dev', icon: Code, section: 'skills' },
    { id: 14, title: 'Data Science Learning Path', category: 'Skills Hub', type: 'Tutorial', skill: 'Data Science', icon: Code, section: 'skills' },
    { id: 15, title: 'Interview Preparation Guide', category: 'Skills Hub', type: 'Resource', skill: 'Interview Prep', icon: Code, section: 'skills' },
  ];

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleResultClick = (result: any) => {
    if (onNavigate) {
      onNavigate(result.section);
    }
    onClose();
    setQuery('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <DialogTitle className="text-2xl">Search LU EduHub</DialogTitle>
          </div>
        </DialogHeader>

        <div className="p-6 pt-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for notes, seniors, clubs, alumni, skills..."
              className="pl-11 pr-10 h-12 text-base bg-muted/50 border-border"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <ScrollArea className="h-[400px]">
            {query && results.length === 0 && (
              <div className="text-center py-12">
                <Book className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">No results found</p>
                <p className="text-muted-foreground">Try searching for something else</p>
              </div>
            )}

            {!query && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">POPULAR SEARCHES</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Placement Tips', 'CodeX Club', 'Web Development', 'Alumni Stories'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-sm text-foreground transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">QUICK ACCESS</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Study Materials', icon: FileText, section: 'materials' },
                      { label: 'Senior Connect', icon: Users, section: 'connect' },
                      { label: 'College Clubs', icon: Target, section: 'clubs' },
                      { label: 'Skills Hub', icon: Code, section: 'skills' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.label}
                          onClick={() => {
                            if (onNavigate) onNavigate(item.section);
                            onClose();
                          }}
                          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
                        >
                          <Icon className="w-5 h-5 text-muted-foreground" />
                          <span className="font-medium text-foreground">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {query && results.length > 0 && (
              <div className="space-y-2">
                {results.map((result) => {
                  const Icon = result.icon;
                  return (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors text-left group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {result.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 items-center">
                          <Badge variant="secondary" className="text-xs">
                            {result.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{result.type}</span>
                          {result.year && (
                            <>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{result.year}</span>
                            </>
                          )}
                          {result.company && (
                            <>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{result.company}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
