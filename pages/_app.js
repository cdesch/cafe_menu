import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import AppLayout from '../components/layout';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
