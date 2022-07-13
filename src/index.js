import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './micss.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Auth0Provider
      domain="dev-9ic69wp8.us.auth0.com"
      clientId="DtgNKI8er4TmqtYNMhr0EvmgBV21JIIA"
      redirectUri={window.location.origin}
      audience="https://juanbunesapirest.herokuapp.com/"
    >
    <App/>

  </Auth0Provider>

);
