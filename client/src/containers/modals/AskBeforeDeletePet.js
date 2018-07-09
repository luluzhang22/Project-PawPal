import React from "react";
import {connect} from 'react-redux';
import {closeModal} from '../../actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {userDelPet} from "../../actions/user";

const AskBeforeDeletePet = ({message, email, petId, closeModal, onConfirm}) => {
    const onDel = () => {
        onConfirm(email, petId);
        closeModal();
    };
    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={closeModal}/>
        , <FlatButton
            label="Yes"
            primary={true}
            onClick={onDel}/>];
    return (
        <Dialog
            actions={actions}
            open={true}
            modal={false}
            onRequestClose={closeModal}
        >
            {message}
        </Dialog>
    )
};

const mapStateToProps = state => ({
    message: state.modal.modalProps.message,
    email: state.modal.modalProps.email,
    petId: state.modal.modalProps.petId
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => closeModal(),
    onConfirm: (email, petId) => userDelPet(email, petId)
});

export default connect(mapStateToProps,
    mapDispatchToProps()
)(AskBeforeDeletePet)

