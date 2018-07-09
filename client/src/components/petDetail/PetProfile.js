import React from 'react';

const PetProfile = ({pet}) => (
    <div className="pet-profile" id='pet-profile'>

        <div className="pet-profile-detail">
            <div className="pet-profile-title">
                <span><img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>PROFILE</span>
            </div>
            <div>BREED: {pet.name} </div>
            <div>AVERAGE LIFESPAN: {pet.information.lifeSpan} </div>
            <div>WEIGHT: {pet.information.weight}</div>
            <div>AVERAGE SIZE: {pet.information.avgSize} </div>
            <div>ORIGIN: {pet.information.origin} </div>
            <div>PRICE: {pet.information.price} </div>
        </div>
        <div className="pet-profile-info">
            <div className="pet-profile-picture">
                <img src={pet.picUrl} alt='pet profile'/>
            </div>
            <div className="pet-profile-pet-name">
                {pet.name}
            </div>
        </div>
    </div>
);
export default PetProfile;
