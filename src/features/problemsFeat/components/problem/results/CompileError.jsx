import { MdErrorOutline } from "react-icons/md";

export function CompileError({ message }) {
  const [error, fileName] = message;

  const formattedMessage = error
    .toString()
    .replace(/File\s+"[^"]+"/g, `File "*/../../${fileName}"`);

  return (
    <div className="mx-6 my-4 rounded-2xl border border-red-700 bg-red-950/50 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-red-700 bg-red-900/50 px-4 py-3">
        <MdErrorOutline className="h-6 w-6 text-red-400" />
        <h3 className="font-semibold text-red-200">Erro de compilação</h3>
      </div>

      <pre className="overflow-x-auto whitespace-pre-wrap wrap-break-word p-4 font-mono text-sm text-red-100">
        {formattedMessage}
      </pre>
    </div>
  );
}
