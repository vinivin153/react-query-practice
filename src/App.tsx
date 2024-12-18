import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InfiniteScroll } from './pages/InfiniteScroll';
import { worker } from './mocks/browser';

const queryClient = new QueryClient();
worker.start();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InfiniteScroll />
    </QueryClientProvider>
  );
}

export default App;
