import { useState } from 'react';
import { Code, Lightbulb, Trophy, BookOpen, Youtube, ExternalLink, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('programming');

  const programmingSkills = [
    {
      title: 'Python Programming',
      level: 'Beginner to Advanced',
      duration: '40 hours',
      topics: ['Basics', 'OOP', 'Data Structures', 'Django/Flask'],
      resources: [
        { name: 'Python Official Docs', type: 'documentation', link: '#' },
        { name: 'Corey Schafer - Python', type: 'youtube', link: '#' },
        { name: 'LeetCode Python Track', type: 'practice', link: '#' },
      ],
    },
    {
      title: 'JavaScript & Web Development',
      level: 'Beginner to Advanced',
      duration: '50 hours',
      topics: ['HTML/CSS', 'JavaScript ES6+', 'React', 'Node.js'],
      resources: [
        { name: 'MDN Web Docs', type: 'documentation', link: '#' },
        { name: 'freeCodeCamp', type: 'course', link: '#' },
        { name: 'Traversy Media', type: 'youtube', link: '#' },
      ],
    },
    {
      title: 'Data Structures & Algorithms',
      level: 'Intermediate',
      duration: '60 hours',
      topics: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming'],
      resources: [
        { name: 'LeetCode', type: 'practice', link: '#' },
        { name: 'Abdul Bari - DSA', type: 'youtube', link: '#' },
        { name: 'GeeksforGeeks', type: 'documentation', link: '#' },
      ],
    },
    {
      title: 'Java Programming',
      level: 'Beginner to Advanced',
      duration: '45 hours',
      topics: ['Core Java', 'OOP', 'Collections', 'Spring Boot'],
      resources: [
        { name: 'Java T Point', type: 'documentation', link: '#' },
        { name: 'Telusko', type: 'youtube', link: '#' },
        { name: 'HackerRank Java', type: 'practice', link: '#' },
      ],
    },
  ];

  const dataScience = [
    {
      title: 'Machine Learning Fundamentals',
      level: 'Intermediate',
      duration: '50 hours',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
      resources: [
        { name: 'Andrew Ng - ML Course', type: 'course', link: '#' },
        { name: 'Kaggle', type: 'practice', link: '#' },
        { name: 'StatQuest', type: 'youtube', link: '#' },
      ],
    },
    {
      title: 'Data Analysis with Python',
      level: 'Beginner to Intermediate',
      duration: '35 hours',
      topics: ['Pandas', 'NumPy', 'Matplotlib', 'Data Visualization'],
      resources: [
        { name: 'Pandas Documentation', type: 'documentation', link: '#' },
        { name: 'Keith Galli - Pandas', type: 'youtube', link: '#' },
        { name: 'Kaggle Learn', type: 'course', link: '#' },
      ],
    },
  ];

  const devOps = [
    {
      title: 'Git & GitHub',
      level: 'Beginner',
      duration: '10 hours',
      topics: ['Version Control', 'Branching', 'Collaboration', 'Open Source'],
      resources: [
        { name: 'Git Documentation', type: 'documentation', link: '#' },
        { name: 'Git Tutorial - Kunal', type: 'youtube', link: '#' },
        { name: 'GitHub Learning Lab', type: 'practice', link: '#' },
      ],
    },
    {
      title: 'Docker & Kubernetes',
      level: 'Intermediate',
      duration: '30 hours',
      topics: ['Containerization', 'Docker Compose', 'K8s Basics', 'Deployment'],
      resources: [
        { name: 'Docker Docs', type: 'documentation', link: '#' },
        { name: 'TechWorld with Nana', type: 'youtube', link: '#' },
        { name: 'Play with Docker', type: 'practice', link: '#' },
      ],
    },
  ];

  const softSkills = [
    {
      title: 'Technical Interview Preparation',
      level: 'All Levels',
      duration: '40 hours',
      topics: ['DSA Problems', 'System Design', 'HR Round', 'Mock Interviews'],
      resources: [
        { name: 'LeetCode', type: 'practice', link: '#' },
        { name: 'InterviewBit', type: 'course', link: '#' },
        { name: 'Gaurav Sen - System Design', type: 'youtube', link: '#' },
      ],
    },
    {
      title: 'Resume & LinkedIn Building',
      level: 'All Levels',
      duration: '5 hours',
      topics: ['Resume Writing', 'LinkedIn Profile', 'Portfolio', 'Personal Branding'],
      resources: [
        { name: 'Resume Templates', type: 'documentation', link: '#' },
        { name: 'Jeff Su - Career Tips', type: 'youtube', link: '#' },
        { name: 'LinkedIn Learning', type: 'course', link: '#' },
      ],
    },
  ];

  const projectIdeas = [
    {
      title: 'E-Commerce Website',
      difficulty: 'Intermediate',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Full-stack shopping platform with cart, payment integration, and admin panel',
    },
    {
      title: 'Social Media Dashboard',
      difficulty: 'Intermediate',
      tech: ['React', 'Firebase', 'Tailwind'],
      description: 'Real-time social feed with posts, likes, comments, and user authentication',
    },
    {
      title: 'Weather Forecasting App',
      difficulty: 'Beginner',
      tech: ['JavaScript', 'API', 'HTML/CSS'],
      description: 'Display weather data using external APIs with beautiful UI',
    },
    {
      title: 'Task Management System',
      difficulty: 'Beginner',
      tech: ['React', 'LocalStorage', 'Tailwind'],
      description: 'Organize tasks with categories, priorities, and deadlines',
    },
    {
      title: 'ML Image Classifier',
      difficulty: 'Advanced',
      tech: ['Python', 'TensorFlow', 'Flask'],
      description: 'Train and deploy an image classification model',
    },
    {
      title: 'Portfolio Website',
      difficulty: 'Beginner',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'Personal portfolio showcasing your projects and skills',
    },
  ];

  const categories = [
    { id: 'programming', label: 'Programming', data: programmingSkills },
    { id: 'datascience', label: 'Data Science', data: dataScience },
    { id: 'devops', label: 'DevOps', data: devOps },
    { id: 'softskills', label: 'Soft Skills', data: softSkills },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Skills Development</h1>
        <p className="text-slate-600">Master technical and soft skills for your engineering career</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            className={selectedCategory === category.id ? 'bg-blue-600 hover:bg-blue-700' : ''}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Skills Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {categories.find(c => c.id === selectedCategory)?.data.map((skill, index) => (
          <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{skill.level}</Badge>
                  <Badge variant="outline">{skill.duration}</Badge>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Topics Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {skill.topics.map((topic) => (
                  <Badge key={topic} variant="outline" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Resources:</h4>
              <div className="space-y-2">
                {skill.resources.map((resource, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-slate-50 rounded hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {resource.type === 'youtube' && <Youtube className="w-4 h-4 text-red-600" />}
                      {resource.type === 'documentation' && <BookOpen className="w-4 h-4 text-blue-600" />}
                      {resource.type === 'course' && <Star className="w-4 h-4 text-orange-600" />}
                      {resource.type === 'practice' && <Trophy className="w-4 h-4 text-green-600" />}
                      <span className="text-sm text-slate-700">{resource.name}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Ideas Section */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-bold text-slate-900">Project Ideas</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectIdeas.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900">{project.title}</h3>
                <Badge
                  className={
                    project.difficulty === 'Beginner'
                      ? 'bg-green-100 text-green-700'
                      : project.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }
                >
                  {project.difficulty}
                </Badge>
              </div>

              <p className="text-sm text-slate-600 mb-4">{project.description}</p>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  View Guide
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Coding Platforms */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-blue-600" />
          Practice Platforms
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {['LeetCode', 'HackerRank', 'CodeChef', 'Codeforces', 'GeeksforGeeks', 'InterviewBit', 'Kaggle', 'HackerEarth'].map((platform) => (
            <Button key={platform} variant="outline" className="justify-start">
              <Code className="w-4 h-4 mr-2" />
              {platform}
            </Button>
          ))}
        </div>
      </Card>

      {/* Tips Card */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <h3 className="font-semibold text-slate-900 mb-3">🎯 Tips for Skill Development</h3>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Practice daily - consistency is key to mastering any skill</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Build projects to apply what you learn - theory + practice = success</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Participate in hackathons and coding competitions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Contribute to open source projects on GitHub</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Join coding communities and learn from peers</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
