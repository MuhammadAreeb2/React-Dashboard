// App.js

import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import ResetPass from './pages/Authentication/ResetPassword';
import UpdatePass from './pages/Authentication/updatepassword';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Simulating loading delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const [token, setToken] = useState('');

  const authenticatedRoutes = [
    {
      path: '/dashboard',
      element: <ECommerce />,
    },
    {
      path: '/calendar',
      element: <Calendar />,
    },
    {
      path: '/chart',
      element: <Chart />,
    },
    {
      path: '/forms/form-elements',
      element: <FormElements />,
    },
    {
      path: '/forms/form-layout',
      element: <FormLayout />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/tables',
      element: <Tables />,
    },
    {
      path: '/ui/alerts',
      element: <Alerts />,
    },
    {
      path: '/ui/buttons',
      element: <Buttons />,
    },
  ];

  const tokenz = localStorage.getItem('token')
  const hasValidToken = Boolean(tokenz);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          hasValidToken ? (
            <Navigate to="/dashboard" />
          ) : (
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          )
        }
      />
      <Route path="/forgotpassword" element={<ResetPass />} />
      <Route path="/updatepassword" element={<UpdatePass />} />
      <Route
        path="/signin"
        element={
          hasValidToken ? (
            <Navigate to="/dashboard" />
          ) : (
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn setToken={setToken} />
            </>
          )
        }
      />

      {authenticatedRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={hasValidToken ? route.element : <Navigate to="/signin" />}
        />
      ))}
    </Routes>
  );
}

export default App;
