import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface AIChatbotProps {
  onClose: () => void;
}

export default function AIChatbot({ onClose }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your LU EduHub AI assistant. I can help you with:\n\n• Finding study materials\n• Connecting with seniors\n• Information about clubs\n• Career guidance\n• General queries\n\nHow can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('notes') || lowerQuery.includes('study material')) {
      return 'You can find study materials in the "Study Materials" section! We have:\n\n📚 Notes organized by year (Freshers to 4th Year)\n🔬 Lab work and experiments\n📺 YouTube channel recommendations\n\nNavigate to Study Materials from the dashboard to explore.';
    } else if (lowerQuery.includes('senior') || lowerQuery.includes('mentor')) {
      return 'Great! You can connect with seniors through our "Senior Connect" feature:\n\n💬 Real-time chat with experienced students\n🎯 Get guidance on academics and placements\n📈 Career advice from those who\'ve been there\n\nCheck out the Senior Connect section!';
    } else if (lowerQuery.includes('club')) {
      return 'We have 25+ active college clubs! Visit the "College Clubs" section to:\n\n🎯 Explore technical, cultural, and sports clubs\n👥 View club members and leadership\n📋 Check recruitment requirements\n📅 See upcoming events\n\nFind your passion and join today!';
    } else if (lowerQuery.includes('placement') || lowerQuery.includes('job')) {
      return 'For placement assistance:\n\n1. Check the Alumni section for success stories\n2. Connect with seniors who got placed\n3. Visit Skills Hub for interview prep\n4. Join CodeX or other technical clubs\n\nOur alumni are at Google, Microsoft, Amazon, and more!';
    } else if (lowerQuery.includes('skill') || lowerQuery.includes('learn')) {
      return 'Visit the Skills Hub section for:\n\n💻 Programming tutorials\n📊 Data Science resources\n🔧 DevOps learning paths\n🎨 Web Development guides\n📱 Mobile App Development\n\nAll resources are curated specifically for engineering students!';
    } else if (lowerQuery.includes('upload') || lowerQuery.includes('download')) {
      return 'Document Upload/Download:\n\n📤 Seniors can upload study materials, notes, and lab reports\n📥 Juniors can download and access all resources\n📁 All files are organized by subject and year\n\nGo to Study Materials section to upload or download documents!';
    } else {
      return 'I\'m here to help! You can ask me about:\n\n• Study materials and notes\n• Connecting with seniors\n• College clubs and activities\n• Placements and career guidance\n• Skills and learning resources\n• Upload/download documents\n\nWhat would you like to know?';
    }
  };

  if (isMinimized) {
    return (
      <Card className="fixed bottom-4 right-4 z-50 w-80 bg-card border-border shadow-xl">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground">AI Assistant</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(false)}
              className="h-8 w-8"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-96 h-[600px] flex flex-col bg-card border-border shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-foreground">AI Assistant</p>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(true)}
            className="h-8 w-8"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'bot'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                    : 'bg-gradient-to-br from-green-500 to-emerald-600'
                }`}
              >
                {message.type === 'bot' ? (
                  <Bot className="w-4 h-4 text-white" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`flex-1 ${message.type === 'user' ? 'flex justify-end' : ''}`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-2xl max-w-[80%] ${
                    message.type === 'bot'
                      ? 'bg-muted text-foreground'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.type === 'bot' ? 'text-muted-foreground' : 'text-blue-100'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border bg-muted/30">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 bg-background border-border"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          AI responses are simulated for demonstration
        </p>
      </div>
    </Card>
  );
}
