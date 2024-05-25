import axios from "axios";
import { useEffect, useState } from "react";

const useAllProducts = () => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const gameRes = await axios.get("http://localhost:3000/games");
      if (gameRes?.status === 200) {
        setGamesData(gameRes.data);
      }
    };
    loadData();
  }, []);
  return gamesData;
};

export default useAllProducts;
