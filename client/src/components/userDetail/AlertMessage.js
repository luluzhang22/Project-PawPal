import React, { Component } from 'react';
import { connect } from 'react-redux';
import {alertActions} from "../../actions/alertAction";

class AlertMessage extends Component{
    constructor(props) {
        super(props);
        // const { dispatch } = this.props;
        this.state = {};
        alertActions.clear();
    }
    render() {
        const { alert } = this.props;
        return (
            <div className='alert-message'>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { alert } = state;
    return {
        alert
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        alertActions : ( alert ) => dispatch(alertActions(alert))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage);