import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Mail,
  GraduationCap,
  Code,
  Palette,
  BarChart3,
  BookOpen,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      department: "Leadership",
      avatar: "SJ",
      bio: "Former Stanford professor with 15+ years in educational technology. PhD in Computer Science Education.",
      skills: ["EdTech", "Leadership", "AI in Education"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@spas.edu"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      department: "Engineering",
      avatar: "MC",
      bio: "Full-stack engineer with expertise in scalable learning platforms. Former Google engineer.",
      skills: ["React", "Node.js", "AWS", "Machine Learning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@spas.edu"
      }
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Content",
      department: "Education",
      avatar: "ER",
      bio: "Educational psychologist specializing in assessment design and learning analytics.",
      skills: ["Assessment Design", "Learning Psychology", "Curriculum Development"],
      social: {
        linkedin: "#",
        email: "emily@spas.edu"
      }
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      department: "Analytics",
      avatar: "DK",
      bio: "PhD in Statistics with focus on educational data mining and predictive analytics.",
      skills: ["Python", "R", "TensorFlow", "Statistical Analysis"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@spas.edu"
      }
    },
    {
      name: "Lisa Thompson",
      role: "UX/UI Designer",
      department: "Design",
      avatar: "LT",
      bio: "Award-winning designer with expertise in creating intuitive educational interfaces.",
      skills: ["UI/UX Design", "Figma", "User Research", "Accessibility"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@spas.edu"
      }
    },
    {
      name: "James Wilson",
      role: "Security Engineer",
      department: "Security",
      avatar: "JW",
      bio: "Cybersecurity expert ensuring student data protection and platform security.",
      skills: ["Cybersecurity", "Privacy Compliance", "Penetration Testing"],
      social: {
        linkedin: "#",
        email: "james@spas.edu"
      }
    }
  ];

  const departments = [
    { name: "Leadership", icon: Users, color: "bg-chart-1" },
    { name: "Engineering", icon: Code, color: "bg-chart-2" },
    { name: "Education", icon: BookOpen, color: "bg-chart-3" },
    { name: "Analytics", icon: BarChart3, color: "bg-chart-4" },
    { name: "Design", icon: Palette, color: "bg-chart-5" },
    { name: "Security", icon: Shield, color: "bg-gradient-to-r from-purple-500 to-pink-500" }
  ];

  const getDepartmentColor = (department: string) => {
    const dept = departments.find(d => d.name === department);
    return dept?.color || "bg-muted";
  };

  const getDepartmentIcon = (department: string) => {
    const dept = departments.find(d => d.name === department);
    return dept?.icon || Users;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary rounded-full p-4">
              <Users className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate educators, engineers, and designers working together to revolutionize 
            student performance analysis and create better learning experiences for everyone.
          </p>
        </div>

        {/* Departments Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">Our Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-md text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`${dept.color} rounded-lg p-3 w-fit mx-auto mb-3 text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="font-medium text-sm text-foreground">{dept.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">Our People</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const DeptIcon = getDepartmentIcon(member.department);
              return (
                <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={`/placeholder-${member.name.toLowerCase().replace(/\s+/g, '-')}.jpg`} />
                        <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium">{member.role}</CardDescription>
                    <Badge className={`${getDepartmentColor(member.department)} text-white w-fit mx-auto`}>
                      <DeptIcon className="h-3 w-3 mr-1" />
                      {member.department}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      {member.bio}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-2">
                      {member.social.linkedin && (
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                          <Linkedin className="h-3 w-3" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                          <Twitter className="h-3 w-3" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Mail className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Join Our Team */}
        <Card className="gradient-primary text-white border-0 shadow-lg">
          <CardContent className="text-center py-12">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for education 
              and technology. Help us build the future of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  View Open Positions
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;