const featureItems = [
  {
    title: "Todas as questões da OBI em um só lugar",
    description:
      "Explore a coleção completa de problemas da OBI e resolva desafios reais usados na competição.",
    iconPath:
      "M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
  },
  {
    title: "Treinamento Real para Programação Competitiva",
    description:
      "Envie seu código e veja sua solução sendo avaliada automaticamente como em um juiz de competição.",
    iconPath:
      "m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z",
  },
  {
    title: "Treine com Feedback de Verdade",
    description:
      "Veja o resultado completo da execução do seu código, incluindo tempo de execução e uso de memória.",
    iconPath:
      "M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z",
  },
];

export default function Features() {
  return (
    <div className="feature-divider grid grid-cols-3 m-12 light:text-black">
      {featureItems.map((item) => (
        <div key={item.title} className="flex m-2">
          <div className="bg-gray-800 rounded-lg border border-blue-600 light:border-blue-500 light:bg-gray-300 w-fit h-fit p-0.5 mr-2">
            <svg
              className="text-blue-600 light:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d={item.iconPath} />
            </svg>
          </div>
          <div>
            <h6 className="text-lg font-medium">{item.title}</h6>
            <p className="text-base text-balance max-w-9/10">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
