import React from 'react';
import {connect} from 'react-redux';

import LoginOrSignUp from '../components/userDetail/LoginOrSignUp';
import UserHeader from '../components/userDetail/UserHeader'
import UserPetsInfo from '../components/userDetail/UserPetsInfo';
import UserAddPets from '../components/userDetail/UserAddPets';
import AlertMessage from '../components/userDetail/AlertMessage';
import UserFavorites from '../components/userDetail/UserFavorites';

import '../styles/user-panel.css';
import {
    login,
    changeUserForm,
    userSignUp,
    logout,
    openAddAndEditPetModal,
    openDeleteAskModal,
    openUserPetModalRequest,
    changeHeaderFilter
} from "../actions/user";
import {getBreedById, removeALike} from "../actions/breed";

const UserPanel = ({
                       userLogin, userSignUp, userForm, petForm,
                       login, onChangeForm, onSignUp, onLogout, openModals, changeUserPetFilter,
                       toggleBreed, unlikeAPet
                   }) => {
    return (
        <div className="uer-panel" id='my-pawpal'>
            <div>
                <img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>My Pawpal
            </div>

            <div className='user'>
                <AlertMessage/>

                <div className='user-body'>
                    <LoginOrSignUp userLogin={userLogin} userForm={userForm} login={login} onChangeForm={onChangeForm}
                                   onSignUp={onSignUp}/>
                </div>

                {userLogin.isLoginSuccess &&
                <div>
                    <UserHeader filter={userLogin.filter} user={userLogin.curUser.userInfo} onLogout={onLogout} changeUserPetFilter={changeUserPetFilter}/>
                    {userLogin.filter === 'My Pawpal' &&
                    <UserAddPets openAddPetModal={openModals.openAddAndEditPetModal}/>}
                    {userLogin.filter === 'My Pawpal' &&
                    <UserPetsInfo petList={userLogin.curUser.userPets} openModals={openModals}/>}
                    {userLogin.filter === 'Favorites' &&
                    <UserFavorites userEmail={userLogin.curUser.userInfo.email} breeds={userLogin.curUser.favorPets}
                                   toggleBreed={toggleBreed} unlikeAPet={unlikeAPet}/>}
                </div>
                }
            </div>

        </div>
    )
};
const mapStateToProps = state => ({
    userLogin: state.userLogin,
    userSignUp: state.userSignUp,
    userForm: state.userForm
});

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => {
        dispatch(login(email, password))
    },
    onChangeForm: (loginInfo) => {
        dispatch(changeUserForm(loginInfo))
    },
    onSignUp: (user) => dispatch(userSignUp(user)),
    onLogout: () => dispatch(logout()),
    openModals: {
        openAddAndEditPetModal: (petForm) => dispatch(openAddAndEditPetModal(petForm)),
        openDeleteAskModal: (email, petInfo) => dispatch(openDeleteAskModal(email, petInfo)),
        openUserPetModal: (userPet) => dispatch(openUserPetModalRequest(userPet))
    },
    changeUserPetFilter: (filter) => dispatch(changeHeaderFilter(filter)),
    toggleBreed: breedId => {
        dispatch(getBreedById(breedId))
    },
    unlikeAPet: (email, petId) => {
        dispatch(removeALike(email, petId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
