import React from 'react';
import {connect} from 'react-redux';
import SpeciesList from '../components/petList/SpeciesList';
import BreedList from '../components/petList/BreedList';
import PetPanelHeader from '../components/petList/PetPanelHeader';
import LoadingSpinner from '../components/util/LoadingSpinner';
import {
    getBreedById,
    onChangeSpecies,
    onChangePage,
    getBreedByNameRequest,
    setSearchContent,
    onChangeSort,
    likeAPet,
    removeALike
} from "../actions/breed";
import {openAlter} from '../actions';
import Pagination from "../components/petList/Pagination";

import '../styles/pet-panel.css';

const PetPanel = ({
                      species, breedList, searchContent, sortContent,userAndFavorites,
                      toggleSpecies, toggleBreed, pageOnClick, onSort, onSearch, updateSearch, likeAPet, unlikeAPet, openAlter
                  }) => {
    return (
        <div className="pet-panel" id='details'>
            <PetPanelHeader searchAction={{searchContent, onSearch, updateSearch}} sortAction={{sortContent, onSort}}/>
            {species.isFetching ? <LoadingSpinner/> :
                species.species.length === 0 ? <h2>Don't have pet in our system yet!</h2> :
                    <div>
                        <SpeciesList species={species.species} toggleSpecies={toggleSpecies} speciesFilter={species.filter}/>
                        <BreedList userAndFavorites={userAndFavorites} breeds={breedList.breeds} toggleBreed={toggleBreed} likeAPet={likeAPet} unlikeAPet={unlikeAPet} openAlter={openAlter}/>
                        <Pagination condition={{ filter: species.filter, sort: sortContent.sortBy}} pagination={breedList.pagination} onClick={pageOnClick}/>
                    </div>
            }

        </div>
    )
};

const mapStateToProps = state => ({
    species: state.species,
    breedList: state.breedList,
    searchContent: {
        searchText: state.breedList.searchContent,
        breedDataSource: state.breedList.breedNames
    },
    sortContent: {
        disabled: state.species.filter !== 'ALL',
        sortBy: state.breedList.sortBy
    },
    userAndFavorites: state.userLogin.isLoginSuccess ? {userEmail: state.userLogin.curUser.userInfo.email, favorites: state.userLogin.curUser.userInfo.favorites} : {}
});

const mapDispatchToProps = (dispatch) => ({
    toggleSpecies: species => {
        dispatch(onChangeSpecies(species))
    },
    toggleBreed: breedId => {
        dispatch(getBreedById(breedId))
    },
    pageOnClick: (species, page, sort) => {
        dispatch(onChangePage(species, page, sort));
    },
    onSort: sort => {
        dispatch(onChangeSort(sort));
    },
    onSearch: name => {
        dispatch(getBreedByNameRequest(name));
    },
    updateSearch: content => {
        dispatch(setSearchContent(content));
    },
    likeAPet: (email, petId) => {
        dispatch(likeAPet(email, petId));
    },
    unlikeAPet: (email, petId) => {
        dispatch(removeALike(email, petId))
    },
    openAlter: (message) => {
        dispatch(openAlter(message))
    }
});

export default connect(mapStateToProps,
    mapDispatchToProps
)(PetPanel);
