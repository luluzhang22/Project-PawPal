import React from 'react';
import {connect} from 'react-redux';
import BreedModal from './modals/BreedModal';
import UserPetDetail from './modals/UserPetDetail';
import Alter from './modals/AlterModal';
import '../styles/modal.css';
import AddEditPets from "./modals/AddAndEditPet";
import AskBeforeDeletePet from './modals/AskBeforeDeletePet';
import {utilAction} from '../actions/config';

const MODAL_COMPONENTS = {
    [utilAction.BREED_MODAL]: BreedModal,
    [utilAction.ADD_EDIT_PET]: AddEditPets,
    [utilAction.ALTER]: Alter,
    [utilAction.DEL_PET]: AskBeforeDeletePet,
    [utilAction.USER_PET_MODAL]: UserPetDetail
};

const ModalContainer = ({modalType, modalProps}) => {
    if (!modalType) {
        return null
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />
};

export default connect(
    state => state.modal
)(ModalContainer)
