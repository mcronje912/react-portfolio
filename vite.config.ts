// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/react-portfolio/", // GitHub Pages requires this to match your repo name
  plugins: [react(), tsconfigPaths()],
});
