import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.users);
        setIsLoading(false);
      });
  }, []);

  console.log(userData.users);
  return (
    <div>
      {/* search box  */}
      <div className="flex justify-center">
        <div className="join">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered join-item"
          />
          <button className="btn btn-primary join-item">Search</button>
        </div>
      </div>

      <h1 className="text-xl font-serif font-semibold ml-5">Users List: </h1>
      {/* users card  */}
      {loading ? ( // Show a loader component while data is loading
        <Loading></Loading>
      ) : userData?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10">
          {userData?.map((user) => (
            <div key={user.id}>
              <Link to={`/user-details/${user.id}`}>
                <div className="card card-compact  bg-base-100 shadow-xl">
                  <figure>
                    <img src={user.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-[16px]">Email: {user.email}</p>
                    <p className="text-[16px]">
                      Address: {user.address.address}, {user.address.city}
                    </p>
                    <p className="text-[16px]">Company: {user.company.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserList;
