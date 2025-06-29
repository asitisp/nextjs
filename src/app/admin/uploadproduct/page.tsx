"use client";

import React, { useState } from "react";
import { ProductType } from "@/types/product";
import Image from "next/image";

export default function UploadProductForm() {
  const [product, setProduct] = useState<Omit<ProductType, "_id" | "imageUrl">>({
    title: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    rating: 0,
  });

  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: ["price", "stock", "rating"].includes(name)
        ? parseFloat(value)
        : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages(fileArray);
      const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
      setPreviews(previewUrls);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      images.forEach((img) => formData.append("images", img));
      formData.append("title", product.title);
      formData.append("description", product.description);
      formData.append("price", String(product.price));
      formData.append("category", product.category);
      formData.append("stock", String(product.stock));
      formData.append("rating", String(product.rating));

      const res = await fetch("/api/imageupload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }

      setSuccess("Product uploaded successfully!");
      setProduct({
        title: "",
        description: "",
        price: 0,
        category: "",
        stock: 0,
        rating: 0,
      });
      setImages([]);
      setPreviews([]);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Something went wrong.");
    }

    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 5000);
    setImages([]);
    setPreviews([]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Product</h2>
      {success && <p className="text-green-600 text-center">{success}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          type="text"
          value={product.title}
          onChange={handleChange}
          placeholder="Title"
          className="input input-bordered"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered"
          required
        />
        <input
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered"
          required
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previews.map((src,idx) => (
            <Image
              key={idx}
              src={src}
              alt={`preview-${idx}`}
              className="w-full h-32 object-cover rounded"
            />
          ))}
        </div>
        <input
          name="category"
          type="text"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="input input-bordered"
          required
        />
        <input
          name="stock"
          type="number"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="input input-bordered"
        />
        <input
          name="rating"
          type="number"
          value={product.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="input input-bordered"
        />
        <button
          type="submit"
          className="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
