import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from 'react-helmet-async';
import { Search, Clock, Calendar, Tag as TagIcon } from 'lucide-react';

import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Skeleton } from '../components/ui/skeleton';
import { PageTransition } from '../components/PageTransition';
import SocialShare from '../components/SocialShare';
import { requestPosts } from '../actions/post';
import { transform } from '../services/post.js';
import { usePrism, highlightCode } from '../utils/prism';
import { calculateReadingTime, createExcerpt, filterPosts, sortPostsByDate } from '../utils/postHelpers';

const options = {
  decodeEntities: true,
  transform
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(requestPosts()),
  }
}

function Posts({ posts, fetchPosts }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [expandedPosts, setExpandedPosts] = useState(new Set());
  
  usePrism();

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      await fetchPosts();
      setIsLoading(false);
    };
    loadPosts();
  }, [fetchPosts]);

  // Highlight code when posts change
  useEffect(() => {
    if (posts && posts.length > 0) {
      highlightCode();
    }
  }, [posts]);

  const togglePostExpansion = (index) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPosts(newExpanded);
    
    // Trigger syntax highlighting after expansion
    setTimeout(() => highlightCode(), 100);
  };

  const filteredPosts = filterPosts(sortPostsByDate(posts), searchQuery);

  if (isLoading && posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Skeleton className="h-12 w-full" />
        {[1, 2, 3].map(i => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (posts.length === 0 && !isLoading) {
    return (
      <>
        <Helmet>
          <title>Blog Posts | Dennis M. Nyabuti</title>
          <meta name="description" content="Technical blog posts about software engineering, cloud architecture, and modern development practices." />
        </Helmet>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No posts to show yet.</p>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Blog Posts | Dennis M. Nyabuti</title>
        <meta name="description" content="Technical blog posts about software engineering, cloud architecture, and modern development practices." />
      </Helmet>

      <PageTransition>
        <div className="max-w-4xl mx-auto space-y-6">
        {/* Header and Search */}
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Blog Posts
            </h1>
            <p className="text-muted-foreground">
              Thoughts on software engineering, cloud architecture, and technology
            </p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {searchQuery && (
            <p className="text-sm text-muted-foreground">
              Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </p>
          )}
        </div>

        {/* Posts List */}
        {filteredPosts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No posts match your search.</p>
            </CardContent>
          </Card>
        ) : (
          filteredPosts.map((post, i) => {
            const isExpanded = expandedPosts.has(i);
            const readingTime = calculateReadingTime(post.content);
            const excerpt = createExcerpt(post.content, 200);
            const postDate = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="space-y-3">
                    <CardTitle className="text-3xl cursor-pointer hover:text-primary transition-colors" 
                                onClick={() => togglePostExpansion(i)}>
                      {post.title}
                    </CardTitle>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {postDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {readingTime} min read
                      </div>
                    </div>

                    {/* Excerpt for collapsed posts */}
                    {!isExpanded && (
                      <CardDescription className="text-base">
                        {excerpt}
                        <button 
                          onClick={() => togglePostExpansion(i)}
                          className="ml-2 text-primary hover:underline font-medium"
                        >
                          Read more
                        </button>
                      </CardDescription>
                    )}
                  </div>
                </CardHeader>
                
                {isExpanded && (
                  <CardContent className="prose prose-slate dark:prose-invert max-w-none overflow-x-auto line-numbers">
                    <div className="[&_iframe]:w-full [&_iframe]:max-w-[640px] [&_iframe]:max-h-[360px] [&_iframe]:aspect-video [&_pre]:rounded-lg [&_pre]:shadow-sm">
                      {ReactHtmlParser(post.content, options)}
                    </div>
                    <button 
                      onClick={() => togglePostExpansion(i)}
                      className="mt-6 text-primary hover:underline font-medium"
                    >
                      Show less
                    </button>
                  </CardContent>
                )}
              </Card>
            );
          })
        )}
      </div>
      </PageTransition>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

