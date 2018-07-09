import callApi from './apiCaller';
import {setVisibilityFilter} from './index';
import {breedAction, utilAction, userAction} from './config';

/*get information of breedList after changing species*/
export const onChangeSpecies = (species) => (dispatch) => {
    dispatch(setVisibilityFilter(utilAction.SET_SPECIES_FILTER, species ? species : "ALL"));
    dispatch(getBreedsRequest(species, 1, 'name'));
    dispatch(getBreedNamesRequest(species));
    dispatch(getTotalPage(species));
};

/*get total page of current species*/
export const getTotalPage = (species) => (dispatch) => {
    return callApi(`breeds/total-page/${species}`)
        .then(json => dispatch(setTotalPage(json)));
};

export const setTotalPage = (number) => ({
    type: breedAction.SET_TOTAL_PAGE,
    number
});

export const setCurPage = (number) => ({
    type: breedAction.SET_CUR_PAGE,
    number
});

/*get all breed names of current species*/
const getBreedNamesRequest = (species) => (dispatch) => {
    return callApi(`breeds/breed-names/${species}`)
        .then(json => dispatch(getBreedNames(json)));
};

export const getBreedNames = (json) => ({
    type: breedAction.GET_BREED_NAMES,
    names: json.map(child => child.name)
});

/*get breed list of current species with condition: (page, sort)*/
export const getBreedsRequest = (species, page, sort) => (dispatch) => {
    if (!page || page < 1) {
        page = 1;
    }
    if(!sort){
        sort = 'name';
    }
    if (!species || species === "ALL") {
        return callApi(`breeds/all/${page}/${sort}`)
            .then(json => dispatch(getBreeds(json, sort)));
    } else {
        return callApi(`breeds/species/${species}/${page}`)
            .then(json => dispatch(getBreeds(json, 'name')));
    }
};

/*get breed list when changing page*/
export const onChangePage = (species, page, sort) => (dispatch) => {
    dispatch(setCurPage(page));
    dispatch(getBreedsRequest(species, page, sort));
};

export const getBreeds = (json, sort) => ({
    type: breedAction.GET_BREEDS,
    breeds: json.map(child => {
        return child
    }),
    sort: sort ? sort : 'name'
});

/**/
export const getBreedById = (id) => (dispatch) => {
    if (id) {
        return callApi(`breed/id/${id}`)
            .then(json => dispatch(getBreed(json)));
    }
};
export const getBreed = (breed) => ({
    type: utilAction.OPEN_MODAL,
    modalType: utilAction.BREED_MODAL,
    modalProps: {
        breed,
        curPrepareContent: breed.diet,
        curPrepareFilter: "DIET"
    }
});

/**/
export const setSearchContent = (content) => ({
    type: breedAction.SET_SEARCH,
    content
});

/**/
export const getBreedByNameRequest = (name) => (dispatch) => {
    if (name) {
        return callApi(`breed/name/${name}`)
            .then(json => {
                dispatch(getBreedByName(json));
            });
    }
};

export const getBreedByName = (obj) => ({
    type: breedAction.GET_BREED_BY_NAME,
    breed: obj
});

/**/
export const onChangeSort = (sort) => (dispatch) => {
    dispatch(getBreedsRequest("ALL", 1, sort));
    dispatch(setSort(sort));
};

export const setSort = (sort) => ({
    type: breedAction.SET_SORT,
    sort
});

export const likeAPet = (email, petId) => (dispatch) => {
    return callApi(`user/addFavorite/`,'POST', {email, petId})
        .then(json => {
            dispatch(updateBreeds(json.pet));
            dispatch(updateUser(json.user));
        });
};
export const removeALike = (email, petId) => (dispatch) => {
    return callApi(`user/removeFavorite/`,'POST', {email, petId})
        .then(json => {
            dispatch(updateBreeds(json.pet));
            dispatch(updateUser(json.user));
        });
};
export const updateBreeds = (breed) => ({
    type: breedAction.UPDATE_BREEDS,
    breed
});

export const updateUser = (user) => ({
    type: userAction.UPDATE_USER,
    user
});
