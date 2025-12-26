import { GraduationCap, BookOpen, Users, Award, Code, Search, Upload, Download, Bot, Library, Lightbulb, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ThemeToggle } from './ThemeToggle';

interface HomePageProps {
  onLogin: () => void;
}

export default function HomePage({ onLogin }: HomePageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">LU EduHub</span>
                <p className="text-xs text-muted-foreground">University of Lucknow</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button onClick={onLogin} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Student Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-full mb-6">
              <Library className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Engineering Education Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Your Complete Academic Resource Center
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Access study materials, connect with seniors, join college clubs, and develop your skills - 
              everything you need for academic excellence at University of Lucknow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onLogin} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base px-8">
                Get Started
              </Button>
              <Button onClick={onLogin} size="lg" variant="outline" className="border-border text-base px-8">
                Explore Resources
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { label: 'Study Materials', value: '500+' },
                { label: 'Active Students', value: '2,000+' },
                { label: 'College Clubs', value: '25+' },
                { label: 'Alumni Network', value: '5,000+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources designed specifically for engineering students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Study Materials',
                description: 'Access comprehensive notes, lab manuals, and video tutorials organized by year and subject.',
                features: ['Year-wise Notes', 'Lab Work', 'Video Tutorials']
              },
              {
                icon: Upload,
                title: 'Upload & Share',
                description: 'Seniors can upload study materials and resources. Juniors can download and benefit from them.',
                features: ['Easy Upload', 'Quick Download', 'Organized Library']
              },
              {
                icon: Users,
                title: 'Senior Connect',
                description: 'Chat with seniors for academic guidance, placement tips, and career advice.',
                features: ['Live Chat', 'Mentorship', 'Career Guidance']
              },
              {
                icon: Target,
                title: 'College Clubs',
                description: 'Discover and join technical, cultural, and sports clubs. View members and recruitment info.',
                features: ['25+ Clubs', 'Events & Activities', 'Easy Join Process']
              },
              {
                icon: Award,
                title: 'Alumni Network',
                description: 'Get inspired by success stories of alumni at top companies like Google, Microsoft, and Amazon.',
                features: ['Success Stories', 'Industry Insights', 'Networking']
              },
              {
                icon: Code,
                title: 'Skills Development',
                description: 'Master programming, data science, and other in-demand skills with curated resources.',
                features: ['Tech Tutorials', 'Project Ideas', 'Interview Prep']
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 bg-card border-border hover:border-blue-500 transition-all hover:shadow-lg group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced Tools for Modern Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge features to enhance your learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'AI Assistant',
                description: 'Get instant answers to your questions with our intelligent chatbot. Available 24/7 to help you navigate the platform and find resources.',
              },
              {
                icon: Search,
                title: 'Smart Search',
                description: 'Powerful search engine to quickly find notes, seniors, clubs, and resources across the entire platform with instant results.',
              },
              {
                icon: Lightbulb,
                title: 'Personalized',
                description: 'Smart recommendations based on your year, branch, and interests. Get content that matters most to you.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 border-0">
            <div className="p-12 text-center">
              <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Excel in Your Engineering Journey?
              </h2>
              <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                Join thousands of LU students already using EduHub for academic success
              </p>
              <Button onClick={onLogin} size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                Access Student Portal
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-foreground">LU EduHub</span>
                <p className="text-xs text-muted-foreground">Engineering Education Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 University of Lucknow. Built for students, by students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
