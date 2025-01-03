import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import { AppProvider } from './context/productcontext.jsx'
import {FilterContextProvider} from './context/Filter_Context.jsx';
import { CartProvider } from './context/cart_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
const domainName = import.meta.env.VITE_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;

if (!domainName || !clientId) {
  console.error('Environment variables are not defined!');
}

root.render(
  <Auth0Provider
    domain={domainName}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);