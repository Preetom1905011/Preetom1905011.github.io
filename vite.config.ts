import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Keep generated asset URLs relative so the site also works when it is
  // published from a subdirectory (for example, GitHub Pages project sites).
  base: "./",
  plugins: [react()],
});
