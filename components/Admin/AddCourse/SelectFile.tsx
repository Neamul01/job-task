"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function SelectFile({ height }: { height: string }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };
  return (
    <div
      className={`${twMerge(
        `flex flex-col items-center justify-center p-4 border border-dashed border-gray-400 rounded-lg space-y-4 h-[300px] ${
          height && `h-[${height}]`
        }`
      )}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {selectedFile ? (
        <>
          <button onClick={handleRemoveFile} className="text-red-500">
            Remove
          </button>
          <span>{selectedFile.name}</span>
        </>
      ) : (
        <>
          <label htmlFor="fileInput" className="cursor-pointer">
            <div className="relative h-16 flex items-center w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <span className="text-gray-500">
              Drop files here or click to upload.
            </span>
          </label>
          <input
            type="file"
            id="fileInput"
            accept=".jpg, .png, .pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </>
      )}
      <input
        type="file"
        accept=".jpg, .png, .pdf"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
