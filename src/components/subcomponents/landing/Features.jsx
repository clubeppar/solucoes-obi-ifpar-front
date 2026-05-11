import { MdOutlineArticle } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { LuDumbbell } from "react-icons/lu";
const featureItems = [
  {
    title: "Todas as questões da OBI em um só lugar",
    description:
      "Explore a coleção completa de problemas da OBI e resolva desafios reais usados na competição.",
      iconPath: <MdOutlineArticle className="text-blue-600 light:text-blue-500 w-6 h-6"/>
    },
  {
    title: "Treinamento Real para Programação Competitiva",
    description:
      "Envie seu código e veja sua solução sendo avaliada automaticamente como em um juiz de competição.",
    iconPath:
      <LuDumbbell className="text-blue-600 light:text-blue-500 w-6 h-6" />,
    },
  {
    title: "Treine com Feedback de Verdade",
    description:
      "Veja o resultado completo da execução do seu código, incluindo tempo de execução e uso de memória.",
    iconPath: <VscGraph className="text-blue-600 light:text-blue-500 w-6 h-6"/>,
  },
];

export function Features() {
  return (
    <div className="feature-divider grid grid-cols-3 m-12 light:text-black">
      {featureItems.map((item) => (
        <div key={item.title} className="flex m-2">
          <div className="bg-gray-800 rounded-lg border border-blue-600 light:border-blue-500 light:bg-gray-300 w-fit h-fit p-0.5 mr-2">
            {item.iconPath}
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
