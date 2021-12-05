import React from 'react'
import Employee from './components/Employee'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../src/App.css'

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Employee} />
           
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  )
}

export default App
