import { useState } from "react";
import { MdTerminal } from "react-icons/md";

import { Badge } from "@ui/Badge";
import { ModalIO } from "./ModalIO";

const successConfig = {
  0: { type: "danger", message: "Erro" },
  1: { type: "success", message: "Sucesso" },
  2: { type: "warning", message: "Tempo Excedido" },
  3: { type: "warning", message: "Memória Excedida" },
  4: { type: "danger", message: "Erro de Execução" },
};

export function TestProblem({ index, test, userCode, formatValue }) {
  const [open, setOpen] = useState(false);

  const {
    memory,
    time,
    success,
    input,
    correct_output: correctOut,
    user_output: userOut,
  } = test;

  const badge = successConfig[success] ?? {
    type: "main",
    message: "Desconhecido",
  };

  return (
    <>
      <tr className="h-12 border-y border-gray-800">
        <td className="text-gray-200 px-10 font-semibold">Teste {index + 1}</td>
        <td className="text-center font-bold">{formatValue(memory, "MB")}</td>
        <td className="text-center font-bold">{formatValue(time, "s")}</td>
        <td className="text-center">
          <Badge type={badge.type} message={badge.message} />
        </td>
        <td
          className="pr-4 text-right cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <MdTerminal className="size-6" />
        </td>
      </tr>

      {open && (
        <ModalIO
          onClose={() => setOpen(false)}
          userCode={userCode}
          input={input}
          correctOut={correctOut}
          userOut={userOut}
        />
      )}
    </>
  );
}
