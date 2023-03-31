import profileReducer, { addPostActionCreator } from "./pofile-reducer";

test('new post should be added, length of posts should be incremented', () => {
	//  1. test data
	let action = addPostActionCreator("first project");

	let state = {
		posts: [
			{ id: "1", message: "Hi, it is my first progect!", likes: "7" },
			{ id: "2", message: "I hope you will like it!", likes: "16" },
			{ id: "3", message: "Good luck!", likes: "23" },
		]
	};
	//  2. action
	let newState = profileReducer(state, action);

	//  3. expections
	expect (newState.posts.length).toBe(5);
});
