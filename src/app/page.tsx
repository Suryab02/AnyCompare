"use client";

import { useState } from "react";
import { UploadZone } from "@/components/UploadZone";

export default function Page() {
  const [fileA, setFileA] = useState<File | null>(null);
  const [fileB, setFileB] = useState<File | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  const [result, setResult] = useState<string | null>(null); // You can adapt the type later

  const handleCompare = async () => {
    if (!fileA || !fileB) return;

    setIsComparing(true);
    setResult(null);

    try {
      // For now, just a placeholder.
      // Later, you'll send files to your API and get a comparison result
      
      // Example: simulate API delay
      await new Promise((res) => setTimeout(res, 1500));

      // Temporary dummy result:
      setResult("Comparison complete! Display your comparison results here.");
    } catch (error) {
      setResult("Failed to compare files. Please try again.");
    } finally {
      setIsComparing(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-center text-3xl font-bold mb-8">Any Compare</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload File A */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Upload File A</h2>
          <UploadZone onFilesSelected={(files) => setFileA(files[0])} />
          {fileA && <p className="mt-2 text-center text-gray-700">Selected: {fileA.name}</p>}
        </div>

        {/* Upload File B */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Upload File B</h2>
          <UploadZone onFilesSelected={(files) => setFileB(files[0])} />
          {fileB && <p className="mt-2 text-center text-gray-700">Selected: {fileB.name}</p>}
        </div>
      </div>

      {/* Compare Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleCompare}
          disabled={!fileA || !fileB || isComparing}
          className={`px-6 py-3 font-semibold rounded-md text-white transition ${
            !fileA || !fileB || isComparing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isComparing ? "Comparing..." : "Compare"}
        </button>
      </div>

      {/* Result Display */}
      {result && (
        <div className="mt-6 max-w-3xl mx-auto p-4 border rounded bg-gray-50 text-center">
          {result}
        </div>
      )}
    </div>
  );
}
