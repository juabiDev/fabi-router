import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './pages/404'
import SearchPage from './pages/SearchPage'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const routes = [
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/about",
    Component: AboutPage
  },
  {
    path: "/search/:query",
    Component: SearchPage
  }
]



function App() {

  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/search/:query" Component={SearchPage} />
      </Router>
    </main>
  )
}

export default App
