import { StoreProvider } from './context/AppContext'
import RouteApp from './routes'

function App () {
  return (
    <StoreProvider>
      <RouteApp />
    </StoreProvider>
  )
}

export default App
