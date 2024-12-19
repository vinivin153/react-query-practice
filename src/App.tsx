import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InfiniteScroll } from './pages/InfiniteScroll';
import { worker } from './mocks/browser';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
worker.start();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InfiniteScroll />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
