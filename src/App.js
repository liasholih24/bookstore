import withRoot from './modules/withRoot';

import React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import Routes from './routes';
import './App.css';

function App() {
  return ( 
    <React.Fragment>
    <AppAppBar />
    <Routes/>
    <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
