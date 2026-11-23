import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

export function LanguagesDropdown({ selectedLanguage, arrayValues, onSelect }) {
  const [language, setLanguage] = useState(selectedLanguage);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (v) => {
    setLanguage(v);
    setIsOpen(false);
    onSelect(v);
  };

  return (
    <div className="px-5">
      <button
        type="button"
        className="flex w-full justify-between cursor-pointer gap-3 my-2 p-2 rounded-xl border border-gray-700  hover:bg-gray-600"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {arrayValues.find((item) => item.key === language)?.value ?? language}
        <GoChevronDown
          className={`size-5 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-1 p-2 w-[calc(100%-40px)] absolute z-50 bg-gray-800 rounded-xl">
          {arrayValues.map((item) => {
            const isSelected = language === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  handleSelect(item.key);
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
      )}
    </div>
  );
}
