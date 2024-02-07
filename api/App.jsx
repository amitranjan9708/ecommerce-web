import React from 'react'
import pay from '../payment/pay';
const App = () => {
  return (
    <div>
        <Router>
        <Switch>
        <Route path="/pay">
            <pay/>
        </Route>
        </Switch>
        </Router>
    </div>
  )
}

export default App;
