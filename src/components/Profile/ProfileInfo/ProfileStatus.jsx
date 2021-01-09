import React from 'react';
import s from './ProfileInfo.module.css';
class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    }

    deActivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState( {
           status: e.currentTarget.value
        } )

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState( {
                status: this.props.status
            } )
        }
    }

    render() {
        return (
            <div className={s.status}>
                    {!this.state.editMode &&
                        <div className={s.spanBlock}>
                            <span onDoubleClick={ this.activateEditMode } className={s.span}>{this.props.status || "Status "}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div className={s.inputBlock}>
                             <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateEditMode } className={s.input} value={this.state.status}/>
                        </div>
                    }
            </div>
        )
    }
}

export default ProfileStatus;

