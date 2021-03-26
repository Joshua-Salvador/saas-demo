import React, { useState, useEffect } from "react";
import { useAsset } from "../contexts/AssetProvider";

function AssetLibrary() {
  const { assets } = useAsset();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setData([...assets]);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
    console.log(data, assets);
  }, []);
  return (
    <div>
      {data.map((doc) => (
        <p>{doc.name}</p>
      ))}
    </div>
  );
}

export default AssetLibrary;
