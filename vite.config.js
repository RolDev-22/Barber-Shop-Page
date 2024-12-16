import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  base: "Barber-Shop-Page", // Reemplaza <nombre-del-repositorio> con el nombre de tu repo de GitHub
});
