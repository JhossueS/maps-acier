import { StoreProvider } from './context/AppContext'
import Map from './pages/Map'

function App () {
  return (
    <StoreProvider>
      <Map />
    </StoreProvider>
  )
}

export default App
