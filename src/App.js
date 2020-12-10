import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import 'bootstrap'

import Home from './pages/Home'
import Todos from './pages/Todos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar logo={logo} />
      <div className="container my-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todolist" component={Todos} />
          <Route render={() => <h1 className="text-center">404 Not Found</h1>} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App
