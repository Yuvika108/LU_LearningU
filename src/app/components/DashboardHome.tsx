import { BookOpen, Users, Award, Code, TrendingUp, Clock, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface DashboardHomeProps {
  userName: string;
}

export default function DashboardHome({ userName }: DashboardHomeProps) {
  const quickStats = [
    { label: 'Study Materials', value: '500+', icon: BookOpen },
    { label: 'Active Seniors', value: '150+', icon: Users },
    { label: 'Alumni Stories', value: '50+', icon: Award },
    { label: 'Skill Resources', value: '200+', icon: Code },
  ];

  const recentActivity = [
    { title: 'Data Structures Notes uploaded', subject: 'CS201', time: '2 hours ago', type: 'notes' },
    { title: 'New lab experiment added', subject: 'EC301', time: '5 hours ago', type: 'lab' },
    { title: 'Senior Q&A session on Placements', subject: 'Career', time: '1 day ago', type: 'discussion' },
    { title: 'Python tutorial series updated', subject: 'Programming', time: '2 days ago', type: 'video' },
  ];

  const upcomingEvents = [
    { title: 'Mock Interview Session', date: 'Jan 15, 2025', category: 'Career' },
    { title: 'Coding Workshop - Advanced DSA', date: 'Jan 18, 2025', category: 'Skills' },
    { title: 'Alumni Talk - Industry Insights', date: 'Jan 22, 2025', category: 'Alumni' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          Welcome back, {userName}! 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          Continue your learning journey with the latest resources and updates
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6 bg-card border-border hover:border-blue-500 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all cursor-pointer border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    {activity.type === 'notes' && <BookOpen className="w-5 h-5 text-white" />}
                    {activity.type === 'lab' && <Code className="w-5 h-5 text-white" />}
                    {activity.type === 'discussion' && <Users className="w-5 h-5 text-white" />}
                    {activity.type === 'video' && <Award className="w-5 h-5 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground mb-1">{activity.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {activity.subject}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Events */}
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-5 rounded-lg bg-muted/50 border border-border hover:border-blue-500 transition-all">
                <h3 className="font-semibold text-foreground mb-3">{event.title}</h3>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    {event.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-muted hover:bg-muted/80 text-foreground border border-border">
            View All Events
          </Button>
        </Card>
      </div>

      {/* Quick Links */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold text-foreground mb-6">Quick Access</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, label: 'Browse Notes', desc: 'Latest study materials' },
            { icon: Users, label: 'Ask Seniors', desc: 'Get guidance now' },
            { icon: Target, label: 'Join Clubs', desc: 'Explore communities' },
            { icon: Code, label: 'Learn Skills', desc: 'Start practicing' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <button 
                key={idx}
                className="p-5 bg-muted/50 hover:bg-muted rounded-lg text-left transition-all border border-border hover:border-blue-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
