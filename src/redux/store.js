import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import friendsReducer from './users-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hello', likecount: '20'},
                {id: 1, message: 'Goodbye', likecount: '9'},
                {id: 2, message: 'Hello, im Max', likecount: '70'}
            ],
            newPostText: 'Enter you text!'
        },
        messagesPage: {
            dialogs: [
                {id: 0, name: 'Max'},
                {id: 1, name: 'Michael'},
                {id: 2, name: 'Alexander'},
                {id: 3, name: 'James'},
                {id: 4, name: 'Mason'},
                {id: 5, name: 'William'}
            ],
            messages: [
                {id: 0, message: 'Hello'},
                {id: 1, message: 'How are you?????'},
                {id: 2, message: 'Oh my god, yeassss'},
                {id: 3, message: 'O, vi is Anglii?????'},
                {id: 3, message: 'YoYo'}
            ],
            newMessageText: 'New Message'
        },
        friendsPage: {
            friend: [
                {id: 0, name: 'Max', surname: 'Boyko'},
                {id: 1, name: 'Michael', surname: 'Smith'},
                {id: 2, name: 'Alexander', surname: 'Bulkin'},
                {id: 3, name: 'James', surname: 'Jones'},
                {id: 4, name: 'Peter', surname: 'Griffin'},
                {id: 5, name: 'William', surname: 'Wilson'},
                {id: 6, name: 'Quagmire'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

        this._callSubscriber(this._state);
    }
}

window.store = store
export default store