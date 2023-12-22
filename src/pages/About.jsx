import { Link } from "../Link";

export default function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://img.freepik.com/foto-gratis/lindo-gato-relajante-estudio_23-2150692717.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1703116800&semt=sph" alt="Foto de Fabián Mederos" />
          <p>¡Hola! Me llamo Fabián Mederos y estoy creando un clon de React Router.</p>
        </div>
        <Link to={"/"}>Ir a la Home</Link>

      </>
    )
  }