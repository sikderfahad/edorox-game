import { useLoaderData, useNavigate } from "react-router-dom";
import underline from "../../assets/img/underline.png";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";

const EditProduct = () => {
  const data = useLoaderData();
  const { id, name, imageUrl, category, description, price } = data;
  const navigate = useNavigate();

  const categories = ["RPG", "Sandbox", "FPS", "Action-Adventure", "Strategy"];

  const handledSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;

    const editeGame = { id, name, price, description, imageUrl, category };
    // console.log(editeGame);

    Swal.fire({
      title: "Are you sure?",
      text: `You want to be update this Game!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: `Update info!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:3000/games/${id}`, editeGame)
          .then((res) => {
            // console.log(res);
            if (res.status === 200) {
              ToastMsgSuc("Updated game info!");
              form.reset();
              navigate("/dashboard/all-products");
            }
          });
      }
    });
  };

  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <div className="md:mb-20">
        <h1 className="text-white text-3xl md:text-5xl font-bold capitalize">
          Edit game <span className="text-yellow-500">Info</span>
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
                  defaultValue={name}
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
                  defaultValue={price}
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
                  defaultValue={description}
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
                  defaultValue={imageUrl}
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
                  value={selectedCategory}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
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

export default EditProduct;
