"use client";
import { useState } from "react";

export default function UploadExcelPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/UploadExcel", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border w-fit space-y-4 mt-20">
      <h2 className="text-xl font-bold">Upload Excel</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
}
