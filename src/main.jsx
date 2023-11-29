import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { theme, ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.compactAlgorithm,
        token: {
          colorPrimary: '#73aaf7',
          colorSuccess: '#00b176',
          colorWarning: '#e6b600',
          colorError: '#bc4328',
          colorInfo: '#0080b1',
          fontFamily:
            '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
