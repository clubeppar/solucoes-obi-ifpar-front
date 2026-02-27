import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Site SOLUÇÕES OBI IFPAR</p>
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
    </>
  );
}

export default App;
