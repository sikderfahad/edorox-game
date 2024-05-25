import { BallTriangle } from "react-loader-spinner";

export const PageLoading = () => {
  return (
    <span
      className={` flex spinner items-center justify-center mx-auto h-screen w-full`}
    >
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#2ebff0"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </span>
  );
};

const Spinner = ({ hFull, wFull }) => {
  return (
    <span
      className={` flex spinner items-center justify-center mx-auto my-6 ${
        hFull && "h-screen transform translate-x-[45%]"
      } ${wFull && "w-full"}`}
    >
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#2ebff0"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </span>
  );
};

export default Spinner;
