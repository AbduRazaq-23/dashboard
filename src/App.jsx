import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
