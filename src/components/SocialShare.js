import React from 'react';
import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { Button } from './ui/button';

/**
 * Social share buttons component
 * @param {Object} props
 * @param {string} props.url - URL to share
 * @param {string} props.title - Title of the content
 * @param {string} props.description - Description for the share
 */
function SocialShare({ url, title, description = '' }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Share:</span>
      
      <Button
        size="sm"
        variant="outline"
        asChild
        className="h-8 w-8 p-0"
      >
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
      </Button>

      <Button
        size="sm"
        variant="outline"
        asChild
        className="h-8 w-8 p-0"
      >
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </Button>

      <Button
        size="sm"
        variant="outline"
        asChild
        className="h-8 w-8 p-0"
      >
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={copyToClipboard}
        className="h-8 w-8 p-0"
        aria-label="Copy link"
      >
        <LinkIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}

export default SocialShare;
