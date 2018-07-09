import React from "react";
import {connect} from 'react-redux';

import PetProfile from '../../components/petDetail/PetProfile';
import PetCharacteristics from '../../components/petDetail/PetCharacteristics';
import PetTemp from '../../components/petDetail/PetTemperament';
import PetPrepare from '../../components/petDetail/PetPrepare';
import Footer from '../../components/Footer';
import {setVisibilityFilter} from '../../actions';


const BreedDetail = ({breed, filter, curPrepareContent, toggleFilter}) => {
    return (
        <div className="modal-content">
            <PetProfile pet={breed}/>
            <PetCharacteristics chara={breed.characteristics} pic={breed.realPicUrl}/>
            <PetTemp temp={breed.temperament} picUrl={breed.backPicUrl}/>
            <PetPrepare selectedFilter={filter} curContent={curPrepareContent} onClickFilter={toggleFilter}/>
            <Footer/>
        </div>
    )
};

const mapStateToProps = state => ({
    breed: state.modal.modalProps.breed,
    filter: state.visibilityFilter.PET_PREPARE_FILTER,
    curPrepareContent: getVisiblePrepareContent(state.modal.modalProps.breed, state.visibilityFilter.PET_PREPARE_FILTER),
});

const mapDispatchToProps = (dispatch) => ({
    toggleFilter: filter => setVisibilityFilter("SET_PET_PREPARE_FILTER", filter)
});

const getVisiblePrepareContent = (pet, filter) => {
    switch (filter) {
        case 'DIET':
            return pet.diet;
        case 'HOUSE':
            return pet.housing;
        case 'TRAINING':
            return pet.training;
        case 'PLAY':
            return pet.toys;
        case 'CLEAN':
            return pet.clean;
        case 'HEALTH':
            return pet.health;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

export default connect(mapStateToProps,
    mapDispatchToProps()
)(BreedDetail)

