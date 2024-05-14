import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(            // 화면에 랜더링
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App /> 
    </ChakraProvider>
  </React.StrictMode>
);
