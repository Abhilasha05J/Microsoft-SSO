import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import {msalConfig} from './authConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const msalInstance = new PublicClientApplication(msalConfig);

if(!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length>0) {
msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
}

msalInstance.addEventCallback((event) => {
  if(event.eventType === EventType.LOGIN_SUCCESS && event.payload.account){
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App instance={msalInstance} />
);


