import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import customeTheme from './../theme';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <ChakraProvider theme={customeTheme}>
   <App />
  </ChakraProvider> 
  </React.StrictMode>,
)
