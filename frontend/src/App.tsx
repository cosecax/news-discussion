import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider, queryClient, trpc, trpcClient } from './lib/trpc'
import { AllNews, CreateNews, DetailNews } from './pages'
import { getAllNewsRoute, getCreateNewsRoute, getDetailNewsRoute } from './lib/routes'
import { Layout } from './components'
import './styles/global.scss'

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
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllNewsRoute()} element={<AllNews />} />
            <Route path={getDetailNewsRoute({ id: ':id' })} element={<DetailNews />} />
            <Route path={getCreateNewsRoute()} element={<CreateNews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export { App }
