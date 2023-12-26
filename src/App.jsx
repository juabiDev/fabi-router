import { Suspense, lazy } from 'react'

import './App.css'
import Page404 from './pages/404'
import SearchPage from './pages/SearchPage'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage,
  }
]


function App() {

  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/search/:query" Component={SearchPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
