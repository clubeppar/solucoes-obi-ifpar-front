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
      <p className="text-3xl">Site SOLUÇÕES OBI IFPAR</p>
      <br />
      <br />
      <p>
        Visite{" "}
        <a href="https://portal.ifrn.edu.br/campus/parnamirim/">
          site do ifpar
        </a>
      </p>
      <br />
      <p>
        Visite <a href="https://olimpiada.ic.unicamp.br/">site da obi</a>
      </p>
      <br />
      <p>
        Visite{" "}
        <a href="https://github.com/G-Aleixo/solucoes-obi-ifpar">
          repositório do github
        </a>
      </p>
      <br />
      <p>
        Entre{" "}
        <a href="https://chat.whatsapp.com/IXQqdIxEMGTKNp0Sz5w8sI">
          no grupo do whatsapp
        </a>
      </p>
      <br />
      <br />
      <br />
      <p>Contador porque sim: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <br />
      <br />
      <br />
      <button onClick={callApi}>Chamar API de teste</button>
      {message && <p>Resposta da API: {message}</p>}
    </>
  );
}

export default App;
