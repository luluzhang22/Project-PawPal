import React from 'react';

const UserHeader = ({user, onLogout, changeUserPetFilter, filter}) => {
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        onLogout();
    };
    return (
        <div className='user-header'>
            <div className='user-info'>
                <div>
                    <img className="user-pic" src={user.picUrl} alt={user.name}></img>
                </div>

                <div>{user.name}</div>
                <div>
                    <button className='logout-button' onClick={logOut}>Log Out</button>
                </div>
            </div>
            <div className="user-nav">
                <button className={"user-nav-but" + (filter === "My Pawpal" ? " user-nav-but-select" : "")} onClick={() => changeUserPetFilter("My Pawpal")}>My Pawpal</button>
                <button className={"user-nav-but" + (filter === "Favorites" ? " user-nav-but-select" : "")} onClick={() => changeUserPetFilter("Favorites")}>Favorites</button>
                {/*<span>Compare</span>*/}
            </div>
        </div>
    );
};

export default UserHeader;
