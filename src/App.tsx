import { Routes, Route } from "react-router-dom";  // Only these imports needed
import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import ContactPage from "@/pages/contact";
import AboutPage from "@/pages/about";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;