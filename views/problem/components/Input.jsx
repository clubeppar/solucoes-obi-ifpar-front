import { useRef, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export function Input({ fileName, file, onFileChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // file is null and inputRef is previous value: clears the value
    if (!file && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [file]);

  function handleDrop(e) {
    e.preventDefault();

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles && droppedFiles.length > 0) {
      inputRef.current.files = droppedFiles;

      onFileChange({
        target: {
          files: droppedFiles,
        },
      });
    }
  }

  return (
    <div className="flex justify-center items-center">
      <label
        htmlFor="file-upload"
        className="input-label"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={handleDrop}
      >
        {!fileName ? (
          <>
            <FaCloudUploadAlt className="w-6 h-6" />
            <h4 className="text-gray-300 light:text-gray-800">
              <span className="font-bold text-white light:text-black">
                Click to upload{" "}
              </span>
              or drag and drop
            </h4>
            <h5 className="text-xs text-gray-300 light:text-gray-800">
              py, cpp, c or java
            </h5>
          </>
        ) : (
          <>
            <h5 className="text-white light:text-black">{fileName}</h5>
            <h6 className="text-gray-300 light:text-gray-800">
              {file ? `${(file.size / 1024).toFixed(2)} KB` : ""}
            </h6>
            <p className="text-gray-400 light:text-gray-600">
              Clique para trocar o arquivo
            </p>
          </>
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept=".py, .c, .cpp, .c++, .java"
        onChange={onFileChange}
        ref={inputRef}
      />
    </div>
  );
}
