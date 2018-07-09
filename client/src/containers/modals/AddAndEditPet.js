import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {closeModal, modifyModalProps} from "../../actions";
import {connect} from "react-redux";
import {userAddPet} from "../../actions/user";
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const AddPet = ({curUser, petForm, errorText, breedDataSource, closeModal, onAddPet, onChangeForm}) => {

    const notNullText = "This field is required";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!petForm.petName) {
            onChangeForm({petForm, errorText: {...errorText, petName: notNullText}});
            return;
        }
        if (!petForm.breed) {
            onChangeForm({petForm, errorText: {...errorText, breed: notNullText}});
            return;
        }
        onAddPet(curUser.email, petForm);
        closeModal();
    };


    const actions = [<FlatButton label="Close" secondary={true} onClick={closeModal}/>,
        <FlatButton label="Submit" primary={true} onClick={handleSubmit}/>];

    const breedItems = [];
    for (let breed of breedDataSource) {
        breedItems.push(<MenuItem value={breed} key={breed} primaryText={breed}/>);
    }

    const gender = [<MenuItem value='Female' key='Female' primaryText='Female'/>,
        <MenuItem value='Male' key='Male' primaryText='Male'/>];

    const onChange = (name, value) => {
        if (value && (name === 'petName' || name === 'breed')) {
            onChangeForm({petForm: {...petForm, [name]: value}, errorText: {...errorText, [name]: ''}});
        } else {
            onChangeForm({petForm: {...petForm, [name]: value}, errorText});
        }
    };

    return (
        <Dialog
            actions={actions}
            open={true}
            modal={false}
            title={'Add Your Friend'}
            autoScrollBodyContent={true}>
            <div>
                <TextField hintText="Pet's Name" errorText={errorText.petName} value={petForm.petName}
                           floatingLabelText="Pet's Name"
                           onChange={(event) => onChange("petName", event.target.value)}/>
                <div>
                    <SelectField floatingLabelText="Pet's Breed" errorText={errorText.breed} maxHeight={300}
                                 value={petForm.breed} name='breed'
                                 onChange={(event, index, value) => onChange("breed", value)}>
                        {breedItems}
                    </SelectField>
                </div>
                <div>
                    <SelectField floatingLabelText="Pet's Gender" maxHeight={300} value={petForm.gender}
                                 onChange={(event, index, value) => onChange("gender", value)}>
                        {gender}
                    </SelectField>
                </div>
                <DatePicker floatingLabelText="Pet's Birthday" maxDate={new Date()} container="inline"
                            value={petForm.birthday} mode="landscape"
                            onChange={(event, date) => onChange("birthday", date)}/>
                <TextField hintText="Pet's Color" errorText="" value={petForm.color} floatingLabelText="Pet's Color"
                           onChange={(event) => onChange("color", event.target.value)}
                />
            </div>
        </Dialog>
    )
};

const mapStateToProps = state => ({
    petForm: state.modal.modalProps.petForm,
    errorText: state.modal.modalProps.errorText,
    curUser: state.userLogin.curUser.userInfo,
    breedDataSource: state.breedList.breedNames
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => {
        dispatch(closeModal())
    },
    onAddPet: (userEmail, addPetsInfo) => {
        dispatch(userAddPet(userEmail, addPetsInfo))
    },
    onChangeForm: (props) => {
        dispatch(modifyModalProps(props))
    }
});
export default connect(mapStateToProps,
    mapDispatchToProps
)(AddPet);
