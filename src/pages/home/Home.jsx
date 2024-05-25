import Hero from "../../components/home/Hero";
import Intro from "../../components/home/Intro";
import Games from "../../components/shared/Games";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Games slice={3} />
    </div>
  );
};

export default Home;
