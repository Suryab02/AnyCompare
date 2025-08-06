"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void;
}

export function UploadZone({ onFilesSelected }: UploadZoneProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: string | any[]) => {
      setError(null);

      if (fileRejections.length > 0) {
        setError("Only PDF or DOCX files are allowed.");
        return;
      }

      onFilesSelected(acceptedFiles);
    },
    [onFilesSelected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    multiple: false, // accept only one file per upload zone
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-md p-8 cursor-pointer text-center
        ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
      `}
    >
      <input {...getInputProps()} />
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : isDragActive ? (
        <p className="text-sm text-blue-700">Drop your file here...</p>
      ) : (
        <p className="text-sm text-gray-600">
          Drag & drop a PDF or DOCX file here, or click to select
        </p>
      )}
    </div>
  );
}
