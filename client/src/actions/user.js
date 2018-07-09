import {alertActions} from "./alertAction";
import callApi from "./apiCaller";
import {userAction, utilAction} from './config';

/*sign up*/
export function userSignUp(user) {
    return dispatch => {
        dispatch(signUpRequest(user));
        dispatch(resetUserForm());
        callApi('user/register', 'POST', user)
            .then(
                user => {
                    dispatch(signUpSuccess());
                    dispatch(alertActions.success('Registration successfully! Please Login!'))
                },
                error => {
                    dispatch(signUpFailure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };
}

function signUpRequest(user) {
    return {
        type: userAction.REGISTER_REQUEST, user
    }
}

function signUpSuccess(user) {
    return {
        type: userAction.REGISTER_SUCCESS, user
    }
}

function signUpFailure(error) {
    return {
        type: userAction.REGISTER_FAILURE, error
    }
}

/*login*/
export function login(email, password) {
    return dispatch => {
        dispatch(loginPending(true));
        dispatch(loginSuccess(false));
        dispatch(loginError(null));
        dispatch(resetUserForm());
        const user = {};
        user.email = email;
        user.password = password;
        callApi('user/login', 'POST', user)
            .then(
                user => {
                    dispatch(loginPending(false));
                    dispatch(loginSuccess(true, user));
                    dispatch(alertActions.clear())
                },
                error => {
                    dispatch(loginPending(false));
                    dispatch(loginError(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };
}

function loginPending(isLoginPending) {
    return {
        type: userAction.LOGIN_PENDING,
        isLoginPending
    };
}

export function loginSuccess(isLoginSuccess, userInfo) {
    return {
        type: userAction.LOGIN_SUCCESS,
        isLoginSuccess,
        userInfo,
    };
}

function loginError(loginError) {
    return {
        type: userAction.LOGIN_ERROR,
        loginError
    };
}

/*logout*/
export function logout() {
    return {
        type: userAction.LOG_OUT,
        isLoginSuccess: false,
    };
}

export function changeUserForm(userForm) {
    return {
        type: userAction.CHANGE_FORM,
        userForm
    }
}

function resetUserForm() {
    return {
        type: userAction.RESET_FORM
    }
}

export function userDelPet(userEmail, petId) {
    return dispatch => {
        callApi('user/delPet', 'POST', {email: userEmail, petId: petId})
            .then(
                user => {
                    dispatch(success(true, user));
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };
}

export function openDeleteAskModal(petInfo) {
    return {
        type: utilAction.OPEN_MODAL,
        modalType: utilAction.DEL_PET,
        modalProps: {
            message: `Delete ${petInfo.petName} ?`,
            email: petInfo.email,
            petId: petInfo._id
        }
    };
}

/*user add pet*/
export function userAddPet(userEmail, petInfo) {
    return dispatch => {
        callApi('user/addPet', 'POST', {userEmail: userEmail, petInfo: petInfo})
            .then(
                user => {
                    dispatch(success(true, user));
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };
}

export function openAddAndEditPetModal(petForm) {
    return {
        type: utilAction.OPEN_MODAL,
        modalType: utilAction.ADD_EDIT_PET,
        modalProps: {
            petForm: petForm ? {...petForm, birthday: new Date(petForm.birthday)} : {
                petName: "",
                breed: "",
                gender: "Female",
                birthday: new Date()
            },
            errorText:{
                petName: '',
                breed: ''
            }
        }
    };
}

function success(isLoginSuccess, userInfo) {
    return {
        type: userAction.LOGIN_SUCCESS,
        isLoginSuccess,
        userInfo
    };
}

/*???*/
function failure(error) {
    return {
        type: userAction.REGISTER_FAILURE, error
    }
}


export const openUserPetModalRequest = (userPet) => (dispatch) => {
    if (userPet && userPet.breed) {
        return callApi(`breed/name/${userPet.breed}`)
            .then(breed => {
                dispatch(openUserPetModal(breed, userPet));
            });
    }
};
export const openUserPetModal = (breed, userPet) => ({
    type: utilAction.OPEN_MODAL,
    modalType: utilAction.USER_PET_MODAL,
    modalProps: {
        breed,
        curPrepareContent: breed.diet,
        curPrepareFilter: "DIET",
        userPet
    }
});

export const changeHeaderFilter = (filter) => ({
    type: userAction.CHANGE_FILTER,
    filter
});
