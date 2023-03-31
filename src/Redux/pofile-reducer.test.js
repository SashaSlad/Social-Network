import { expect, test } from '@jest/globals';
import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from "./pofile-reducer";

let state = {
	postsData: [
		{ id: "1", message: "Hi, it is my first progect!", likes: "7" },
		{ id: "2", message: "I hope you will like it!", likes: "16" },
		{ id: "3", message: "Good luck!", likes: "23" },
	]
};

test('new post should be added, length of posts should be incremented', () => {
	//  1. test data
	let action = addPostActionCreator("first project");

	//  2. action
	let newState = profileReducer(state, action);

	//  3. expections
	expect(newState.posts.length).toBe(4);
});

test('new post message should be correct', () => {
	//  1. test data
	let action = addPostActionCreator("first project");

	//  2. action
	let newState = profileReducer(state, action);

	//  3. expections
	expect(newState.posts[4].message).toBe("first project");
});

test('after deleting length of messages should be decrement', () => {
	//  1. test data
	let action = deletePost(1);

	//  2. action
	let newState = profileReducer(state, action);

	//  3. expections
	expect(newState.posts.length).toBe(3);
});

test('after deleting length of messages should be decrement if id is incorrect', () => {
	//  1. test data
	let action = deletePost(1000);

	//  2. action
	let newState = profileReducer(state, action);

	//  3. expections
	expect(newState.posts.length).toBe(4);
});