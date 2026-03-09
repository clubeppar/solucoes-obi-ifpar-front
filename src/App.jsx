import { useState } from "react";
import Topbar from "./components/Topbar";
import Landingpage from "./components/Landingpage";
import Footer from "./components/Footer";
import Grid from "./components/Grid";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  async function callApi(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error calling API:", error);
      setMessage("Error calling API");
    }
  }

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
        <div className="col-span-full bg-gray-950 flex items-center">
          <Topbar />
        </div>

        <Grid />
        
        <Footer />
      </div>
      <Landingpage />
    </>
    
  );
}

export default App;
