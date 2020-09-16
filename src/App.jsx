import React from 'react';
import './App.css';

import HomePage from 'app/pages/Home';
import AppHeader from 'app/layouts/AppHeader';
import AppFooter from 'app/layouts/AppFooter';

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