import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: "/solucoes-obi-ifpar/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./views") },
      { find: "@shared", replacement: resolve(__dirname, "./shared/components") },
      { find: "@hooks", replacement: resolve(__dirname, "./src/hooks/index.js") },
      { find: "@pages", replacement: resolve(__dirname, "./pages") },
      { find: "@providers", replacement: resolve(__dirname, "./src/providers/index.js") },
      { find: "assets", replacement: resolve(__dirname, "./shared/images") },
    ],
  },
});
