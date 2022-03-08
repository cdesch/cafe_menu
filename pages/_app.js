import '../styles/globals.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
import AppLayout from './components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        
      </QueryClientProvider>
    </div>

  )
  // return <Component {...pageProps} />
}

export default MyApp
