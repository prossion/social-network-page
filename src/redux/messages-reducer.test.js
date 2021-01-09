import React from "react";
import messagesReducer, {addMessage, deleteMessage} from "./messages-reducer";

let state = {
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

test('length of message should be incremented', () => {
    let action = addMessage("New message")
    let newState = messagesReducer(state, action)
    expect(newState.messages.length).toBe(6)
});

test('length of dialogs should be incremented', () => {
    let action = addMessage("New message")
    let newState = messagesReducer(state, action)
    expect(newState.dialogs.length).toBe(9)
});

test('after deleting messages should be decrement', () => {
    let action = deleteMessage(1)
    let newState = messagesReducer(state, action)
    expect(newState.dialogs.length).toBe(9)
});
