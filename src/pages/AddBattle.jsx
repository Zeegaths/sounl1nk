import React, { useState } from "react";
import MainAppWrapper from "../components/MainAppWrapper";

const AddBattle = () => {
  const [battleName, setBattleName] = useState("");
  const [battleImage, setBattleImage] = useState(null);
  const [battleTime, setBattleTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!battleName || !battleImage || !battleTime) {
      alert("Please fill out all fields!");
      return;
    }

    // Handle form submission (e.g., send data to the server or API)
    const newBattle = {
      name: battleName,
      image: battleImage,
      time: battleTime,
    };
    console.log("Battle Added:", newBattle);

    // Reset the form
    setBattleName("");
    setBattleImage(null);
    setBattleTime("");

    alert("Battle added successfully!");
  };

  return (
    <MainAppWrapper>
      <div className="add-battle-container w-[90vw] sm:w-[100%] md:w-[73vw] mx-auto mt-10">
        <h3 className="text-2xl neon-text font-bold text-center mb-8">
          Add a New Battle
        </h3>
        <form
          className="battle-form bg-gradient-to-b from-[#2E3A52] to-[#394661] p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          {/* Battle Name */}
          <div className="form-group mb-4">
            <label className="block text-white font-medium mb-2" htmlFor="name">
              Battle Name
            </label>
            <input
              type="text"
              id="name"
              value={battleName}
              onChange={(e) => setBattleName(e.target.value)}
              className="w-full p-2 rounded-lg text-black"
              placeholder="Enter battle name"
              required
            />
          </div>

          {/* Battle Image */}
          <div className="form-group mb-4">
            <label
              className="block text-white font-medium mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setBattleImage(e.target.files[0])}
              className="w-full p-2 rounded-lg text-white bg-[#394661]"
              required
            />
          </div>

          {/* Battle Time */}
          <div className="form-group mb-4">
            <label className="block text-white font-medium mb-2" htmlFor="time">
              Time for the Battle
            </label>
            <input
              type="datetime-local"
              id="time"
              value={battleTime}
              onChange={(e) => setBattleTime(e.target.value)}
              className="w-full p-2 rounded-lg text-black"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg neon-button text-white text-lg font-medium mt-4"
          >
            Add Battle
          </button>
        </form>
      </div>
    </MainAppWrapper>
  );
};

export default AddBattle;
