import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_AWS_AUTH_REGION,
    userPoolId: process.env.REACT_APP_AWS_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_AUTH_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: process.env.REACT_APP_AWS_AUTH_IDENTITY_POOL_ID,
    mandatorySignIn: process.env.REACT_APP_AWS_AUTH_MANDATORY_SIGNIN,
  },
});

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
};

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
