import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("firstName");

  useEffect(() => {
    setIsLoading(true);
    let apiUrl = "https://dummyjson.com/users";
    if (searchInput) {
      apiUrl = `https://dummyjson.com/users/search?q=${searchInput}`;
    }
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // Sort data based on sortOption
        const sortedData = sortUserData(data.users, sortOption);
        setUserData(sortedData);
        setIsLoading(false);
      });
  }, [searchInput, sortOption]);

  const sortUserData = (data, sortOption) => {
    return [...data].sort((a, b) => {
      if (a[sortOption] < b[sortOption]) return -1;
      if (a[sortOption] > b[sortOption]) return 1;
      return 0;
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div>
      {/* search box  */}
      <div className="flex justify-center">
        <div className="join">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm md:input-md lg:w-72  join-item"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="btn btn-sm md:btn-md  btn-warning join-item" onClick={() => setSearchInput("")}>
            Clear
          </button>
          <button className="btn  btn-sm md:btn-md  btn-primary join-item" onClick={() => setSearchInput(searchInput)}>
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 lg:gap-0 my-2 mx-2 md:my-3 md:mx-5 lg:my-5 lg:mx-10">
        <h1 className="text-sm  md:text-md lg:text-xl font-serif font-semibold lg:ml-5">Users List: </h1>
        {/* Sorting dropdown */}
        <div className="flex justify-center">
          <select
            className="select select-sm md:select-md  select-bordered lg:w-64 md:w-40"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="firstName">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="company">Sort by Company Name</option>
          </select>
        </div>
        <button onClick={()=>document.getElementById('add-user').showModal()} className="btn  btn-sm md:btn-md  btn-primary">Add New User</button>
      </div>
      {/* users card  */}
      {loading ? (
        <Loading />
      ) : userData?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10">
          {userData.map((user) => (
            <div key={user.id}>
              <Link to={`/user-details/${user.id}`}>
                <div className="card card-compact bg-base-100 shadow-xl">
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
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
