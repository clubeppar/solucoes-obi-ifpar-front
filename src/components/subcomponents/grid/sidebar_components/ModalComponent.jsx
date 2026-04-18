import { useState } from "react";

import { GoChevronDown } from "react-icons/go";

export default function ModalComponent({
  title,
  value,
  setValue,
  arrayValues = [],
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (v) => {
    if (value === v) {
      setValue("");
      return;
    }
    setValue(v);
  };

  return (
    <>
      <button
        type="button"
        className="flex w-full cursor-pointer gap-3 py-2 hover:bg-black/50"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GoChevronDown className={`${isOpen ? "rotate-180" : "rotate-0"}`} />
        <span className="text-sm">{title}</span>
      </button>

      {isOpen && (
        <div className="border border-gray-700 px-5 py-4">
          <div className="grid grid-cols-3 gap-3">
            {arrayValues.map((item) => {
              const isSelected = value === item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleSelect(item.key)}
                  className={`cursor-pointer rounded-2xl py-2 text-sm text-white transition ${
                    isSelected
                      ? "bg-amber-700 hover:bg-amber-600"
                      : "bg-gray-700 hover:bg-red-400"
                  }`}
                >
                  {item.value}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
