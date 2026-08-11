import { FiCopy, FiExternalLink } from "react-icons/fi";

import { useNotification } from "@hooks";

export function CardTestData({ title, value }) {
  const { showNotification } = useNotification();

  const maxPreviewLines = 30;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      showNotification("success", "Texto copiado para área de transferência");
    } catch {
      showNotification(
        "error",
        "Houve um erro na tentativa de copiar o texto. Tente novamente mais tarde",
      );
    }
  };

  const handleOpenFull = () => {
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");

    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const previewLines = String(value ?? "").split("\n");
  const shouldTruncate = previewLines.length > maxPreviewLines;
  const previewValue = shouldTruncate
    ? `${previewLines.slice(0, maxPreviewLines).join("\n")}\n\n...`
    : value.length >= 1000
      ? value.slice(0, 1000) + "..."
      : value;

  return (
    <section className="flex flex-col rounded-xl bg-gray-800 p-4 shadow-lg gap-3">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-normal text-white">{title}</h3>
        <button
          type="button"
          onClick={handleCopy}
          className="text-gray-400 transition cursor-pointer hover:text-blue-600"
        >
          <FiCopy className="size-5" />
        </button>
      </div>

      <div>
        <pre className="p-4 whitespace-pre-wrap wrap-break-word text-gray-200">
          {previewValue}
        </pre>
      </div>

      <footer className="mt-auto flex items-center justify-center gap-2 pt-2 text-sm font-medium text-gray-400">
        <button
          type="button"
          onClick={handleOpenFull}
          className="flex items-center gap-2 transition cursor-pointer hover:text-blue-600"
        >
          <span>Ver completo</span>
          <FiExternalLink className="size-4" />
        </button>
      </footer>
    </section>
  );
}
