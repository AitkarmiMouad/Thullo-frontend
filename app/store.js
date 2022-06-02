import { createStore, action, thunk, computed } from "easy-peasy";

export const store = createStore({
  posts: 'hi',
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),

});
