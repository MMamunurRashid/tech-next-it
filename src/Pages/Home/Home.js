import React from 'react';
import UserList from '../../Components/UserList/UserList';
import AddUser from '../../Components/AddUser/AddUser';

const Home = () => {
    return (
        <div className='min-h-screen pt-20'>
            <UserList/>
            <AddUser/>
        </div>
    );
};

export default Home;