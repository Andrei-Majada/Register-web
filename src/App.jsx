import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Global from './styles/global';
import Routes from './routes';
import { AuthProvider } from './hooks/useAuth';

const App = () => (
  <AuthProvider>
    <Router>
      <Global />
      <Routes />
    </Router>
  </AuthProvider>
)

export default App;
