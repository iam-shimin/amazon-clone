import React from 'react';
import './App.css';

import HomePage from 'pages/Home';
import AppHeader from 'layouts/AppHeader';
import AppFooter from 'layouts/AppFooter';

function App() {
  return (
    <>
      <AppHeader />
      <HomePage /> {/* TODO: add router, routes here */}
      <AppFooter />
    </>
  );
}

export default App;