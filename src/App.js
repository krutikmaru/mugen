import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
// import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/Project.jsx";
import "./App.css";
import Projects from "./components/Projects/Projects.jsx";
import Integrations from "./components/Integrations/Integrations.jsx";

function App() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
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
      <Integrations />
      <Footer />
    </>
  );
};

export default App;
