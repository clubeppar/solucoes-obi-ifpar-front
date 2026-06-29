import kaioImage from "../../assets/images/credits/kaio.png";
import brasilicioImage from "../../assets/images/credits/brasilicio.png";
import guilhermeImage from "../../assets/images/credits/guilherme.png";
import gabrielImage from "../../assets/images/credits/gabriel.png";
import douglasImage from "../../assets/images/credits/douglas.png";
import brunoImage from "../../assets/images/credits/bruno.png";
import leonardoImage from "../../assets/images/credits/leonardo.png";
import gustavoImage from "../../assets/images/credits/gustavo.png";
import ritaImage from "../../assets/images/credits/rita.png";
import thiagoImage from "../../assets/images/credits/thiago.png";
import alandersonImage from "../../assets/images/credits/alanderson.png";
import julioImage from "../../assets/images/credits/julio.png";
import cauaImage from "../../assets/images/credits/caua.png";
import danielImage from "../../assets/images/credits/daniel.png";

export const CONTRIBUTORS = [
  {
    name: "Kaio Henrique",
    role: "Frontend | Coordenador",
    image: kaioImage,
  },
  {
    name: "Brasilicio Campos",
    role: "Fullstack | Coordenador",
    image: brasilicioImage,
  },
  {
    name: "Guilherme Aleixo",
    role: "Backend | Coordenador",
    image: guilhermeImage,
  },
  {
    name: "Gabriel Nascimento",
    role: "Design",
    image: gabrielImage,
  },
  {
    name: "Douglas Ryan",
    role: "Frontend",
    image: douglasImage,
  },
  {
    name: "Bruno Gustavo",
    role: "Backend",
    image: brunoImage,
  },
  {
    name: "Leonardo Kauffman",
    role: "Backend",
    image: leonardoImage,
  },
  {
    name: "Gustavo Andrey",
    role: "Frontend | Design",
    image: gustavoImage,
  },
  {
    name: "Rita de Cássia",
    role: "Fullstack",
    image: ritaImage,
  },
  {
    name: "Thiago Freitas",
    role: "Frontend",
    image: thiagoImage,
  },
  {
    name: "Alanderson Lima",
    role: "Frontend",
    image: alandersonImage,
  },
  {
    name: "Júlio César",
    role: "Fullstack",
    image: julioImage,
  },
  {
    name: "Cauã de Lima",
    role: "Backend",
    image: cauaImage,
  },
  {
    name: "Daniel Aguiar",
    role: "Professor orientador",
    image: danielImage,
  },
];

CONTRIBUTORS.sort((a, b) => a.name.localeCompare(b.name));
