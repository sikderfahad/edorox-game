import axios from "axios";
import useAllUsers from "./useAllUsers";

const useSaveUser = (newUser) => {
  const allUser = useAllUsers();

  const { displayName, email, photoURL } = newUser;
  const isUserExist = allUser.some((user) => user.email === email);
  if (!isUserExist) {
    const id = allUser.length + 1;
    const newUserData = {
      id: id.toString(),
      displayName,
      email,
      photoURL,
    };
    axios.post("http://localhost:3000/users", newUserData);
  }
};

export default useSaveUser;
