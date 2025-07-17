import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const useAnchorLinks = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
};

