import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook to scroll to the top of the page on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything
}

export default ScrollToTop; 