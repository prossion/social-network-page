import {profileAPI} from "../components/api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES'

let initalState = {
    posts: [
        {id: 0, message: 'Hello', likecount: '20'},
        {id: 1, message: 'Goodbye', likecount: '9'},
        {id: 2, message: 'Hello, im Max', likecount: '70'}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initalState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likecount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.deleteId)
            }
        }

        case SAVE_PHOTO_SUCCES: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (deleteId) => ({type: DELETE_POST, deleteId})
export const savePhotoSucces = (photos) => ({type: SAVE_PHOTO_SUCCES, photos})

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)

        if (data.resultCode === 0) {
            dispatch(savePhotoSucces(data.data.photos))
        }
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit('profileData', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}


export default profileReducer