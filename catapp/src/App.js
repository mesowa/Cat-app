import React from 'react'
import Home from './components/Home'
import CatPage from './components/CatPage'
import FelineFilter from './components/FelineFilter'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path= "/Home">
            <Home />
          </Route >
          <Route exact path= "/CatPage">
            <CatPage />
          </Route>
          <Route exact path="/FelineFilter">
            <FelineFilter />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
