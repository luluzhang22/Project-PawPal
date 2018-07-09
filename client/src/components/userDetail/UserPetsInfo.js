import React from 'react';

const UserPetsInfo = ({petList, openModals}) => {
    const getAge = (birthday) => {
        const petBirth = new Date(birthday);
        petBirth.setDate(petBirth.getDate()-1);
        const curDate = new Date();
        if (petBirth) {

            const diff = new Date(curDate - petBirth);
            const year = diff.getFullYear() - 1970;
            const month = diff.getMonth();
            return `${year} year ${month} month`;
        }
        return '1 month';
    };

    const petCards = [];
    petList && petList.forEach((pet, index) => {
        petCards.push(
            <div key={index} className='pet'>
                <div className='pet-pic-name-breed' onClick={() => openModals.openUserPetModal(pet)}>
                        <div className='pet-hover'>
                            <div className="item-info">
                                <div className="headline">VIEW MORE</div>
                                <div className="line"></div>
                                <div className="date">{pet.petName}</div>
                            </div>
                            <div className="mask"></div>
                        </div>

                    <img className='pet-picture' src={pet.petPicUrl} alt={pet.petName}/>
                    <div className='pet-name'>{pet.petName}</div>
                    <div className='pet-breed'>{pet.breed}</div>
                </div>
                <div className='pet-info'>
                    <div className='pet-detail'>{pet.gender}</div>
                    <div className='pet-detail'>{getAge(pet.birthday)}</div>
                    <div className='pet-detail'>{pet.color}</div>
                </div>
                <div className='pet-manipulate'>
                    <button className='pet-delete' onClick={() => openModals.openDeleteAskModal(pet)}>Delete</button>
                    <button className='pet-edit' onClick={() => openModals.openAddAndEditPetModal(pet)}>Edit</button>
                </div>
            </div>
        )
    });

    return (
        <div className='user-pet-list'>
            {petCards}
        </div>
    );
};

export default UserPetsInfo;
