import { trpc, QueryClientProvider, queryClient, trpcClient } from './lib/trpc'
import AllNews from './pages/AllNews/AllNews'

const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}

const App = () => {
  return (
    <TrpcProvider>
      <AllNews />
    </TrpcProvider>
  )
}

export { App }
