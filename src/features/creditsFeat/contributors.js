import kaioImage from "@images/credits/kaio.png";
import brasilicioImage from "@images/credits/brasilicio.png";
import guilhermeImage from "@images/credits/guilherme.png";
import gabrielImage from "@images/credits/gabriel.png";
import douglasImage from "@images/credits/douglas.png";
import brunoImage from "@images/credits/bruno.png";
import leonardoImage from "@images/credits/leonardo.png";
import gustavoImage from "@images/credits/gustavo.png";
import ritaImage from "@images/credits/rita.png";
import thiagoImage from "@images/credits/thiago.png";
import alandersonImage from "@images/credits/alanderson.png";
import julioImage from "@images/credits/julio.png";
import cauaImage from "@images/credits/caua.png";
import danielImage from "@images/credits/daniel.png";
import jadeImage from "@images/credits/jade.png";
import nicholasImage from "@images/credits/nicholas.png";

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
  {
    name: "Jade Raquel",
    role: "Design",
    image: jadeImage,
  },
  {
    name: "Nicholas",
    role: "Backend",
    image: nicholasImage,
  },
];

CONTRIBUTORS.sort((a, b) => a.name.localeCompare(b.name));
