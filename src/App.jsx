import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = "pushstate"

function navigate (href) {
  window.history.pushState({}, "", href)
  // crear un evento personalizado
  const navigationEvent = new Event(NAVIGATION_EVENT)
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

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
