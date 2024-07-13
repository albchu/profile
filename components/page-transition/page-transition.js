import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './page-transition.module.css';

// THIS ISNT FUCKING WORKING NICELY> WHYYYYY
const PageTransition = ({ children }) => {
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fade-enter');

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setTransitionStage('fade-exit');
    };

    const handleRouteChangeComplete = () => {
      setTransitionStage('fade-enter');
      setDisplayChildren(children);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events, children]);

  useEffect(() => {
    if (transitionStage === 'fade-exit') {
      const timeout = setTimeout(() => {
        setTransitionStage('fade-enter');
        setDisplayChildren(children);
      }, 500); // Match this duration with your CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [transitionStage, children]);

  return (
    <div className={`${styles[transitionStage]} ${styles['fade-enter-active']}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;