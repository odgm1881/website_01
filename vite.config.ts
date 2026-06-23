import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base keeps the build portable: works from a domain root,
// a GitHub Pages project subpath, or `vite preview` without changes.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
