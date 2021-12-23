import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Global from './styles/global';
import Routes from './routes';

const App = () => (
  <Router>
    <Global />
    <Routes />
  </Router>
)

export default App;
