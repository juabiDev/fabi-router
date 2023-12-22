import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina para crear un React Router desde cero</p>
      <a href="/about">Ir a sobre nosotros</a>
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
        <a href="/">Ir a la Home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}

    </main>
  )
}

export default App
