import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import Layout from './components/Layout.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
