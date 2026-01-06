import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const BuniChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  
  // Determine the actual theme for the button only (chat is always light mode)
  const actualTheme = theme === 'system' 
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;
  
  // Build embed URL with source=package parameter - always use light mode
  const params = new URLSearchParams({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiJjbWszNXRsY2IwMDAxaTMxamtvZDJjdHRlIiwib3JnSWQiOiJjbGY4cjByN2owMDAwY2FtNjJnMzAxd3dnIiwicHJvamVjdFRpdGxlIjoiUGVyc29uYWwgQm90IiwidHlwZSI6IkNIQVRCT1QiLCJyYXdUb2tlbiI6ImRZVU50NE5JWTRycW1YVDR2UkJZYVFYVGhZdzJkdUx5IiwiaWF0IjoxNzY3NzM5MTIxLCJleHAiOjE3OTkyOTY3MjF9.r6QT-h7xCWFrln--ULnYiCS63RVMhpKdcKNR8vALu5A',
    source: 'package',
    embedded: 'false',
    theme: 'light',
    primaryColor: '3b82f6',
    position: 'bottom-right',
    width: '400',
    height: '600',
    triggerText: '',
    autoOpen: 'false',
    showMinimize: 'false'
  });
  
  const embedUrl = `https://www.buni.ai/embed/chat?${params}`;
  
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[999999] rounded-full bg-[#3b82f6] hover:bg-[#2563eb] dark:bg-[#60a5fa] dark:hover:bg-[#3b82f6] text-white shadow-lg transition-all duration-300 flex items-center justify-center"
        style={{
          width: '60px',
          height: '60px'
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-5 z-[999998] shadow-2xl transition-all duration-300"
          style={{
            width: '400px',
            height: '600px',
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          <iframe
            src={embedUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '12px'
            }}
            title="Personal Bot Chat Widget"
            allow="microphone; camera"
          />
        </div>
      )}
    </>
  );
};

export default BuniChatWidget;
