import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import ReevProjectPage from "@/pages/projects/mobile/reev";
import EtamaxProjectPage from "@/pages/projects/mobile/etamax";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<ReevProjectPage />} path="/projects/mobile/reev" />
      <Route element={<EtamaxProjectPage />} path="/projects/mobile/etamax" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;