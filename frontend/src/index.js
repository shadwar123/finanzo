import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-cx7dhujawm7zcf4h.us.auth0.com"
    clientId="l4HhpKybUfCWiQgu7Y2tpLXSIlNEnNwQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Auth0Provider>,
);

