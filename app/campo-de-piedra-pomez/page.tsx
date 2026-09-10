import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campo de Piedra Pómez | Turismo Catamarca",
  description:
    "Información práctica para descubrir el Campo de Piedra Pómez en Antofagasta de la Sierra.",
};

export default function CampoDePiedraPomezPage() {
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

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:pb-24">
        <div className="flex flex-col justify-center py-4 lg:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b83a45]">
            Antofagasta de la Sierra
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[#531c27] sm:text-6xl">
            Campo de Piedra Pómez
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#633741]">
            Entre volcanes y salares, la erosión esculpió un paisaje de piedra
            clara que parece extenderse sin final sobre la puna catamarquena.
          </p>
          <p className="mt-6 max-w-xl leading-7 text-[#7b545c]">
            Sus formas volcánicas, livianas y porosas, crean pasadizos y
            miradores naturales. Es una de las postales más singulares del
            oeste de Catamarca.
          </p>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-[2rem] bg-[#d89383] shadow-[0_18px_45px_rgba(80,20,30,0.16)] sm:min-h-105">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Campo_de_Piedra_P%C3%B3mez%2C_Catamarca%2C_Argentina.jpg"
            alt="Formaciones rocosas blancas del Campo de Piedra Pómez"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <p className="absolute bottom-0 right-0 bg-[#3d1720]/80 px-3 py-2 text-xs text-white">
            Foto: {" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Campo_de_Piedra_P%C3%B3mez,_Catamarca,_Argentina.jpg"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              Rodolfo Pace
            </a>{" "}
            · {" "}
            <a
              href="https://creativecommons.org/licenses/by/2.0/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              CC BY 2.0
            </a>
          </p>
        </div>
      </section>

      <section className="border-y border-[#e6cbc4] bg-[#f7e4df]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:px-10 md:grid-cols-3 lg:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b83a45]">
              Ubicación
            </p>
            <p className="mt-3 text-lg font-semibold">El Peñón</p>
            <p className="mt-1 leading-6 text-[#7b545c]">
              Antofagasta de la Sierra, en la puna de Catamarca.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b83a45]">
              Paisaje
            </p>
            <p className="mt-3 text-lg font-semibold">Formaciones volcánicas</p>
            <p className="mt-1 leading-6 text-[#7b545c]">
              Rocas claras modeladas por el viento en un entorno de altura.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b83a45]">
              Experiencia
            </p>
            <p className="mt-3 text-lg font-semibold">Recorrido contemplativo</p>
            <p className="mt-1 leading-6 text-[#7b545c]">
              Un destino para caminar despacio y observar los contrastes de la puna.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b83a45]">
            Antes de viajar
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Recomendaciones para disfrutarlo mejor
          </h2>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl bg-white p-6 shadow-[0_8px_22px_rgba(80,20,30,0.08)]">
            <span className="text-2xl font-semibold text-[#b83a45]">01</span>
            <h3 className="mt-5 text-lg font-semibold">Prepara el abrigo</h3>
            <p className="mt-2 leading-6 text-[#7b545c]">
              La puna presenta amplitud térmica: lleva abrigo, protección solar y agua.
            </p>
          </li>
          <li className="rounded-2xl bg-white p-6 shadow-[0_8px_22px_rgba(80,20,30,0.08)]">
            <span className="text-2xl font-semibold text-[#b83a45]">02</span>
            <h3 className="mt-5 text-lg font-semibold">Respeta el entorno</h3>
            <p className="mt-2 leading-6 text-[#7b545c]">
              Cuida las formaciones, no dejes residuos y transita solo por los sectores habilitados.
            </p>
          </li>
          <li className="rounded-2xl bg-white p-6 shadow-[0_8px_22px_rgba(80,20,30,0.08)]">
            <span className="text-2xl font-semibold text-[#b83a45]">03</span>
            <h3 className="mt-5 text-lg font-semibold">Organiza el recorrido</h3>
            <p className="mt-2 leading-6 text-[#7b545c]">
              Consulta las condiciones locales y planifica la visita con tiempo suficiente.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
