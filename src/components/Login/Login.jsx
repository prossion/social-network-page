import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../Utils/Validators";
import {connect} from "react-redux";
import {getLogin} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom'


const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&   <Field component={Input} name={"captcha"} className={s.captcha} placeholder={'symbols on captcha'}
                                          type={'text'} validate={required}/>}
            {props.error && <div className={s.formError}>
                {props.error}
            </div>}
            <div>
                <Field component={Input} name={"login"} className={s.textLogin} placeholder={'write you login'}
                       type={'text'} validate={required}/>
            </div>
            <div>
                <Field component={Input} name={"password"} className={s.password} placeholder={'write you password'}
                       type={'password'} validate={required}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} className={s.check} type={'checkbox'}/> remember me
            </div>
            <div>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getLogin(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={s.login}>
            <h1 className={s.name}>Welcome</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getLogin})(Login)