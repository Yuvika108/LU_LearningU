import { useState } from 'react';
import { Users, Calendar, Trophy, Music, Code, Palette, Camera, Mic, Gamepad2, FlaskConical, Globe, BookOpen, Search, UserPlus, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';

export default function CollegeClubs() {
  const [selectedClub, setSelectedClub] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const clubs = [
    {
      id: 1,
      name: 'CodeX - Coding Club',
      category: 'technical',
      description: 'Premier coding club focusing on competitive programming, hackathons, and software development',
      icon: Code,
      color: 'from-blue-600 to-purple-600',
      members: 156,
      established: '2015',
      requirements: {
        skills: ['Programming basics', 'Problem-solving'],
        year: 'Open to all years',
        interview: 'Coding test + Interview',
      },
      activities: ['Weekly coding contests', 'Hackathons', 'Tech workshops', 'Open source contributions'],
      achievements: ['Winner - Smart India Hackathon 2024', '50+ placements in top companies', 'Google Summer of Code selections'],
      upcomingEvents: [
        { name: 'CodeX Challenge', date: 'Jan 20, 2025' },
        { name: 'Web Dev Workshop', date: 'Jan 25, 2025' },
      ],
      leads: [
        { name: 'Rahul Kumar', role: 'President', year: '4th Year CSE' },
        { name: 'Priya Singh', role: 'Vice President', year: '3rd Year IT' },
        { name: 'Amit Sharma', role: 'Tech Lead', year: '4th Year CSE' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
    {
      id: 2,
      name: 'Robotics Club',
      category: 'technical',
      description: 'Build robots, participate in competitions, and explore automation and AI',
      icon: FlaskConical,
      color: 'from-purple-600 to-pink-600',
      members: 89,
      established: '2017',
      requirements: {
        skills: ['Basic electronics', 'Interest in robotics'],
        year: 'Open to all years',
        interview: 'Technical discussion',
      },
      activities: ['Robot building workshops', 'Competitions', 'Arduino/Raspberry Pi projects', 'Guest lectures'],
      achievements: ['Robowar Champions 2024', 'TechFest Mumbai participants', 'Published research papers'],
      upcomingEvents: [
        { name: 'Bot Building Session', date: 'Jan 18, 2025' },
        { name: 'AI in Robotics Talk', date: 'Jan 28, 2025' },
      ],
      leads: [
        { name: 'Vikram Yadav', role: 'President', year: '4th Year ME' },
        { name: 'Neha Gupta', role: 'Technical Head', year: '3rd Year ECE' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
    {
      id: 3,
      name: 'Kalakriti - Cultural Society',
      category: 'cultural',
      description: 'Celebrate arts, dance, music, and drama through various cultural events',
      icon: Palette,
      color: 'from-pink-600 to-rose-600',
      members: 234,
      established: '2010',
      requirements: {
        skills: ['Interest in arts/performance'],
        year: 'Open to all years',
        interview: 'Audition based on talent',
      },
      activities: ['Annual fest performances', 'Street plays', 'Music concerts', 'Art exhibitions'],
      achievements: ['Best Cultural Society Award', 'State-level competitions', '100+ events organized'],
      upcomingEvents: [
        { name: 'Annual Fest Auditions', date: 'Jan 15, 2025' },
        { name: 'Open Mic Night', date: 'Jan 22, 2025' },
      ],
      leads: [
        { name: 'Anjali Verma', role: 'President', year: '3rd Year' },
        { name: 'Rohan Malhotra', role: 'Vice President', year: '4th Year' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
    {
      id: 4,
      name: 'Photography Club',
      category: 'creative',
      description: 'Capture moments, learn photography techniques, and showcase your creative vision',
      icon: Camera,
      color: 'from-orange-600 to-yellow-600',
      members: 67,
      established: '2018',
      requirements: {
        skills: ['Interest in photography'],
        year: 'Open to all years',
        interview: 'Portfolio review',
      },
      activities: ['Photo walks', 'Workshops on editing', 'Competitions', 'College event coverage'],
      achievements: ['National photography awards', 'Featured in magazines', 'Exhibition at India Gate'],
      upcomingEvents: [
        { name: 'Night Photography Walk', date: 'Jan 16, 2025' },
        { name: 'Lightroom Workshop', date: 'Jan 24, 2025' },
      ],
      leads: [
        { name: 'Aditya Raj', role: 'President', year: '3rd Year' },
        { name: 'Simran Kaur', role: 'Creative Head', year: '4th Year' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
    {
      id: 5,
      name: 'Debating Society',
      category: 'literary',
      description: 'Sharpen your speaking skills through debates, MUNs, and public speaking events',
      icon: Mic,
      color: 'from-blue-600 to-indigo-600',
      members: 78,
      established: '2012',
      requirements: {
        skills: ['Good communication', 'Critical thinking'],
        year: 'Open to all years',
        interview: 'Speaking test',
      },
      activities: ['Weekly debates', 'MUN conferences', 'Public speaking workshops', 'Inter-college competitions'],
      achievements: ['Best Delegation - MUN 2024', 'State debate champions', 'TEDx speakers'],
      upcomingEvents: [
        { name: 'Parliamentary Debate', date: 'Jan 19, 2025' },
        { name: 'MUN Simulation', date: 'Jan 26, 2025' },
      ],
      leads: [
        { name: 'Siddharth Joshi', role: 'President', year: '4th Year' },
        { name: 'Kavya Nair', role: 'Secretary', year: '3rd Year' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
    {
      id: 6,
      name: 'ESports Club',
      category: 'sports',
      description: 'Competitive gaming, tournaments, and building the esports community',
      icon: Gamepad2,
      color: 'from-green-600 to-emerald-600',
      members: 142,
      established: '2020',
      requirements: {
        skills: ['Gaming interest', 'Team player'],
        year: 'Open to all years',
        interview: 'Gaming skills assessment',
      },
      activities: ['Weekly tournaments', 'Bootcamps', 'Inter-college competitions', 'Streaming sessions'],
      achievements: ['BGMI College Champions', 'Valorant Regional Winners', 'Chess Olympiad participants'],
      upcomingEvents: [
        { name: 'Valorant Tournament', date: 'Jan 21, 2025' },
        { name: 'FIFA Championship', date: 'Jan 27, 2025' },
      ],
      leads: [
        { name: 'Arjun Patel', role: 'President', year: '3rd Year' },
        { name: 'Tanvi Shah', role: 'Event Head', year: '4th Year' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
    {
      id: 7,
      name: 'Literary Club',
      category: 'literary',
      description: 'For writers, poets, and book lovers to share and create literary content',
      icon: BookOpen,
      color: 'from-amber-600 to-orange-600',
      members: 94,
      established: '2013',
      requirements: {
        skills: ['Love for reading/writing'],
        year: 'Open to all years',
        interview: 'Writing sample submission',
      },
      activities: ['Book club meetings', 'Poetry slams', 'Creative writing workshops', 'Annual magazine publication'],
      achievements: ['Published college magazine', 'Poetry competition winners', 'Author meet-ups organized'],
      upcomingEvents: [
        { name: 'Poetry Slam', date: 'Jan 17, 2025' },
        { name: 'Author Meet & Greet', date: 'Jan 23, 2025' },
      ],
      leads: [
        { name: 'Ishita Sharma', role: 'President', year: '4th Year' },
        { name: 'Karan Mehta', role: 'Editor-in-Chief', year: '3rd Year' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
    {
      id: 8,
      name: 'Green Earth Society',
      category: 'social',
      description: 'Environmental awareness, sustainability initiatives, and eco-friendly campaigns',
      icon: Globe,
      color: 'from-teal-600 to-green-600',
      members: 112,
      established: '2016',
      requirements: {
        skills: ['Environmental awareness'],
        year: 'Open to all years',
        interview: 'Interaction about environmental issues',
      },
      activities: ['Tree plantation drives', 'Cleanliness campaigns', 'Workshops on sustainability', 'Awareness rallies'],
      achievements: ['Planted 5000+ trees', 'Zero-waste campus initiative', 'Award from District Administration'],
      upcomingEvents: [
        { name: 'Campus Cleanup Drive', date: 'Jan 14, 2025' },
        { name: 'Sustainability Workshop', date: 'Jan 29, 2025' },
      ],
      leads: [
        { name: 'Megha Singh', role: 'President', year: '3rd Year' },
        { name: 'Ravi Kumar', role: 'Coordinator', year: '4th Year' },
      ],
      socialLinks: { website: '#', instagram: '#', linkedin: '#' },
    },
  ];

  const categories = [
    { id: 'all', label: 'All Clubs', count: clubs.length },
    { id: 'technical', label: 'Technical', count: clubs.filter(c => c.category === 'technical').length },
    { id: 'cultural', label: 'Cultural', count: clubs.filter(c => c.category === 'cultural').length },
    { id: 'creative', label: 'Creative', count: clubs.filter(c => c.category === 'creative').length },
    { id: 'literary', label: 'Literary', count: clubs.filter(c => c.category === 'literary').length },
    { id: 'sports', label: 'Sports', count: clubs.filter(c => c.category === 'sports').length },
    { id: 'social', label: 'Social', count: clubs.filter(c => c.category === 'social').length },
  ];

  const filteredClubs = clubs.filter(club => {
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          College Clubs
        </h1>
        <p className="text-muted-foreground text-lg">Discover and join clubs that match your interests and passions</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search clubs by name or interest..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 bg-background border-border"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            className={selectedCategory === category.id 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-white' 
              : 'border-border'
            }
          >
            {category.label} ({category.count})
          </Button>
        ))}
      </div>

      {/* Clubs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => {
          const Icon = club.icon;
          const isExpanded = selectedClub === club.id;
          
          return (
            <Card
              key={club.id}
              className={`group relative overflow-hidden bg-card border-border hover:border-blue-500 transition-all duration-300 cursor-pointer ${
                isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              onClick={() => setSelectedClub(isExpanded ? null : club.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${club.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${club.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{club.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {club.members} members
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Est. {club.established}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{club.description}</p>

                {!isExpanded && (
                  <Button 
                    variant="outline" 
                    className="w-full border-border"
                  >
                    View Details
                  </Button>
                )}

                {isExpanded && (
                  <div className="mt-6 space-y-6 animate-in fade-in duration-300">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Requirements */}
                      <Card className="bg-muted/50 border-border p-5">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <UserPlus className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          Recruitment Requirements
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-muted-foreground mb-1">Skills Needed:</p>
                            <div className="flex flex-wrap gap-2">
                              {club.requirements.skills.map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Eligibility:</p>
                            <p className="text-foreground">{club.requirements.year}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Selection Process:</p>
                            <p className="text-foreground">{club.requirements.interview}</p>
                          </div>
                        </div>
                      </Card>

                      {/* Activities */}
                      <Card className="bg-muted/50 border-border p-5">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                          Activities & Achievements
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-muted-foreground mb-2">Regular Activities:</p>
                            <ul className="space-y-1">
                              {club.activities.slice(0, 3).map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-foreground">
                                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-2">Top Achievement:</p>
                            <p className="text-foreground">{club.achievements[0]}</p>
                          </div>
                        </div>
                      </Card>

                      {/* Club Leads */}
                      <Card className="bg-muted/50 border-border p-5">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          Club Leadership
                        </h4>
                        <div className="space-y-3">
                          {club.leads.map((lead, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${club.color} flex items-center justify-center text-white text-sm font-semibold`}>
                                {lead.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">{lead.name}</p>
                                <p className="text-xs text-muted-foreground">{lead.role} • {lead.year}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    {/* Upcoming Events */}
                    {club.upcomingEvents.length > 0 && (
                      <Card className="bg-muted/50 border-border p-5">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                          Upcoming Events
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {club.upcomingEvents.map((event, idx) => (
                            <div key={idx} className="p-3 bg-background rounded-lg border border-border">
                              <p className="font-medium text-foreground text-sm">{event.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Request to Join
                      </Button>
                      <Button variant="outline" className="border-border">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                      <Button variant="outline" className="border-border">
                        Contact Team
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {filteredClubs.length === 0 && (
        <Card className="p-12 text-center bg-card border-border">
          <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No clubs found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </Card>
      )}
    </div>
  );
}
