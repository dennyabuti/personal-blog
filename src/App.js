import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { Moon, Sun } from 'lucide-react';
import BuniChatWidget from './components/BuniChatWidget';
import { Button } from './components/ui/button';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import withTracker from './components/with-tracker';
import { REACT_APP_OWNER } from './env';

import Home from './pages/home';
import Posts from './pages/posts';
import About from './pages/about';
import NotFound from './pages/404';

function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {REACT_APP_OWNER || 'Blog'}
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/posts">
              <Button variant="ghost">Posts</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Router>
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={React.createElement(withTracker(Home))} />
            <Route path="/posts" element={React.createElement(withTracker(Posts))} />
            <Route path="/about" element={React.createElement(withTracker(About))} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ScrollToTop />
        <BuniChatWidget />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
