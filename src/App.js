import "./App.css";
// import Hero from "./components/Hero/Hero";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Landing />
      <Services />
    </Layout>
  );
}

export default App;
