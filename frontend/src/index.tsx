import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, theme } from 'antd';
import enUS from 'antd/es/locale/en_US';
import Context from './components/Context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context>
    <ConfigProvider
          locale={enUS}
          theme={{
            inherit: false,
            algorithm: theme.darkAlgorithm,
            token: {
              colorText: 'white',
              colorTextHeading: 'white',
            },
            components: {
              Typography: {
                colorText: 'white',
                colorTextHeading: 'white',
              },
            },
          }}
    
    >
      <App />
    </ConfigProvider>
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
