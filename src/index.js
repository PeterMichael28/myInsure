import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserAuthProvider } from './Context/UserAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <UserAuthProvider>
    <App />
    </UserAuthProvider>
  </React.StrictMode>
);

