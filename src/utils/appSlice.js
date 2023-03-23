import { createSlice } from '@reduxjs/toolkit';



const appSlice = createSlice({
    name: "app",
    initialState: {
        currentMood: ""
    },
    reducers: {
        setCurrentMood: (state, action) => {
            state.currentMood = action.payload;
        }
    }

})


export const { setCurrentMood } = appSlice.actions;
export default appSlice.reducer;