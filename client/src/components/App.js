import { connect } from 'react-redux';
import React, {Component} from 'react';

import NavBar from './Navigation';
import Carousel from './Carousel';
import UserPanel from '../containers/UserPanel';
import PetPanel from '../containers/PetPanel';
import Footer from './Footer';
import ModalContainer from '../containers/ModalContainer';

import {getSpeciesRequest} from "../actions/species";
import {loginSuccess} from "../actions/user";
import PropTypes from "prop-types";

import '../styles/App.css';

class App extends Component{
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.dispatch(getSpeciesRequest());
        const user = localStorage.getItem('user');
        if (!this.props.userLogin.isLoginSuccess && user !== 'undefined' && user) {
            this.props.dispatch(loginSuccess(true, JSON.parse(user)));
        }
    }

    render(){
        return(
            <div>
                <NavBar bars={['DETAILS', 'MY PAWPAL', 'HOME']}/>

                <Carousel/>
                <UserPanel/>
                <PetPanel/>
                <Footer />
                <ModalContainer/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { species, userLogin } = state;
    return {
        species,
        userLogin
    };
};

export default connect(mapStateToProps)(App);
