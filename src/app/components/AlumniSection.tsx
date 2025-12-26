import { useState } from 'react';
import { Award, Briefcase, MapPin, Linkedin, ExternalLink, Star, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';

export default function AlumniSection() {
  const [selectedAlumni, setSelectedAlumni] = useState<number | null>(null);

  const alumni = [
    {
      id: 1,
      name: 'Dr. Ankit Verma',
      batch: '2015',
      branch: 'Computer Science',
      currentRole: 'Senior Software Engineer',
      company: 'Google',
      location: 'Bangalore, India',
      image: '',
      achievements: [
        'Led development of Google Assistant features',
        'Published 5+ research papers in AI/ML',
        'Mentor at Google Summer of Code',
      ],
      story: 'Started as a fresher with basic coding knowledge. Through consistent practice and guidance from seniors, cleared Google interview in final year. Hard work and dedication always pay off!',
      advice: 'Focus on fundamentals, build projects, and never stop learning. The journey from LU to top tech companies is definitely achievable.',
      linkedin: '#',
    },
    {
      id: 2,
      name: 'Shreya Sharma',
      batch: '2017',
      branch: 'Computer Science',
      currentRole: 'Product Manager',
      company: 'Microsoft',
      location: 'Hyderabad, India',
      image: '',
      achievements: [
        'Managing Azure Cloud products',
        'Led team of 15+ engineers',
        'Speaker at tech conferences',
      ],
      story: 'Transitioned from engineering to product management. LU gave me strong technical foundation which helped in my PM role. Every experience counts!',
      advice: 'Explore different roles in tech. Don\'t limit yourself to just coding. Communication and leadership skills are equally important.',
      linkedin: '#',
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      batch: '2014',
      branch: 'Electronics',
      currentRole: 'Embedded Systems Lead',
      company: 'Tesla',
      location: 'California, USA',
      image: '',
      achievements: [
        'Working on autonomous vehicle systems',
        '10+ patents in embedded systems',
        'TEDx speaker',
      ],
      story: 'From small-town engineering student to working on cutting-edge automotive technology. The labs at LU prepared me well for real-world challenges.',
      advice: 'Hardware and embedded systems have huge opportunities. Don\'t just follow the crowd - pursue what interests you.',
      linkedin: '#',
    },
    {
      id: 4,
      name: 'Pooja Mishra',
      batch: '2016',
      branch: 'Computer Science',
      currentRole: 'Data Scientist',
      company: 'Amazon',
      location: 'Seattle, USA',
      image: '',
      achievements: [
        'ML models processing millions of transactions',
        'Featured in Forbes 30 Under 30',
        'Open source contributor',
      ],
      story: 'Discovered my passion for data science in 3rd year. Started with online courses and internships. Today working on large-scale ML systems at Amazon.',
      advice: 'Start early with internships. Real-world experience is invaluable. And always keep your GitHub profile updated!',
      linkedin: '#',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      batch: '2018',
      branch: 'Mechanical',
      currentRole: 'Robotics Engineer',
      company: 'Boston Dynamics',
      location: 'Massachusetts, USA',
      image: '',
      achievements: [
        'Developing advanced robotics systems',
        'Multiple international publications',
        'Started robotics club at LU',
      ],
      story: 'Mechanical engineering opened doors to robotics. The theoretical foundation from LU combined with practical projects led me to my dream company.',
      advice: 'Combine your core engineering knowledge with emerging technologies. Interdisciplinary skills are highly valued.',
      linkedin: '#',
    },
    {
      id: 6,
      name: 'Neha Agarwal',
      batch: '2015',
      branch: 'Computer Science',
      currentRole: 'Founder & CEO',
      company: 'EduTech Startup',
      location: 'Bangalore, India',
      image: '',
      achievements: [
        'Raised $5M in funding',
        'Serving 100K+ students',
        'Featured in TechCrunch',
      ],
      story: 'Started my entrepreneurial journey from college. Built first product in final year. Today running a successful startup helping students across India.',
      advice: 'If you have an idea, start working on it now. Don\'t wait for the perfect time. Learn by doing!',
      linkedin: '#',
    },
  ];

  const stats = [
    { label: 'Alumni Network', value: '5000+', icon: Award },
    { label: 'Top Companies', value: '50+', icon: Briefcase },
    { label: 'Countries', value: '25+', icon: MapPin },
    { label: 'Success Rate', value: '95%', icon: Star },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Alumni Success Stories</h1>
        <p className="text-slate-600">Get inspired by the achievements of our successful alumni</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Featured Companies */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-600" />
          Where Our Alumni Work
        </h3>
        <div className="flex flex-wrap gap-3">
          {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Tesla', 'Adobe', 'Samsung', 'Intel', 'IBM', 'Oracle'].map((company) => (
            <Badge key={company} variant="secondary" className="px-3 py-1">
              {company}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Alumni Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((person) => (
          <Card
            key={person.id}
            className="p-6 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setSelectedAlumni(selectedAlumni === person.id ? null : person.id)}
          >
            <div className="text-center mb-4">
              <Avatar className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                {person.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <h3 className="font-semibold text-slate-900">{person.name}</h3>
              <p className="text-sm text-slate-600">Batch of {person.batch} • {person.branch}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-slate-900 font-medium">{person.currentRole}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{person.company}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span className="text-slate-700">{person.location}</span>
              </div>
            </div>

            {selectedAlumni === person.id && (
              <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {person.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    Success Story
                  </h4>
                  <p className="text-sm text-slate-700 italic">"{person.story}"</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">💡 Advice for Students</h4>
                  <p className="text-sm text-slate-700">{person.advice}</p>
                </div>

                <Button className="w-full" variant="outline">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            )}

            {selectedAlumni !== person.id && (
              <Button className="w-full mt-4" variant="outline">
                Read Full Story
              </Button>
            )}
          </Card>
        ))}
      </div>

      {/* CTA */}
      <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Want to be Featured Here?</h3>
        <p className="text-blue-50 mb-6">
          Work hard, achieve your goals, and inspire the next generation of LU students!
        </p>
        <Button className="bg-white text-blue-600 hover:bg-slate-50">
          Submit Your Story <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </Card>
    </div>
  );
}
