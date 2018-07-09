import {combineReducers} from 'redux';
import species from './species';
import breedList from './breeds';
import {alert} from "./alert";
import {userLogin, userSignUp} from "./user";
import {utilAction, userAction} from '../actions/config';

const initialModal = {
    modalType: null,
    modalProps: {}
};

export const modal = (state = initialModal, action) => {
    switch (action.type) {
        case utilAction.OPEN_MODAL:
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            };
        case utilAction.CLOSE_MODAL:
            return initialModal;
        case utilAction.MODIFY_MODAL_PROPS:
            return {
                ...state,
                modalProps: action.modalProps
            };
        default:
            return state
    }
};

const initialFilter = {
    PET_PREPARE_FILTER: 'DIET',
    SPECIES_FILER: 'ALL'
};

/*???*/
const visibilityFilter = (state = initialFilter, action) => {
    switch (action.type) {
        case 'SET_PET_PREPARE_FILTER':
            return {
                ...state,
                PET_PREPARE_FILTER: action.filter
            };
        default:
            return state
    }
};

const initialUserForm = {showLogin: true, name: '', email: '', password: '', submitted: false, registering: false};
const userForm = (state = initialUserForm, action) => {
    switch (action.type) {
        case userAction.CHANGE_FORM:
            return action.userForm;
        case userAction.RESET_FORM:
            return initialUserForm;
        default:
            return state
    }
};


export default combineReducers({
    modal,
    species,
    breedList,
    visibilityFilter,
    userLogin,
    userSignUp,
    alert,
    userForm
});
