import heroBg from "../../assets/img/slider_img_bg.248d3301542e97679a8f.png";
import btnBg from "../../assets/img/btnBg.png";
const Hero = () => {
  return (
    <>
      <div
        className="bg-center w-full min-h-screen md:h-auto bg-cover lg:py-64 grid grid-cols-1"
        style={{
          //   backgroundImage: heroBG,
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="text-left flex flex-col gap-10 w-11/12 lg:w-10/12 text-neutral-content mx-auto ">
          <h1 className="text-lg font-semibold uppercase text-[#68fe9a] tracking-widest">
            #world class game
          </h1>
          <div className="flex flex-col gap-10 text-white text-2xl md:text-4xl lg:text-[4rem] font-semibold md:font-black">
            <span className="block">ARE YOU RADY</span>
            <span className="block">FOR YOUR NEXT</span>
            <span className="block">CHALLENGE ?</span>
          </div>

          <button
            className={`bg-center bg-cover btn text-white w-[200px] h-[4rem] uppercase text-xl`}
            style={{
              backgroundImage: `url(${btnBg})`,
              backgroundColor: "#ffc010",
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
