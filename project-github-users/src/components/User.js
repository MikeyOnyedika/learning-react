import React from "react";
import './user.css';

const User = ({ img, userName }) => {
     return (
          <div className="user">
               <img src={img} alt="" className="image" />
               <div className="info">
                    <h3 className="user-name">{userName}</h3>
                    <a href={`https://github.com/${userName}`} target="_blank">
                         Link to github repo
                    </a>
               </div>
          </div>
     );
};

export default User;
