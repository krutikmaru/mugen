import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#040404] ">
        <h1 className="text-purple-500 text-5xl font-bold font-lexend-deca">
          Krutik Aadi ka Project
        </h1>
        <div className="text-purple-300 mt-2 flex flex-col justify-start items-start">
          <span>Font: Lexend Deca</span>
          <span>Tailwind Installed</span>
        </div>
      </div>
    </Layout>
  );
}

export default App;
