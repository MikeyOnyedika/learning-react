import React, { useEffect, useState } from "react";
import User from "./User";
import "./user-list.css";

const UserList = () => {
     const [users, setUsers] = useState([]);

     const fetchUsers = async () => {
          console.log("fetching users...");
          const usersFromAPI = await (
               await fetch("https://api.github.com/users")
          ).json();

          const users = usersFromAPI.map((user) => {
               return {
                    id: user.id,
                    name: user.login,
                    imageUrl: user.avatar_url,
               };
          });

          setUsers(users);
          console.log("done");
     };

     useEffect(() => {
          fetchUsers();
     }, []);

     return (
          <div className="list-wrapper">
               <ul className="list">
                    {users.map((user) => {
                         return (
                              <li key={user.id}>
                                   <User img={user.imageUrl} userName={user.name} />
                              </li>
                         );
                    })}
               </ul>
          </div>
     );
};

export default UserList;
