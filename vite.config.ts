import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/react-portfolio/', // Changed from './' to '/react-portfolio/'
  plugins: [react(), tsconfigPaths()],
});