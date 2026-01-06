import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Home, Search } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Dennis M. Nyabuti</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <PageTransition>
        <div className="max-w-2xl mx-auto text-center space-y-8 py-20">
        {/* 404 Animation */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-3xl font-semibold text-foreground">
            Page Not Found
          </p>
          <p className="text-xl text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Illustration */}
        <div className="py-8">
          <div className="relative mx-auto w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 animate-pulse" />
            <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-700 dark:to-cyan-700 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute inset-16 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-800 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/posts">
              <Search className="w-4 h-4 mr-2" />
              Browse Posts
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="link" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/projects">Projects</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/posts">Blog Posts</Link>
            </Button>
          </div>
        </div>
      </div>
      </PageTransition>
    </>
  );
}

export default NotFound;
