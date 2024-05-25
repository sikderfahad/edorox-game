import { Link, useLoaderData, useNavigate } from "react-router-dom";
import GameCard from "../../components/shared/GameCard";
import { FaArrowLeftLong } from "react-icons/fa6";

const GameInfo = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-12">
      <div className="w-full md:w-1/2 mx-auto">
        <GameCard item={data} gameInfo={true} />
        <Link onClick={() => navigate(-1)} className="block mt-3">
          <FaArrowLeftLong className="text-3xl" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default GameInfo;

//  <div className="w-11/12 md:w-10/12 mx-auto mt-12">
//       <div className="card w-full md:w-1/2 mx-auto card-compact bg-base-100 shadow-xl">
//         <figure>
//           <img src={imageUrl} alt={name + " " + "Image"} />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title capitalize">{name}</h2>
//           <p className="text-xs -mt-2">
//             <i>({category})</i>
//           </p>
//           <p>{description}</p>
//           <div className="flex items-center justify-end">
//             <p className="text-red-500 font-semibold text-lg">${price}</p>
//             <Link
//               to={`/`}
//               className="py-2 px-3 rounded-lg text-orange-500 border border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white duration-200"
//             >
//               Go back
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
