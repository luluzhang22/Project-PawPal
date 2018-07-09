import React from 'react';

const PetDetail = ({ userPet }) => {
    return (
        <div className="pet-chara">
            <div className="pet-chara-picture">
                <img src={userPet.petPicUrl} alt="pet character"></img>
            </div>
            <div className="pet-chara-detail">
                <span><img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>Your Pet</span>
                <div>Name: {userPet.petName}</div>
                <div>Breed: {userPet.breed} </div>
                <div>Gender: {userPet.gender} </div>
                <div>Birthday: {userPet.birthday.substr(0,10)} </div>
                <div>Color: {userPet.color} </div>
            </div>
        </div>
    );
};

export default PetDetail;
