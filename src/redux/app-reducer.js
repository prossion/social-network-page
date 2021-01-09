import {getAuth} from "./auth-reducer";

const INITIALIZED_SUCCES = 'app/INITIALIZED_SUCCES'

let initalState = {
   initialized: false
}

const appReducer = (state = initalState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCES: {
            return{
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initialSucces = () => ({type: INITIALIZED_SUCCES})

export const initialApp = () => (dispatch) => {
    let promise = dispatch(getAuth())
    Promise.all([promise])
        .then( () => {
            dispatch(initialSucces())
        })
}

export default appReducer