import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import './index.css';

// step required to use useMutation for react-query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
