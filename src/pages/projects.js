import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { PageTransition, StaggerContainer, StaggerItem } from '../components/PageTransition';

const projects = [
  {
    title: 'Tupande Mobile App',
    description: 'Award-winning e-commerce platform serving smallholder farmers across Africa. Native mobile application with offline-first architecture and real-time synchronization.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Offline-First'],
    highlights: ['Serving thousands of farmers', 'Multi-country deployment', 'Offline-first architecture']
  },
  {
    title: 'BuniAI Platform',
    description: 'Collaborative platform transforming business requirements into production-ready USSD and AI Chatbot workflows. AI-driven canvas for omnichannel deployment.',
    tech: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'USSD'],
    live: 'https://buniai.com',
    highlights: ['Reduced development cycles from weeks to days', 'AI-driven workflow engineering', 'Omnichannel deployment']
  },
  {
    title: 'USSD Framework',
    description: 'Scalable, plug-and-play USSD framework designed for rapid deployment of configurable modules across multiple countries in Africa.',
    tech: ['Java', 'Node.js', 'PostgreSQL', 'Redis', 'USSD'],
    highlights: ['Multi-country deployment', 'Configurable modules', 'High scalability']
  },
  {
    title: 'Offline-First Field Agent Solution',
    description: 'Internal platform empowering field agents to serve farmers in underserved regions with limited connectivity. Synchronizes data when connection is available.',
    tech: ['React', 'IndexedDB', 'Node.js', 'MongoDB', 'PWA'],
    highlights: ['Works offline', 'Auto-sync capability', 'Field-tested in remote areas']
  },
  {
    title: 'LLaMA Fine-Tuning POC',
    description: 'Proof of concept exploring localized AI solutions by fine-tuning LLaMA language model using multilingual call center data for agricultural support.',
    tech: ['Python', 'LLaMA', 'TensorFlow', 'NLP', 'Data Science'],
    highlights: ['Multilingual support', 'Agricultural domain-specific', 'Call center optimization']
  },
  {
    title: 'OptiMine Analytics Platform',
    description: 'Enterprise marketing analytics and optimization software delivering actionable insights for marketing teams. Led architecture and development.',
    tech: ['Java', 'React', 'PostgreSQL', 'AWS', 'Analytics'],
    highlights: ['Enterprise-scale', 'Real-time analytics', 'Team leadership']
  }
];

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Dennis M. Nyabuti</title>
        <meta name="description" content="Portfolio of projects showcasing full-stack development, cloud architecture, and open-source contributions." />
      </Helmet>

      <PageTransition>
        <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built and contributed to
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                <div className="flex gap-2 mt-auto pt-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Source Contribution */}
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Open Source Contributions</CardTitle>
            <CardDescription>
              Active contributor to various open-source projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              I regularly contribute to open-source projects including React, Node.js ecosystem tools, and various developer utilities.
              Check out my GitHub profile to see my latest contributions.
            </p>
            <Button asChild>
              <a href="https://github.com/dmnyabuti" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </CardContent>
        </Card>
        </div>
      </PageTransition>
    </>
  );
}

export default Projects;
