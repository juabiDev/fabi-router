import { Link } from "../Link";

const i18n = {
  es: {
    title: "Sobre nosotros",
    content: "¡Hola! Me llamo Fabián Mederos y estoy creando un clon de React Router.",
    button: "Ir a la Home"
  },
  en: {
    title: "About us",
    content: "Hi! My name is Fabián Mederos and I'm creating a React Router clone.",
    button: "Go to Home"
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es")

    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://img.freepik.com/foto-gratis/lindo-gato-relajante-estudio_23-2150692717.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1703116800&semt=sph" alt="Foto de Fabián Mederos" />
          <p>{i18n.content}</p>
        </div>
        <Link to={"/"}>{i18n.button}</Link>

      </>
    )
  }