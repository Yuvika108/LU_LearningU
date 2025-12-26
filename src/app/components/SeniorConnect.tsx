import { useState } from 'react';
import { MessageSquare, Send, User, Clock, Search } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';

interface SeniorConnectProps {
  userName: string;
}

export default function SeniorConnect({ userName }: SeniorConnectProps) {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const seniors = [
    {
      id: 1,
      name: 'Rahul Sharma',
      year: '4th Year',
      branch: 'Computer Science',
      expertise: ['DSA', 'Placements', 'Web Dev'],
      online: true,
      lastMessage: 'Sure, I can help you with that!',
      unread: 2,
    },
    {
      id: 2,
      name: 'Priya Singh',
      year: '3rd Year',
      branch: 'Electronics',
      expertise: ['VLSI', 'Arduino', 'Embedded Systems'],
      online: true,
      lastMessage: 'Check out these resources',
      unread: 0,
    },
    {
      id: 3,
      name: 'Amit Kumar',
      year: '4th Year',
      branch: 'Computer Science',
      expertise: ['AI/ML', 'Python', 'Research'],
      online: false,
      lastMessage: 'Thanks for asking!',
      unread: 0,
    },
    {
      id: 4,
      name: 'Neha Gupta',
      year: '3rd Year',
      branch: 'Mechanical',
      expertise: ['CAD', 'Manufacturing', 'Projects'],
      online: true,
      lastMessage: 'Good luck with your exam!',
      unread: 1,
    },
  ];

  const conversations = [
    {
      id: 1,
      messages: [
        { sender: 'Rahul Sharma', content: 'Hey! How can I help you?', time: '10:30 AM', isMe: false },
        { sender: userName, content: 'Hi! I need guidance on DSA preparation', time: '10:32 AM', isMe: true },
        { sender: 'Rahul Sharma', content: 'Sure, I can help you with that! Start with arrays and strings first.', time: '10:35 AM', isMe: false },
        { sender: userName, content: 'Which resources would you recommend?', time: '10:36 AM', isMe: true },
        { sender: 'Rahul Sharma', content: 'I highly recommend LeetCode for practice and Abdul Bari\'s videos for theory.', time: '10:38 AM', isMe: false },
      ],
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic
      setMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Senior Connect</h1>
        <p className="text-slate-600">Connect with seniors for guidance and mentorship</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Seniors List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search seniors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="space-y-2">
            {seniors.map((senior) => (
              <Card
                key={senior.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedChat === senior.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'hover:bg-slate-50'
                }`}
                onClick={() => setSelectedChat(senior.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                      {senior.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    {senior.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-slate-900 truncate">{senior.name}</h3>
                      {senior.unread > 0 && (
                        <Badge className="bg-blue-600 text-white">{senior.unread}</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mb-1">
                      {senior.year} • {senior.branch}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {senior.expertise.slice(0, 2).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-slate-500 truncate">{senior.lastMessage}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2">
          {selectedChat ? (
            <Card className="flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                    {seniors.find(s => s.id === selectedChat)?.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {seniors.find(s => s.id === selectedChat)?.name}
                    </h3>
                    <p className="text-sm text-green-600">
                      {seniors.find(s => s.id === selectedChat)?.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversations[0]?.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${msg.isMe ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`p-3 rounded-lg ${
                          msg.isMe
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-900'
                        }`}
                      >
                        <p>{msg.content}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{msg.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-slate-200">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    className="resize-none"
                    rows={2}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={!message.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="h-[600px] flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Select a conversation
                </h3>
                <p className="text-slate-600">
                  Choose a senior from the list to start chatting
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Tips Card */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <h3 className="font-semibold text-slate-900 mb-3">💡 Tips for effective conversations</h3>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Be specific about your questions and provide context</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Respect seniors' time and be patient for responses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Always thank them for their guidance and help</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
