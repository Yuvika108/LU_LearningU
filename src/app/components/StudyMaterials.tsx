import { useState } from 'react';
import { FileText, Upload, Download, File, ExternalLink, Calendar, User, Search, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

export default function StudyMaterials() {
  const [selectedYear, setSelectedYear] = useState('freshers');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    subject: '',
    year: 'freshers',
    type: 'notes',
    description: '',
  });

  const years = ['freshers', '2nd-year', '3rd-year', '4th-year'];
  const categories = ['notes', 'lab-work', 'youtube'];

  const materials = {
    freshers: [
      {
        id: 1,
        title: 'Engineering Mathematics I - Complete Notes',
        subject: 'Mathematics',
        type: 'notes',
        uploadedBy: 'Rahul Kumar',
        uploadDate: 'Dec 15, 2024',
        downloads: 234,
        size: '2.4 MB',
        format: 'PDF',
      },
      {
        id: 2,
        title: 'Physics Lab - Experiments 1-10',
        subject: 'Physics',
        type: 'lab-work',
        uploadedBy: 'Priya Singh',
        uploadDate: 'Dec 10, 2024',
        downloads: 156,
        size: '5.1 MB',
        format: 'PDF',
      },
      {
        id: 3,
        title: 'C Programming Full Course',
        subject: 'Programming',
        type: 'youtube',
        uploadedBy: 'CodeWithHarry',
        uploadDate: 'Dec 5, 2024',
        downloads: 489,
        link: 'https://youtube.com',
      },
    ],
    '2nd-year': [
      {
        id: 4,
        title: 'Data Structures & Algorithms Notes',
        subject: 'Computer Science',
        type: 'notes',
        uploadedBy: 'Amit Sharma',
        uploadDate: 'Dec 20, 2024',
        downloads: 567,
        size: '3.8 MB',
        format: 'PDF',
      },
      {
        id: 5,
        title: 'Digital Electronics Lab Manual',
        subject: 'Electronics',
        type: 'lab-work',
        uploadedBy: 'Neha Gupta',
        uploadDate: 'Dec 12, 2024',
        downloads: 234,
        size: '4.2 MB',
        format: 'PDF',
      },
      {
        id: 6,
        title: 'Object Oriented Programming in Java',
        subject: 'Programming',
        type: 'youtube',
        uploadedBy: 'Apna College',
        uploadDate: 'Dec 8, 2024',
        downloads: 678,
        link: 'https://youtube.com',
      },
    ],
    '3rd-year': [
      {
        id: 7,
        title: 'Operating Systems Complete Notes',
        subject: 'Computer Science',
        type: 'notes',
        uploadedBy: 'Vikram Yadav',
        uploadDate: 'Dec 18, 2024',
        downloads: 445,
        size: '4.5 MB',
        format: 'PDF',
      },
      {
        id: 8,
        title: 'Computer Networks Lab Assignments',
        subject: 'Computer Science',
        type: 'lab-work',
        uploadedBy: 'Anjali Verma',
        uploadDate: 'Dec 14, 2024',
        downloads: 321,
        size: '3.2 MB',
        format: 'PDF',
      },
      {
        id: 9,
        title: 'DBMS Full Tutorial Series',
        subject: 'Database',
        type: 'youtube',
        uploadedBy: 'Gate Smashers',
        uploadDate: 'Dec 6, 2024',
        downloads: 789,
        link: 'https://youtube.com',
      },
    ],
    '4th-year': [
      {
        id: 10,
        title: 'Machine Learning Complete Notes',
        subject: 'AI/ML',
        type: 'notes',
        uploadedBy: 'Siddharth Joshi',
        uploadDate: 'Dec 22, 2024',
        downloads: 623,
        size: '6.7 MB',
        format: 'PDF',
      },
      {
        id: 11,
        title: 'Software Engineering Project Reports',
        subject: 'Software Engineering',
        type: 'lab-work',
        uploadedBy: 'Kavya Nair',
        uploadDate: 'Dec 16, 2024',
        downloads: 412,
        size: '8.3 MB',
        format: 'PDF',
      },
      {
        id: 12,
        title: 'Interview Preparation Playlist',
        subject: 'Placement',
        type: 'youtube',
        uploadedBy: 'TakeUForward',
        uploadDate: 'Dec 4, 2024',
        downloads: 891,
        link: 'https://youtube.com',
      },
    ],
  };

  const handleUpload = () => {
    if (!uploadForm.title || !uploadForm.subject) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Document uploaded successfully! 🎉');
    setUploadDialogOpen(false);
    setUploadForm({
      title: '',
      subject: '',
      year: 'freshers',
      type: 'notes',
      description: '',
    });
  };

  const handleDownload = (material: any) => {
    toast.success(`Downloading ${material.title}...`);
  };

  const filteredMaterials = materials[selectedYear as keyof typeof materials].filter(
    (material) =>
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Study Materials</h1>
          <p className="text-muted-foreground">Access and share educational resources</p>
        </div>
        <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              <Upload className="w-4 h-4 mr-2" />
              Upload Material
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">Upload Study Material</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Data Structures Complete Notes"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Computer Science"
                    value={uploadForm.subject}
                    onChange={(e) => setUploadForm({ ...uploadForm, subject: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year *</Label>
                  <Select
                    value={uploadForm.year}
                    onValueChange={(value) => setUploadForm({ ...uploadForm, year: value })}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freshers">Freshers</SelectItem>
                      <SelectItem value="2nd-year">2nd Year</SelectItem>
                      <SelectItem value="3rd-year">3rd Year</SelectItem>
                      <SelectItem value="4th-year">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type *</Label>
                <Select
                  value={uploadForm.type}
                  onValueChange={(value) => setUploadForm({ ...uploadForm, type: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="notes">Notes</SelectItem>
                    <SelectItem value="lab-work">Lab Work</SelectItem>
                    <SelectItem value="youtube">YouTube Link</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <textarea
                  id="description"
                  rows={3}
                  placeholder="Brief description of the material..."
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload File *</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, DOCX (max 10MB)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handleUpload} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Upload Material
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setUploadDialogOpen(false)}
                  className="border-border"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search materials by title or subject..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 bg-background border-border"
        />
      </div>

      {/* Year Tabs */}
      <Tabs value={selectedYear} onValueChange={setSelectedYear}>
        <TabsList className="grid grid-cols-4 w-full bg-muted">
          <TabsTrigger value="freshers">Freshers</TabsTrigger>
          <TabsTrigger value="2nd-year">2nd Year</TabsTrigger>
          <TabsTrigger value="3rd-year">3rd Year</TabsTrigger>
          <TabsTrigger value="4th-year">4th Year</TabsTrigger>
        </TabsList>

        {years.map((year) => (
          <TabsContent key={year} value={year} className="mt-6">
            <div className="grid gap-4">
              {filteredMaterials.length === 0 ? (
                <Card className="p-12 text-center bg-card border-border">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No materials found</h3>
                  <p className="text-muted-foreground">Try adjusting your search</p>
                </Card>
              ) : (
                filteredMaterials.map((material) => (
                  <Card
                    key={material.id}
                    className="p-6 bg-card border-border hover:border-blue-500 transition-all hover:shadow-lg group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {material.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
                              <Badge variant="secondary">{material.subject}</Badge>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{material.uploadedBy}</span>
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{material.uploadDate}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          {material.size && (
                            <div className="flex items-center gap-1">
                              <File className="w-4 h-4" />
                              <span>{material.format} • {material.size}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{material.downloads} downloads</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleDownload(material)}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          {material.link && (
                            <Button variant="outline" className="border-border">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Link
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
