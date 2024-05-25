import axios from "axios";
import { useEffect, useState } from "react";

const useAllUsers = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const usersRes = await axios.get("http://localhost:3000/users");
      if (usersRes?.status === 200) {
        setUsersData(usersRes.data);
      }
    };
    loadData();
  }, []);
  return usersData;
};

export default useAllUsers;
