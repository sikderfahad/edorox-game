import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";
import underline from "../../assets/img/underline.png";
import Swal from "sweetalert2";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";

const AddProduct = () => {
  const categories = ["RPG", "Sandbox", "FPS", "Action-Adventure", "Strategy"];
  const navigate = useNavigate();

  const gamesData = useAllProducts();

  const handledSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = gamesData.length + 1;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;

    const newGame = {
      id: id.toString(),
      name,
      price,
      description,
      imageUrl,
      category,
    };

    Swal.fire({
      title: "Are you sure?",
      text: `You want to be add a new Game!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: `Add a Game!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:3000/games", newGame).then((res) => {
          // console.log(res);
          if (res.status === 201) {
            ToastMsgSuc("New game added!");
            form.reset();
            navigate("/dashboard/all-products");
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="md:mb-20">
        <h1 className="text-white text-3xl md:text-5xl font-bold capitalize">
          Add New <span className="text-yellow-500">Game</span>
        </h1>
        <img className="mt-5" src={underline} alt="" />
      </div>
      <div className="">
        <div className="card shrink-0 w-full md:w-1/2 lg:w-3/4 shadow-2xl">
          <form onSubmit={handledSubmit} className="card-body">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>

              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">About This game</span>
                </label>
                <input
                  name="description"
                  type="text"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>

              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Game Image</span>
                </label>
                <input
                  name="imageUrl"
                  type="text"
                  className="input input-bordered bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>

                <select
                  className="rounded-md p-3 border-gray-500"
                  name="category"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((cat) => (
                    <option className="p-2" key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-control mt-6 w-full md:w-1/2 lg:w-1/3">
              <button className="btn btn-primary">Add new game</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
