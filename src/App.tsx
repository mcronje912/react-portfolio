// src/App.tsx
import { Routes, Route } from "react-router-dom";
import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import ContactPage from "@/pages/contact";
import AboutPage from "@/pages/about";
import EtamaxPage from "@/pages/projects/mobile/etamax";  // Keep your existing file
import ReevPage from "@/pages/projects/mobile/reev";      // Keep your existing file

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects/mobile/etamax" element={<EtamaxPage />} />
      <Route path="/projects/mobile/reev" element={<ReevPage />} />
    </Routes>
  );
};

export default App;