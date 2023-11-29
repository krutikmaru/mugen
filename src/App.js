import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
// import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects.jsx";
import ProjectMain from "./components/Projects/ProjectMain.jsx";
import Project2 from "./components/Projects/Project2.jsx";
import Project from "./components/Projects/Project.jsx";
import "./App.css";
import Project3 from "./components/Projects/Project3.jsx";

function App() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project3 />} />
          {/* <Route path="/projects/krutik" element={<Project />}  /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/projects/:id" element={<ProjectMain />} />
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
    </>
  );
};

export default App;
