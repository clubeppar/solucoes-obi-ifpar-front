export default function Input({ fileName, file, onFileChange }) {
  return (
    <div className="flex justify-center items-center">
      <label
        htmlFor="file-upload"
        className="bg-gray-800 light:bg-gray-400 w-19/20 cursor-pointer p-4 rounded-xl flex flex-col items-center gap-2"
      >
        {!fileName ? (
          <>
            <svg
              className="text-xl light:text-black"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
            </svg>
            <h4 className="text-gray-300 light:text-gray-800">
              <span className="font-bold text-white light:text-black">Click to upload </span>
              or drag and drop
            </h4>
            <h5 className="text-xs text-gray-300 light:text-gray-800">py, js, ts, cpp, or cs</h5>
          </>
        ) : (
          <>
            <h5 className="text-white light:text-black">{fileName}</h5>
            <h6 className="text-gray-300 light:text-gray-800">
              {file ? `${(file.size / 1024).toFixed(2)} KB` : ""}
            </h6>
            <p className="text-gray-400 light:text-gray-600">Clique para trocar o arquivo</p>
          </>
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={onFileChange}
      />
    </div>
  );
}
