import Image from "next/image";
import Link from "next/link";

const places = [
  {
    name: "Campo de Piedra Pómez",
    locality: "El Peñón, Antofagasta de la Sierra",
    category: "Paisajes de altura",
    description:
      "Un mar de formaciones volcánicas blancas que cambia de textura y color con la luz del altiplano.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Campo_de_Piedra_P%C3%B3mez%2C_Catamarca%2C_Argentina.jpg",
    alt: "Formaciones rocosas blancas del Campo de Piedra Pómez",
    credit: "Rodolfo Pace",
    source:
      "https://commons.wikimedia.org/wiki/File:Campo_de_Piedra_P%C3%B3mez,_Catamarca,_Argentina.jpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    name: "Laguna Blanca",
    locality: "Belén",
    category: "Naturaleza protegida",
    description:
      "Una reserva de altura donde la laguna, los cerros y la fauna andina componen un paisaje sereno.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Laguna_Blanca%2C_Catamarca.JPG",
    alt: "Vista de la Reserva de la Biosfera Laguna Blanca en Catamarca",
    credit: "Florenciafinetti",
    source:
      "https://commons.wikimedia.org/wiki/File:Laguna_Blanca,_Catamarca.JPG",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    name: "Cuesta del Portezuelo",
    locality: "Valle Viejo",
    category: "Rutas panoramicas",
    description:
      "Un camino de curvas y miradores que regala una de las vistas más reconocibles del valle central.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cuesta_del_Portezuelo._Desde_la_cumbre._%281%29.jpg",
    alt: "Vista desde la cumbre de la Cuesta del Portezuelo",
    credit: "Roblespepe",
    source:
      "https://commons.wikimedia.org/wiki/File:Cuesta_del_Portezuelo._Desde_la_cumbre._(1).jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    name: "El Rodadero",
    locality: "Fiambalá, Tinogasta",
    category: "Aventura y desierto",
    description:
      "Dunas suaves, montañas abiertas y horizontes dorados para recorrer el oeste catamarqueño.",
    image: "/tourism/el-rodadero.svg",
    alt: "Ilustración de las dunas de El Rodadero frente a las montañas",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f3eb] text-[#213d3a]">
      <section className="relative overflow-hidden bg-[#254f4a] px-6 py-20 text-[#f8f1df] sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[36px] border-[#d88f4d] opacity-80" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#f1bd74]">
            Norte argentino
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Catamarca, tierra de horizontes inmensos.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#e0eadb] sm:text-xl">
            Una selección inicial de paisajes para empezar a descubrir la
            provincia entre volcanes, lagunas, rutas y desiertos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b85b31]">
              Destinos destacados
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Cuatro formas de vivir Catamarca
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#56706b]">
            Paisajes emblemáticos para planificar la próxima escapada.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {places.map((place, index) => (
            <article
              key={place.name}
              className={`group overflow-hidden rounded-3xl bg-white shadow-[0_12px_35px_rgba(33,61,58,0.1)] ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-72 sm:h-80" : "h-60"}`}>
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b85b31]">
                  {place.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#21433f]">
                  {place.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#5e7671]">
                  {place.locality}
                </p>
                <p className="mt-4 leading-7 text-[#405b56]">{place.description}</p>
                {place.credit && (
                  <p className="mt-4 text-xs text-[#6d817c]">
                    Foto: {" "}
                    <a
                      href={place.source}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-[#21433f]"
                    >
                      {place.credit}
                    </a>{" "}
                    · {" "}
                    <a
                      href={place.licenseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-[#21433f]"
                    >
                      {place.license}
                    </a>
                  </p>
                )}
                {place.name === "Campo de Piedra Pómez" && (
                  <Link
                    href="/campo-de-piedra-pomez"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#b85b31] transition-colors hover:text-[#8e4224]"
                  >
                    Conocer el destino <span aria-hidden="true">-&gt;</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d9d0bf] px-6 py-8 text-center text-sm text-[#5d706b]">
        Turismo Catamarca · Una primera guía para inspirar el viaje.
      </footer>
    </main>
  );
}
