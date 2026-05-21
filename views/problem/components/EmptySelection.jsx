import { PiSmileySad } from "react-icons/pi";

export function EmptySelection() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <PiSmileySad className="size-16 text-gray-500"/>
      <p className="text-2xl text-gray-500">Nenhum problema selecionado ainda</p>
    </div>
  );
}
