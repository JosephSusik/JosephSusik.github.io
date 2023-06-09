import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import App from './App';
import ThemeContextWrapper from './context/ThemeContextWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>
);
