import {authAPI, captchaAPI} from "../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_CAPTCHA_URL_SUCCES = 'auth/SET_CAPTCHA_URL_SUCCES'

let initalState = {
    userid: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initalState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCES: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state
    }
}

export const setAuthUserData = (userid, email, login, isAuth = true) => ({
    type: SET_USER_DATA,
    payload: {userid, email, login, isAuth}
})

export const setCaptchaUrlSucces = (captchaUrl) => ({
    type: SET_CAPTCHA_URL_SUCCES,
    payload: {captchaUrl}
})

export const getAuth = () => async (dispatch) => {
    let data = await authAPI.getAuth()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const getLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.getLogin(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(true))
    } else {
        if (data.resultCode === 10 ) {
            dispatch(getCaptchaUrl())
        }
        let messages = data.messages.length > 0 ? data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const getUnLogin = () => async (dispatch) => {
    let data = await authAPI.getUnLogin()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let data = await captchaAPI.getCaptcha()
    let captchaUrl = data.url
        dispatch(setCaptchaUrlSucces(captchaUrl))
}


export default authReducer