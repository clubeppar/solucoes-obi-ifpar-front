import { useState } from "react";
import Topbar from "./components/Topbar";

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
        <div className="col-span-full bg-slate-800 flex items-center">
          <Topbar />
        </div>

        <div className="col-span-1 bg-slate-800 flex items-center justify-center">sidebar</div>

        <div className="col-span-3  bg-slate-800 flex items-center justify-center">main page</div>

        <div className="col-span-full bg-yellow-500  flex items-center justify-center"> footer</div>
      </div>
    </>
  );
}

export default App;
