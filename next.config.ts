import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Campo_de_Piedra_P%C3%B3mez%2C_Catamarca%2C_Argentina.jpg",
      ),
      new URL(
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Laguna_Blanca%2C_Catamarca.JPG",
      ),
      new URL(
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cuesta_del_Portezuelo._Desde_la_cumbre._%281%29.jpg",
      ),
    ],
  },
};

export default nextConfig;
