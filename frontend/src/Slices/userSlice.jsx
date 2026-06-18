import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {

        id: "",
        email: "",
        name: "",
        picture: "",
        role: "",

    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email
            state.picture = action.payload.picture
            state.role = action.payload.role
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer