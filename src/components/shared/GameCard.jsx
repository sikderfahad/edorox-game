import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastMsgError } from "../Toast/ToastMsg";

const GameCard = ({ item, gameInfo, dashboard }) => {
  const { id, name, category, price, description, imageUrl } = item;

  const handledDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to be delete this Game!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: `Delete Game!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/games/${id}`).then((res) => {
          // console.log(res);
          if (res.status === 200) {
            ToastMsgError("Game deleted successful!");
            window.location.reload();
          }
        });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={name + " " + "Image"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{name}</h2>
        <p className="text-xs -mt-2">
          <i>({category})</i>
        </p>
        {gameInfo ? (
          <p>{description}</p>
        ) : (
          <p>
            {description.split(" ").slice(0, 15).join(" ")}...
            <Link to={`/game-info/${id}`} className="text-blue-500">
              read more
            </Link>
          </p>
        )}

        {!dashboard ? (
          <div className="flex items-center justify-end mt-5">
            <p className="text-red-500 font-semibold text-lg">${price}</p>
            <Link className="py-2 px-3 rounded-lg text-orange-500 border border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white duration-200">
              Battle Now
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-between mt-5">
            <p className="text-red-500 font-semibold text-lg">${price}</p>
            <div className="flex items-center justify-center gap-2">
              <Link
                className="py-2 block px-3 rounded-lg text-sky-500 border border-sky-500 bg-transparent hover:bg-sky-500 hover:text-white duration-200"
                to={`/game-info/${id}`}
              >
                Details
              </Link>
              <Link
                to={`/dashboard/edit-product/${id}`}
                className="py-2 block px-3 rounded-lg text-green-500 border border-green-500 bg-transparent hover:bg-green-500 hover:text-white duration-200"
              >
                Edit
              </Link>
              <Link
                onClick={handledDelete}
                className="py-2 block px-3 rounded-lg text-orange-500 border border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white duration-200"
              >
                Delete
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
