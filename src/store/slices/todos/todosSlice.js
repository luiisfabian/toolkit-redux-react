
export const todoSlice = createSlice({
    name: 'todos',
    initialState: 10,
    reducers: {
        increment: (state, /* action */ ) => {
            //! https://react-redux.js.org/tutorials/quick-start
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.counter += 1;
        },
    },
});

export const {increment} = todoSlice.actions;