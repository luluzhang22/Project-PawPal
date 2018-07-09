import React from 'react';
import Breed from '../petList/Breed';

const UserFavorites = ({userEmail, breeds, toggleBreed, unlikeAPet}) => {

    return (
        <div className='user-pet-list'>
            {breeds && breeds.length > 0 ? breeds.map(b =>
                    <Breed
                        onClick={() => toggleBreed(b._id)}
                        key={b._id}
                        breed={b}
                        isFavorite={true}
                        likeAPet={() => unlikeAPet(userEmail, b._id)}
                    />)
                : <div>You don't have favorite pets now!</div>}
        </div>
    );
};

export default UserFavorites;
