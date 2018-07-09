import React from "react";
import {connect} from 'react-redux';
import {closeModal} from '../../actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import NavBar from '../../components/Navigation';
import BreedDetail from './BreedDetail';


const BreedModal = ({pet, closeModal}) => {
    return (
        <Dialog
            actions={<FlatButton
                label="Close"
                primary={true}
                onClick={closeModal}
            />}
            open={true}
            modal={false}
            contentStyle={{
                width: '70rem',
                maxWidth: 'none'
            }}
            onRequestClose={closeModal}
            autoScrollBodyContent={true}>
            <NavBar bars={["PREPARE", "CHARACTERISTICS", "PROFILE"]}/>
            <BreedDetail/>
        </Dialog>
    )
};

const mapStateToProps = state => ({
    breed: state.modal.modalProps.breed
});


const mapDispatchToProps = (dispatch) => ({
    closeModal: () => closeModal()
});

export default connect(mapStateToProps, mapDispatchToProps())(BreedModal)

