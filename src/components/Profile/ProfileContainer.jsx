import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer"
import {withRouter} from "react-router-dom"
import {Redirect} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authoraizedUserId
            if (!userId) {
                userId = this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'./login'}/>

        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile}
                         status={this.props.status} updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authoraizedUserId: state.auth.userid,
        isAuth: state.auth.isAuth

    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

