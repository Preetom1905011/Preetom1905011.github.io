import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Keep generated asset URLs relative so the site also works when it is
  // published from a subdirectory (for example, GitHub Pages project sites).
  base: "./",
  define: {
    __BUILD_DATE__: JSON.stringify(
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "America/New_York",
      }).format(new Date()),
    ),
  },
  plugins: [react()],
});
