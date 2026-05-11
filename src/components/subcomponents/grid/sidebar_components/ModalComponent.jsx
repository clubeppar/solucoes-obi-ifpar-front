import { useState } from "react";

import { GoChevronDown } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";

export function ModalComponent({ title, value, setValue, arrayValues = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (v) => {
    if (value === v) {
      setValue("");
      return;
    }
    setValue(v);
  };

  let textExibit = "";

  switch (value) {
    case "0":
      textExibit = "0";
      break;
    case "1":
      textExibit = "1";
      break;
    case "2":
      textExibit = "2";
      break;
    case "3":
      textExibit = "3";
      break;
    case "cf":
      textExibit = "Competição Feminina";
      break;
    case "j":
      textExibit = "Nível Júnior";
      break;
    case "s":
      textExibit = "Nível Sênior";
      break;
    case "u":
      textExibit = "Nível Univeritário";
      break;
  }

  return (
    <div className="px-5">
      <span className="text-sm light:text-white">{title}</span>
      <button
        type="button"
        className="flex w-full justify-between cursor-pointer gap-3 my-2 p-2 rounded-xl border border-gray-700  hover:bg-gray-600"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title == "Anos" && <IoCalendarOutline />}
        {title == "Anos" && (
          <span className="text-sm mr-auto text-gray-400">
            {value == "" ? `Selecione um Ano` : `${value}`}
          </span>
        )}
        {title == "Fases" && (
          <span className="text-sm text-gray-400">
            {value == ""
              ? `Selecione uma Fase`
              : `${value == "cf" ? `${textExibit}` : `Fase ${textExibit}`}`}
          </span>
        )}
        {title == "Níveis" && (
          <span className="text-sm text-gray-400">
            {value == ""
              ? `Selecione um Nível`
              : `${value in ["j", "s", "u"] ? `Nivel ${textExibit}` : `${textExibit}`}`}
          </span>
        )}
        <GoChevronDown
          className={`size-5 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <div className="w-full mt-2 z-50">
          <div className="border mx-5 bg-gray-800 border-gray-800 rounded-xl overflow-y-hidden">
            <div className="md:max-h-64 max-h-128 scrollbar overflow-y-auto">
              <div className="grid grid-cols-3 px-5 py-4 gap-1">
                {arrayValues.map((item) => {
                  const isSelected = value === item.key;

                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => {
                        handleSelect(item.key);
                        if (!isSelected) setIsOpen(false);
                      }}
                      className={`cursor-pointer rounded-2xl py-2 text-sm text-white transition ${
                        isSelected
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      {item.value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
