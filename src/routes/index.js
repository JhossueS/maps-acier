import { Route, Switch } from 'wouter'
import App from '../pages'
import Map from '../pages/Map'

const RouteApp = () => (
  <>
    <Switch>
      <Route path='/' component={App} />
      <Route path='/map' component={Map} />
    </Switch>
  </>
)

export default RouteApp
