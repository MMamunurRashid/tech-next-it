import React, { useEffect, useState } from "react";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  console.log(userData);
  return <div></div>;
};

export default UserList;
