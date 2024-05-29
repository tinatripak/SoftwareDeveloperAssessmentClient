import React, { useState } from "react";
import { createStylistService } from "../services/api";

const AddService = () => {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newService = { name, shortDescription, fullDescription, price };
      await createStylistService(newService);
      alert("Service created successfully!");
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  return (
    <div>
      <h1>Add New Service</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Short Description:</label>
          <input
            type="text"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Full Description:</label>
          <textarea
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
