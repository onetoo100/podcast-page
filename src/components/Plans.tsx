import { plansData } from "../data/data";

const Plans = () => {
  return (
    <section className="planes seccion">
      <div className="contenedor">
        <h2>Planes</h2>
        <p className="descripcion">
          Inicia gratis, crece tu plan cuando sea necesario
        </p>

        <div className="nuestros-planes">
          {plansData.map((e, index) => (
            <div key={index} className="plan inicio">
              <h3>{e.title}</h3>
              <p className="precio">{e.price}</p>

              <ul className="listado">
                {e.list.map((e, index) => (
                  <div key={index}>
                    <li>{e.text}</li>
                  </div>
                ))}
              </ul>

              <a href="#" className="boton-plan">
                Inscribirme
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
