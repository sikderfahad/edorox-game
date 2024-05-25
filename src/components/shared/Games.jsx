import GameCard from "./GameCard";
import underline from "../../assets/img/underline.png";
import gamesBg from "../../assets/img/games-card-bg.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Games = ({ slice, dashboard }) => {
  const [gamesData, setGamesData] = useState([]);
  // console.log(gamesData);

  useEffect(() => {
    const loadData = async () => {
      const gameRes = await axios.get("http://localhost:3000/games");
      if (gameRes?.status === 200) {
        setGamesData(gameRes.data);
      }
    };
    loadData();
  }, []);
  return (
    <div
      className="py-20 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${gamesBg})` }}
    >
      <div className={slice ? "w-11/12 md:w-10/12 mx-auto " : "w-full"}>
        <div className="my-20">
          <h1 className="text-white text-5xl font-bold">
            Trending <span className="text-yellow-500">games</span>
          </h1>
          <img className="mt-5" src={underline} alt="" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {slice
            ? gamesData
                ?.slice(0, slice)
                .map((item, i) => <GameCard key={i} item={item} />)
            : gamesData?.map((item, i) => (
                <GameCard key={i} item={item} dashboard={dashboard} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
