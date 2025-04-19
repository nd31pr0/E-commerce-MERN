import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Provider } from "@/components/ui/provider"
import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
)
