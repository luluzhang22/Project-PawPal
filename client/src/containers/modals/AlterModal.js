import React from "react";
import {connect} from 'react-redux';
import {closeModal} from '../../actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const AlterModal = ({message, closeModal}) => {
    return (
        <Dialog
            actions={<FlatButton
                label="Close"
                primary={true}
                onClick={closeModal}
            />}
            open={true}
            modal={false}
            onRequestClose={closeModal}
        >
            {message}
        </Dialog>
    )
};

const mapStateToProps = state => ({
    message: state.modal.modalProps
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => closeModal()
});

export default connect(mapStateToProps,
    mapDispatchToProps()
)(AlterModal)

