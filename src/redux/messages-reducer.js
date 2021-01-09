const ADD_MESSAGE = 'messages/ADD-MESSAGE'
const DELETE_MESSAGE = 'messages/DELETE_MESSAGE'


let initialState = {
    dialogs: [
        {id: 0, name: 'Max'},
        {id: 1, name: 'Michael'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'James'},
        {id: 4, name: 'Mason'},
        {id: 5, name: 'William'},
        {id: 6, name: 'Tigr'},
        {id: 7, name: 'biber'},
        {id: 8, name: 'AuF'}
    ],
    messages: [
        {id: 0, message: 'Hello'},
        {id: 1, message: 'How are you?????'},
        {id: 2, message: 'Oh my god, yeassss'},
        {id: 3, message: 'O, vi is Anglii?????'},
        {id: 4, message: 'YoYo'}
    ],
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            }
           return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.length(p => p.id != action.messageId)
            }
        }
        default:
            return state
    }
}
export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})
export const deleteMessage = (messageId) => ({type: ADD_MESSAGE, messageId})

export default messagesReducer