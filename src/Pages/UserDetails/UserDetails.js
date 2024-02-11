import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl pt-32">
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
    );
};

export default UserDetails;