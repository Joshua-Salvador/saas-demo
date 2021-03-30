import React, { useState } from "react";
import "../../../tailwind.css";
import axios from "../../../axios";
function Asset() {
  const [asset, setAsset] = useState({
    name: "",
    quantity: 0,
    costPerUnit: 0,
    reusable: false,
  });
  const handleChange = (e) => {
    switch (e.target.name) {
      case "reusable":
        return setAsset((asset) => ({
          ...asset,
          reusable: !asset.reusable,
        }));
      default:
        return setAsset((asset) => ({
          ...asset,
          [e.target.name]: e.target.value,
        }));
    }
  };
  const createAsset = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/assets/", asset);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="font-nunito rounded-md m-72 px-4 py-8 shadow text-left">
      <form onSubmit={createAsset}>
        <div className="container">
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Name: </h3>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={asset.name}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Quantity: </h3>
            <input
              onChange={handleChange}
              type="number"
              min={0}
              name="quantity"
              value={asset.quantity}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Cost Per Unit: </h3>
            <input
              onChange={handleChange}
              type="number"
              min={0}
              name="costPerUnit"
              value={asset.costPerUnit}
              className="w-1/2 border-green-400 border-b-2 focus:outline-none"
            />
          </div>
          <div className="container my-8">
            <h3 className="text-2xl font-semibold">Reusable: </h3>
            <input
              onChange={handleChange}
              type="checkbox"
              name="reusable"
              value={asset.reusable}
              className="border-green-400 border-b-2 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-1 text-gray-700 text-xl rounded-lg bg-green-300"
        >
          Create Asset
        </button>
      </form>
    </div>
  );
}

export default Asset;
