import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import Blog from './routes/Blog';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <QueryClientProvider client={queryClient} contextSharing>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
