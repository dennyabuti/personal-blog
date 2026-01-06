import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Briefcase, Code, Award } from 'lucide-react';import { PageTransition, StaggerContainer, StaggerItem } from '../components/PageTransition';
const skills = [
  'JavaScript', 'Java', 'TypeScript', 'React', 'React Native', 'Node.js',
  'NoSQL', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Linux',
  'Docker', 'Kubernetes', 'REST APIs', 'GraphQL', 'USSD Development',
  'Microservices', 'AI/ML Integration', 'E-commerce Platforms', 'Offline-First Apps',
  'Start-up Leadership', 'Cross-functional Team Leadership', 'Agile'
];

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'One Acre Fund',
    period: 'September 2021 - Present',
    location: 'Kigali, Rwanda',
    description: 'Leading development of mobile and USSD solutions serving smallholder farmers across Africa.',
    achievements: [
      'Led development of award-winning Tupande Mobile App, an e-commerce platform for smallholder farmers',
      'Directed cross-functional team building USSD applications deployed across multiple countries',
      'Designed scalable plug-and-play USSD framework for rapid deployment of configurable modules',
      'Piloted proof of concept for fine-tuning LLaMA language model using multilingual call center data',
      'Currently leading development of offline-first internal solution for field agents in underserved regions'
    ]
  },
  {
    title: 'Co-Founder',
    company: 'BuniAI',
    period: 'January 2024 - Present',
    description: 'Building the future of conversational logic engineering with collaborative AI-driven platform.',
    achievements: [
      'Leading strategy for collaborative platform turning business requirements into production-ready USSD and AI Chatbot workflows',
      'Reduced development cycles from weeks to days',
      'Empowering teams with unified, AI-driven canvas for omnichannel deployment',
      'Advocating for shift from "no-code builders" to "high-performance workflow engineering"'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Banjo | safeXai | mi|im',
    period: 'March 2019 - July 2021',
    location: 'South Jordan, Utah',
    description: 'Developed enterprise software solutions with focus on security and scalability.'
  },
  {
    title: 'Lead Software Engineer',
    company: 'OptiMine Software, Inc.',
    period: 'February 2014 - February 2019',
    location: 'Minneapolis, Minnesota',
    description: '5 years building marketing analytics and optimization software solutions.',
    achievements: [
      'Promoted to Lead Software Engineer in August 2017',
      'Architected and delivered enterprise-level analytics platforms',
      'Mentored development team and established engineering best practices'
    ]
  }
];

const education = [
  {
    school: 'University of Wisconsin-Eau Claire',
    degree: 'BSc, Computer Science',
    period: '2010 - 2013'
  },
  {
    school: 'Egerton University',
    degree: 'BSc, Applied Computer Science',
    period: '2009'
  },
  {
    school: 'Egerton University',
    degree: 'Diploma, Computer Science',
    period: '2006 - 2008'
  }
];

function About() {
  return (
    <>
      <Helmet>
        <title>About | Dennis M. Nyabuti</title>
        <meta name="description" content="Senior Software Engineer specializing in scalable web applications and cloud architecture." />
      </Helmet>

      <PageTransition>
        <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable applications and solving complex problems
          </p>
        </div>

        {/* Bio */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Bio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Senior Software Engineer with over 10 years of experience building impactful solutions 
              that serve communities across Africa and beyond. Currently based in Kigali, Rwanda, I lead the 
              development of mobile and USSD platforms at One Acre Fund, empowering smallholder farmers through 
              technology. My work includes the award-winning Tupande Mobile App and scalable USSD frameworks 
              deployed across multiple countries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As Co-Founder of BuniAI, I'm pioneering the future of conversational logic engineering—building 
              collaborative platforms that transform complex business requirements into production-ready USSD 
              and AI Chatbot workflows in record time. My expertise spans JavaScript, Java, NoSQL databases, 
              AWS, and AI/ML integration, with a focus on offline-first solutions for underserved regions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about leveraging technology to solve real-world problems, leading cross-functional 
              teams, and reducing development cycles from weeks to days. When I'm not coding, I'm exploring 
              innovative ways to bridge the gap between cutting-edge technology and the communities that need it most.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Skills & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="space-y-3 border-l-2 border-primary/20 pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                    {job.location && (
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </div>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
                {job.achievements && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-semibold">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>
              Let's connect and discuss opportunities, collaborations, or just chat about technology!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-center gap-2 text-sm">
              <span className="font-medium">Email:</span>
              <a href="mailto:dennis.mochama@gmail.com" className="text-primary hover:underline">
                dennis.mochama@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <span className="font-medium">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/dmnyabuti" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                linkedin.com/in/dmnyabuti
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <span className="font-medium">Location:</span>
              <span className="text-muted-foreground">Kigali, Rwanda</span>
            </p>
          </CardContent>
        </Card>
      </div>
      </PageTransition>
    </>
  );
}

export default About;
