import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Project from "./components/Projects/Project.jsx";
import "./App.css";
import Projects from "./components/Projects/Projects.jsx";
import Integrations from "./components/Integrations/Integrations.jsx";
import Offerings from "./components/Offerings/Offerings.jsx";
import Service from "./components/Offerings/Service/Service.jsx";
import FAQ from "./components/Landing/FAQ/FAQ.jsx";
import Test from "./components/Test/Test.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions.jsx";
import Contact from "./components/Contact/Contact.jsx";

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
        <Route
          path="/test"
          element={
            <Layout>
              <Test />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />
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
      <Integrations />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <FAQ />
    </>
  );
};

export default App;
