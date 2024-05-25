import { FaRegCheckCircle } from "react-icons/fa";
import aboutImg1 from "../../assets/img/about1.jpg";
import aboutImg2 from "../../assets/img/about2.jpg";
import aboutImg3 from "../../assets/img/about3.png";
import expImg from "../../assets/img//exp.png";
import underline from "../../assets/img/underline.png";
import introBg from "../../assets/img/introBg.png";

const Intro = () => {
  const expSpin = {
    animation: "spin 20s linear infinite",
  };

  const yearStyle = {
    color: "#ffc010",
    fontSize: "60px",
    fontWeight: "900",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)", // Standard property
  };
  return (
    <>
      <style>
        {`
            @keyframes spin {
                100% {
                    -webkit-transform: rotate(1turn);
                    transform: rotate(1turn);
                }
            }
        `}
      </style>
      <div
        className="w-full py-12 mb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${introBg})` }}
      >
        <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="grid relative">
            <div className="absolute left-0 top-[-50px]">
              <img style={expSpin} src={expImg} alt="" />
              <span style={yearStyle} className="">
                10
              </span>
            </div>
            <img
              className="w-10/12 rounded-3xl justify-self-end"
              src={aboutImg1}
              alt=""
            />
            <div className="absolute bottom-[-50px]">
              <img className="rounded-3xl" src={aboutImg2} alt="" />
            </div>
            <div className="absolute bottom-[-60px] right-[-50px]">
              <img src={aboutImg3} alt="" />
            </div>
          </div>
          <div className="px-7">
            <h1 className="text-5xl font-bold leading-[1.1] text-white">
              WE’RE THE BEST <br /> GAMING{" "}
              <span className="text-yellow-500">COMPANY</span>
            </h1>
            <img className="my-8" src={underline} alt="" />
            <h3 className="uppercase font-semibold italic text-lg">
              LPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
              TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
            </h3>
            <p className="my-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-4">
                <FaRegCheckCircle className="text-yellow-400" /> Suspe ndisse
                suscipit sagittis leo.
              </li>
              <li className="flex items-center gap-4">
                <FaRegCheckCircle className="text-yellow-400" /> Entum estibulum
                dignissim posuere.
              </li>
              <li className="flex items-center gap-4">
                <FaRegCheckCircle className="text-yellow-400" /> If you are
                going to use a passage
              </li>
            </ul>
            <button
              className="uppercase mt-8 text-lg font-medium px-8 py-4 rounded-lg bg-transparent text-white
           border border-yellow-400 hover:bg-yellow-400 duration-300"
            >
              discover more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
