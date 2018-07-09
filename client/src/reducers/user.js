import {userAction} from '../actions/config'

const initialState = {
    isShow: true,
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null,
    filter: 'My Pawpal'
};

export function userLogin(state = initialState, action) {
    switch (action.type) {
        case userAction.LOGIN_PENDING :
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };
        case userAction.LOGIN_SUCCESS :
            localStorage.setItem('user', JSON.stringify(action.userInfo));
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess,
                curUser: action.userInfo,
                loginError: null,
                filter: 'My Pawpal'
            };
        case userAction.LOGIN_ERROR :
            return {
                ...state,
                loginError: action.loginError
            };
        case userAction.LOG_OUT:
            return {
                ...state,
                isLoginSuccess: false,
            };
        case userAction.UPDATE_USER:
            localStorage.setItem('user', JSON.stringify({
                ...state.curUser,
                userInfo: action.user.userInfo,
                favorPets: action.user.favorPets
            }));
            return {
                ...state,
                curUser: {
                    ...state.curUser,
                    userInfo: action.user.userInfo,
                    favorPets: action.user.favorPets
                }
            };
        case userAction.CHANGE_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}


export function userSignUp(state = {}, action) {
    switch (action.type) {
        case userAction.REGISTER_REQUEST:
            return {registering: true};
        case userAction.REGISTER_SUCCESS:
            return {};
        case userAction.REGISTER_FAILURE:
            return {};
        default :
            return state
    }
}

