import React, { useState, useEffect, useContext, createContext } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthProvider";

const AssetContext = createContext();

export const useAsset = () => useContext(AssetContext);

function AssetProvider({ children }) {
  const [assets, setAssets] = useState();
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
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
      .doc(currentUser.organization)
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
    // eslint-disable-next-line
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
