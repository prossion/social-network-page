import React from "react";
import {getLogin} from "../../redux/auth-reducer"
import Login from "./Login";
import {compose} from "redux";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getLogin()
    }

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {

}


export default compose(
    connect(mapStateToProps, {getLogin}))(LoginContainer)