import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Layout from "./components/layout/Layout";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects.jsx";;
import { Route, Routes } from "react-router-dom";
import ProjectMain from "./components/Projects/ProjectMain.jsx";
import Project2 from "./components/Projects/Project2.jsx";
import { AnimatePresence } from "framer-motion";
import Project from "./components/Projects/Project.jsx";

function App() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project2 />} />
          <Route path="/projects/krutik" element={<Project  />}  />
          {/* <Route path="/projects" element={<Projects  />} />
        <Route path="/projects/:id" element={<ProjectMain />}  /> */}
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <Footer />
      <Landing />
      <Services />
      <Footer />
    </>
  );
};

export default App;
