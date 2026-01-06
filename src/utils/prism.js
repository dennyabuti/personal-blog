import { useEffect } from 'react';
import Prism from 'prismjs';

// Import Prism themes
import 'prismjs/themes/prism-tomorrow.css';

// Import language support
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-sql';

// Import plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

/**
 * Hook to enable Prism.js syntax highlighting
 * Call this in any component that renders code blocks
 */
export const usePrism = () => {
  useEffect(() => {
    // Highlight all code blocks
    Prism.highlightAll();
  }, []);
};

/**
 * Utility function to manually highlight code blocks
 * Useful when content is dynamically loaded
 */
export const highlightCode = () => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 0);
};

export default Prism;
