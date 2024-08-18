import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import DefaultLayout from './layouts/admin/DefaultLayout';
import ECommerce from './pages/admin/Dashboard/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

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
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title=" Dashboard | Koperasi  " />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title=" Profile " />
              <Profile />
            </>
          }
        />

        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
