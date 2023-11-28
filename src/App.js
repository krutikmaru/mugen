import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Layout from "./components/layout/Layout";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects.jsx";
import { Route, Routes } from "react-router-dom";
import ProjectMain from "./components/Projects/ProjectMain.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectMain />} />
      </Routes>
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
