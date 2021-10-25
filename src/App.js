import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'

//Component
function App() {
  //La structure de Navigation, présentation de page, composants et liens 
  return (
    <Router>
      <Navbar />
      <Switch>
        {/*Les routes de pages et leur liens */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App