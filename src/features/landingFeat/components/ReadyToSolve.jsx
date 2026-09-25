import cta from "@images/others/CTA_Image.png"
import { Link } from "react-router-dom";

export function ReadyToSolve() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-30 bg-top bg-no-repeat px-4 py-16 md:aspect-1440/496 md:py-0"
      style={{
        backgroundImage: `url(${cta})`,
        backgroundSize: "100% auto",
      }}
    >
      <h2 className="text-3xl font-bold mb-2 text-center text-balance">
        Pronto para Resolver o seu{" "}<br></br>
        <span className="text-blue-500">Primeiro Problema?</span>
      </h2>
      <Link
        to="/problems"
        className="bg-blue-600 hover:bg-blue-700 custom-transition px-4 py-2 rounded-lg cursor-pointer text-sm leading-5 font-medium shadow-sm"
      >
        Começar a praticar
      </Link>
    </div>
  )
}