import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import { PageTransition, FadeIn } from '../components/PageTransition';

import avatarImage from '../assets/avator_1.jpeg';
import { REACT_APP_SOCIAL_FACEBOOK, REACT_APP_SOCIAL_GITHUB, REACT_APP_SOCIAL_LINKEDIN, REACT_APP_SOCIAL_TWITTER} from '../env';

function Home() {
  return (
    <>
      <Helmet>
        <title>Dennis M. Nyabuti | Senior Software Engineer</title>
        <meta name="description" content="Senior Software Engineer specializing in full-stack development, cloud architecture, and modern web technologies. Check out my blog, projects, and experience." />
        <meta name="keywords" content="software engineer, full-stack developer, cloud architecture, React, Node.js, AWS, DevOps" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dennis M. Nyabuti | Senior Software Engineer" />
        <meta property="og:description" content="Senior Software Engineer specializing in full-stack development, cloud architecture, and modern web technologies." />
        <meta property="og:image" content={avatarImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dennis M. Nyabuti | Senior Software Engineer" />
        <meta name="twitter:description" content="Senior Software Engineer specializing in full-stack development, cloud architecture, and modern web technologies." />
      </Helmet>
      
      <PageTransition>
        <div className="relative min-h-[75vh] flex items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
            <FadeIn delay={0.2}>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    alt="Dennis Nyabuti"
                    src={avatarImage}
                    className="w-60 h-60 rounded-full object-cover border-4 border-blue-500/20 shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20"></div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="space-y-2">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Dennis M. Nyabuti
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  Senior Software Engineer
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="flex justify-center gap-4">
            {REACT_APP_SOCIAL_TWITTER && (
              <a
                href={REACT_APP_SOCIAL_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 hover:border-blue-500 transition-all duration-200 hover:scale-110 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <Twitter className="w-6 h-6" />
              </a>
          )}
          {REACT_APP_SOCIAL_FACEBOOK && (
            <a
              href={REACT_APP_SOCIAL_FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 hover:border-blue-500 transition-all duration-200 hover:scale-110 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Facebook className="w-6 h-6" />
            </a>
          )}
          {REACT_APP_SOCIAL_LINKEDIN && (
            <a
              href={REACT_APP_SOCIAL_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 hover:border-blue-500 transition-all duration-200 hover:scale-110 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          )}
          {REACT_APP_SOCIAL_GITHUB && (
            <a
              href={REACT_APP_SOCIAL_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 hover:border-blue-500 transition-all duration-200 hover:scale-110 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
        </div>
        </FadeIn>
      </div>
    </div>
    </PageTransition>
    </>
  );
}

export default Home;
