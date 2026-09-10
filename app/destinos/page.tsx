import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destinos destacados | Turismo Catamarca",
  description:
    "Información para descubrir Laguna Blanca, Cuesta del Portezuelo y El Rodadero.",
};

const destinations = [
  {
    name: "Laguna Blanca",
    locality: "Belén",
    category: "Naturaleza protegida",
    description:
      "En la altura de Catamarca, esta reserva de biosfera reúne lagunas, vegas y cerros donde el paisaje andino se expresa con calma y amplitud.",
    detail:
      "Es un destino ideal para observar la puna, recorrer sus caminos con respeto por el entorno y descubrir la presencia de vicuñas en su hábitat natural.",
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
    category: "Rutas panorámicas",
    description:
      "Una ruta de curvas entre las sierras que revela el valle central desde distintos miradores a medida que se gana altura.",
    detail:
      "El recorrido invita a detenerse, contemplar el paisaje y disfrutar de una de las postales más reconocibles de la provincia.",
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
      "Dunas suaves y horizontes abiertos forman un paisaje desértico para descubrir el oeste catamarqueño a otro ritmo.",
    detail:
      "Sus relieves dorados invitan a recorrer con cuidado y a disfrutar de la inmensidad de la cordillera y el desierto.",
    image: "/tourism/el-rodadero.svg",
    alt: "Ilustración de las dunas de El Rodadero frente a las montañas",
    credit: null,
    source: null,
    license: null,
    licenseUrl: null,
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fdf3f1] text-[#3d1720]">
      <header className="mx-auto flex max-w-6xl px-6 py-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#b83a45] transition-colors hover:text-[#7f1725]"
        >
          <span aria-hidden="true">&lt;-</span> Volver al catálogo
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6 sm:px-10 lg:px-16 lg:pb-20">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b83a45]">
          Más para descubrir
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Tres paisajes, tres maneras de recorrer Catamarca.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7b545c]">
          Desde las lagunas de altura hasta las rutas serranas y el desierto,
          estos destinos invitan a mirar la provincia desde perspectivas distintas.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 pb-20 sm:px-10 lg:px-16">
        {destinations.map((destination, index) => (
          <article
            key={destination.name}
            className="grid overflow-hidden rounded-3xl bg-white shadow-[0_12px_35px_rgba(80,20,30,0.1)] md:grid-cols-2"
          >
            <div className={`relative min-h-72 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <Image
                src={destination.image}
                alt={destination.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {destination.credit ? (
                <p className="absolute bottom-0 right-0 bg-[#3d1720]/80 px-3 py-2 text-xs text-white">
                  Foto: {" "}
                  <a
                    href={destination.source ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    {destination.credit}
                  </a>{" "}
                  · {" "}
                  <a
                    href={destination.licenseUrl ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    {destination.license}
                  </a>
                </p>
              ) : (
                <p className="absolute bottom-0 right-0 bg-[#3d1720]/80 px-3 py-2 text-xs text-white">
                  Ilustración representativa
                </p>
              )}
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b83a45]">
                {destination.category}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {destination.name}
              </h2>
              <p className="mt-2 text-sm font-semibold text-[#8a5d64]">
                {destination.locality}
              </p>
              <p className="mt-6 leading-7 text-[#633741]">{destination.description}</p>
              <p className="mt-4 leading-7 text-[#7b545c]">{destination.detail}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
