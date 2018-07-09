import callApi from './apiCaller';
import {onChangeSpecies} from './breed';
import { speciesAction } from './config';

/*get all species*/
export const getSpeciesRequest = () => (dispatch) => {
    dispatch(requestSpecies());
    return callApi('species')
        .then(res => {
                dispatch(getSpecies(res));
                dispatch(onChangeSpecies('ALL'))
            },
            error => dispatch(getSpecies([])));
};

export const requestSpecies = () => ({
    type: speciesAction.REQUEST_SPECIES
});

export const getSpecies = (json) => ({
    type: speciesAction.GET_SPECIES,
    species: json.map(child => {
        return {
            name: child.name,
            picUrl: child.picUrl
        }
    })
});



