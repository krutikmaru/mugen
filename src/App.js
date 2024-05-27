import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
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
import Offerings from "./components/Offerings/Offerings.jsx";
import Service from "./components/Offerings/Service/Service.jsx";
import Testimonials from "./components/Landing/Testimonials/Testimonials.jsx";
import FAQ from "./components/Landing/FAQ/FAQ.jsx";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <Layout>
              <Project />
            </Layout>
          }
        />
        <Route path="/services/:id" element={<ServiceWrapper />} />
      </Routes>
    </AnimatePresence>
  );
}

function ServiceWrapper() {
  const { id } = useParams();
  return <Service key={id} />;
}

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <Offerings />
      <Testimonials />
      <FAQ />
      <Integrations />
      <Footer />
    </>
  );
};

export default App;
