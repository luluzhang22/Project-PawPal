import React from "react";
import {connect} from 'react-redux';
import {closeModal} from '../../actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PetDetail from '../../components/userDetail/PetDetail';
import BreedDetail from './BreedDetail';
import NavBar from '../../components/Navigation';


const UserPetDetail = ({userPet, closeModal}) => {
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
            <PetDetail userPet={userPet}/>
            <BreedDetail/>
        </Dialog>
    )
};

const mapStateToProps = state => ({
    userPet: state.modal.modalProps.userPet
});


const mapDispatchToProps = (dispatch) => ({
    closeModal: () => closeModal()
});

export default connect(mapStateToProps, mapDispatchToProps())(UserPetDetail)

