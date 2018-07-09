import React  from 'react';

const UserAddPets = ({openAddPetModal}) => (

    <div onClick={() => openAddPetModal(null)} className='add-button' >
                {/*<img className="add-pic" src='./images/icon/add-square.png' alt='add'></img>*/}
                <div className='add-text'> Add New Friend</div>
            </div>
);


export default UserAddPets;
