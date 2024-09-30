import { Route, Routes } from "react-router-dom";

import ReevProjectPage from "./pages/projects/mobile/reev";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ReevProjectPage />} path="/projects/mobile/reev" />
    </Routes>
  );
}

export default App;
