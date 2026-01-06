import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-116570299-1', {
  cookieDomain: 'auto',
});

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  return function TrackedComponent(props) {
    const location = useLocation();

    useEffect(() => {
      trackPage(location.pathname);
    }, [location.pathname]);

    return <WrappedComponent {...props} />;
  };
};

export default withTracker;
