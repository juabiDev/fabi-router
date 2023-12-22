import { useEffect, useState } from 'react'
import { EVENTS } from './consts'
import './App.css'

function navigate (href) {
  window.history.pushState({}, "", href)
  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina para crear un React Router desde cero</p>
      <button onClick={() => navigate("/about")}>Ir a sobre nosotros</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://img.freepik.com/foto-gratis/lindo-gato-relajante-estudio_23-2150692717.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1703116800&semt=sph" alt="Foto de Fabián Mederos" />
        <p>¡Hola! Me llamo Fabián Mederos y estoy creando un clon de React Router.</p>
      </div>
        <button onClick={() => navigate("/")}>Ir a la Home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}

    </main>
  )
}

export default App
