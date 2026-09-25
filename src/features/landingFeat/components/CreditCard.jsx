import { FaGithub } from "react-icons/fa";

export function CreditCard({ name, role, image, github }) {
  return (
    <div className="bg-gray-900 rounded-3xl flex flex-col items-center px-11 py-8 gap-4 light:bg-slate-300 box-border">
      <div className="w-28 h-28 rounded-full overflow-hidden border-0 border-slate-600 light:border-slate-300">
        <img src={image} alt={name} />
      </div>
      <div className="text-center">
        <h3 className="w-full font-bold text-white light:text-black whitespace-nowrap">
          {name}
        </h3>
        <p className="mb-2  font-semi-bold text-[#9CA3AF] light:text-[#5CA3AF] whitespace-nowrap">
          {role}
        </p>
      </div>
      <div>
        <a
          href={github}
          className="flex items-center bg-blue-600 hover:bg-blue-700 custom-transition px-4 py-2 rounded-lg cursor-pointer text-sm leading-5 font-medium shadow-sm"
        >
          <FaGithub className="text-white bg-transparent w-6 h-6 mr-2"></FaGithub>
          GitHub
        </a>
      </div>
    </div>
  );
}