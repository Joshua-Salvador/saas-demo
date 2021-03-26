import React, { useState, useEffect, useContext, createContext } from "react";
import { db } from "../firebase";

const AssetContext = createContext();

export const useAsset = () => useContext(AssetContext);

function AssetProvider({ children }) {
  const [assets, setAssets] = useState();
  const [loading, setLoading] = useState(true);

  // async function getAssets() {
  //   try {
  //     const data = await db
  //       .collection("organizations")
  //       .doc("GMr7IRmNMzAjXRePEnq1") // Eventually Replace with user's organization claims from Auth Provider
  //       .collection("assets")
  //       .get();

  //     data.forEach((asset) => {
  //       setAssets((prev) => [...prev, { ...asset.data() }]);
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     throw new Error(err.message ? err.message : "Something went wrong");
  //   }
  // }

  useEffect(() => {
    const unsubscribe = db
      .collection("organizations")
      .doc("GMr7IRmNMzAjXRePEnq1") // Eventually Replace with user's organization claims from Auth Provider
      .collection("assets")
      .onSnapshot((querySnapshot) => {
        const assetsData = [];
        querySnapshot.forEach((doc) => {
          assetsData.push(doc.data());
        });
        setAssets(assetsData);
        setLoading(false);
      });
    return unsubscribe;
  }, []);

  const value = {
    assets,
    // getAssets,
  };

  return (
    <AssetContext.Provider value={value}>
      {!loading && children}
    </AssetContext.Provider>
  );
}

export default AssetProvider;
