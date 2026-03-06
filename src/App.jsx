import { useState } from "react";

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
      <div className="grid grid-cols-4 grid-rows-[1fr_6fr_1fr] min-h-screen gap-3">
        <div className="col-span-full bg-blue-500 flex items-center justify-center">header</div>

        <div className="col-span-1 bg-red-500 flex items-center justify-center">sidebar</div>

        <div className="col-span-3  bg-green-500 flex items-center justify-center">main page</div>

        <div className="col-span-full bg-yellow-500  flex items-center justify-center"> footer</div>
      </div>
    </>
  );
}

export default App;
