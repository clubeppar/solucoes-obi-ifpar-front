import { useState } from "react";
import Landingpage from "./components/Landingpage";
import Grid from "./components/Grid";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
