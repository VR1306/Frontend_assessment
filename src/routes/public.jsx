import React, { useCallback, useContext, useEffect } from 'react';
import AssessmentContext from '../context';
import { Outlet } from 'react-router-dom';
import Offline from '../components/common/offline/index';

// Lazy load Layout
const Layout = React.lazy(() => import('../layouts/landing-layout'));

const Public = () => {
  const { isOffline, setIsOffline } = useContext(AssessmentContext);

  useEffect(() => {
    if (!setIsOffline) {
      return;
    }

    function onlineHandler() {
      setIsOffline(false);
    }

    function offlineHandler() {
      setIsOffline(true);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, [setIsOffline]);

  console.log("Current isOffline:", isOffline);

  const renderOutlets = useCallback(() => {
    return isOffline ? <Offline /> : <Outlet />;
  }, [isOffline]);

  return <Layout>{renderOutlets()}</Layout>;
};

export default Public;
