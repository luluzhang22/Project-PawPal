import React from 'react';
import Breed from './Breed';
import PropTypes from "prop-types";

const BreedList = ({userAndFavorites, breeds, toggleBreed, likeAPet, unlikeAPet,openAlter}) => {
    const onClickLike = (petId) => {
        if(!userAndFavorites || !userAndFavorites.userEmail){
            openAlter(
                "Please login!"
            );
        }
        else if(userAndFavorites.favorites && userAndFavorites.favorites.includes(petId)){
            unlikeAPet(userAndFavorites.userEmail, petId);
        }else{
            likeAPet(userAndFavorites.userEmail, petId);
        }
    };

    return(
        <div className="breed-list">
            {!breeds || breeds.map(b =>
                <Breed
                    onClick={() => toggleBreed(b._id)}
                    key={b._id}
                    breed = {b}
                    isFavorite = {userAndFavorites && userAndFavorites.favorites && userAndFavorites.favorites.includes(b._id)}
                    likeAPet={() => onClickLike(b._id)}
                />
            )}
        </div>
    );
};

 BreedList.propTypes = {
    breeds: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        picUrl: PropTypes.string.isRequired
    }).isRequired).isRequired,
     toggleBreed: PropTypes.func
};
export default BreedList;
