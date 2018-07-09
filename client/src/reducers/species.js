import {speciesAction, utilAction} from '../actions/config';

const initialState = {
    filter: 'ALL',
    species: [],
    isFetching: false
};

const species = (state = initialState, action) => {
    switch (action.type) {
        case speciesAction.REQUEST_SPECIES:
            return {
                ...state,
                isFetching: true
            };
        case speciesAction.GET_SPECIES:
            return {
                ...state,
                species: action.species,
                isFetching: false
            };
        case utilAction.SET_SPECIES_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state
    }
};


export default species;
