import image from "../assets/grafica.svg";

const Statistics = () => {
  return (
    <section className="estadisticas seccion contenedor">
      <h2>Estadísticas Detalladas</h2>
      <p>
        Nosotros lo distribuimos a las plataformas más populares como Google
        Podcast, Spotify, Apple Podcast y YouTube.
      </p>

      <img src={image} alt="grafica imagen" />
    </section>
  );
};

export default Statistics;
