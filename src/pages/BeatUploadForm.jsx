import React, { useState } from "react";

const BeatUploadForm = () => {
  const [beatData, setBeatData] = useState({
    audio: null,
    cover: null,
    name: "",
    description: "",
    price: "",
  });

  const [preview, setPreview] = useState({
    audio: null,
    cover: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBeatData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setBeatData((prev) => ({ ...prev, [name]: file }));

    if (name === "cover") {
      const reader = new FileReader();
      reader.onload = () => setPreview((prev) => ({ ...prev, cover: reader.result }));
      reader.readAsDataURL(file);
    }

    if (name === "audio") {
      const audioURL = URL.createObjectURL(file);
      setPreview((prev) => ({ ...prev, audio: audioURL }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Beat Data: ", beatData);
    alert("Beat uploaded successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Upload Your Beat</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Beat Name */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Beat Name</label>
          <input
            type="text"
            name="name"
            value={beatData.name}
            onChange={handleInputChange}
            placeholder="Enter beat name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={beatData.description}
            onChange={handleInputChange}
            placeholder="Enter a short description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Price (ETH)</label>
          <input
            type="number"
            name="price"
            value={beatData.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Cover Image</label>
          <input
            type="file"
            name="cover"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          {preview.cover && (
            <img
              src={preview.cover}
              alt="Cover Preview"
              className="w-full mt-4 rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Audio File */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Audio File</label>
          <input
            type="file"
            name="audio"
            accept="audio/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          {preview.audio && (
            <audio controls src={preview.audio} className="mt-4 w-full rounded-lg" />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
        >
          Upload Beat
        </button>
      </form>
    </div>
  );
};

export default BeatUploadForm;
