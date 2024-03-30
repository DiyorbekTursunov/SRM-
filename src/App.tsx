import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import Profile from './pages/Profile';
import { Oquvchilar } from './pages/oquvchilar';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard | Admin - Admin Dashboard" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Admin - Admin Dashboard" />
              <Profile />
            </>
          }
        />
        <Route
          path="/oquvchilar"
          element={
            <>
              <PageTitle title="O'quvchilar | Admin - Admin Dashboard" />
              <Oquvchilar />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
