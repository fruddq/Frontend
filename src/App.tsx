import React from 'react'
import { Router, Route, BaseLocationHook } from 'wouter'
import { useLocationProperty, navigate } from 'wouter/use-location'
import { Table } from './components/Table'
import { About } from './routes/About'
import { Home } from './routes/Home'
import { Login } from './routes/RouteLogin'
import { RouteRegister } from './routes/RouteRegister'

const hashLocation = () => window.location.hash.replace(/^#/, '') || '/'
const hashNavigate = (to: string) => navigate(`#${to}`)
const useHashLocation: BaseLocationHook = () => {
  const location = useLocationProperty(hashLocation)
  return [location, hashNavigate]
}

export const App: React.FunctionComponent = () => (
  <Router hook={useHashLocation}>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={RouteRegister} />
    <Route path="/about" component={About} />
    <Route path="/table/:tableID">
      {({ tableID }) => <Table tableID={parseInt(tableID || '0', 10)} />}
    </Route>
  </Router>
)
