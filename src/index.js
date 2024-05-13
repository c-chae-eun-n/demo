import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(            // 화면에 랜더링
  <React.StrictMode>    // 디버깅에 필요한 엘리먼트 따라서 개발단계에서만 유효하고, 있어도 없어도 상관X
    <App />             // App.js에서 export한 app임
  </React.StrictMode>
);
