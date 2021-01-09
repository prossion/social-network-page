import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 0, message: 'Hello', likecount: '20'},
        {id: 1, message: 'Goodbye', likecount: '9'},
        {id: 2, message: 'Hello, im Max', likecount: '70'}
    ]
}

test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostActionCreator("testActionCreator")
    // 2. Action
    let newState = profileReducer(state,action)
    // 3.expectation
    expect(newState.posts.length).toBe(4)
});

test('message of new posts should be corrected', () => {
    // 1. Test data
    let action = addPostActionCreator("testActionCreator")
    // 2. Action
    let newState = profileReducer(state,action)
    // 3.expectation
    expect(newState.posts[3].message).toBe("testActionCreator")
});

test('after deleting length of message should be decrement', () => {
    // 1. Test data
    let action = deletePost(1)
    // 2. Action
    let newState = profileReducer(state,action)
    // 3.expectation
    expect(newState.posts.length).toBe(2)
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. Test data
    let action = deletePost(100)
    // 2. Action
    let newState = profileReducer(state,action)
    // 3.expectation
    expect(newState.posts.length).toBe(3)
});

