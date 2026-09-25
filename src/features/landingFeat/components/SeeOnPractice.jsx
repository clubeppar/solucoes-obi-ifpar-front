let boxex = [
  {
    size: 3,
    h1: "Todos os Desafios em Um Só Lugar",
    p: "Navegue por problemas da OBI e encontre o próximo desafio para colocar seus conhecimentos em prática.",
    img: "src/assets/images/others/capivara_NotFound.png",
  },
  {
    size: 3,
    h1: "Testes Automatizados",
    p: "Envie seu código e receba uma avaliação automática da sua solução, com resultados detalhados sobre os testes executados.",
    img: "src/assets/images/others/capivara_NotFound.png",
  },
];

const spanClassBySize = {
  2: "col-span-2",
  3: "col-span-3",
};

export function SeeOnPractice() {
  return (
    <div className="m-12">
      <h2 className="text-center text-3xl font-bold light:text-black">
        Veja na prática
      </h2>
      <div className="flex justify-center items-center w-full light:text-black">
        <div className="grid grid-cols-6 w-7/8">
          {boxex.map((box, index) => (
            <div
              key={index}
              className={`${spanClassBySize[box.size] ?? "col-span-1"} bg-gray-800 light:bg-gray-300 m-2 p-4 rounded-lg text-balance`}
            >
              <h3 className="text-xl font-bold">{box.h1}</h3>
              <p>{box.p}</p>
              {box.img && <img src={box.img} alt={box.h1} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
