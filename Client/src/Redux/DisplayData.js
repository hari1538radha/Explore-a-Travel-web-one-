import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Displaydata = createAsyncThunk("displayData", async () => {
    const data = fetch("").then((res) => {
        return res.json();
    })

    return Displaydata;
});

const DisplayDatareducer = createSlice(
    {
        name: "displayData",
        initialState:
        {
            Display: [],
            loading: false
        },

        reducers: {},
        extradReducers: {
            [Displaydata.pending]: (state, action) => {
                state.loading = true;
            },
            [Displaydata.fullfilled]: (state, action) => {
                state.Display = action.payload;
                state.loading = false;
            },
            [Displaydata.rejected]: (state, action) => {
                state.loading = false;
            }

        },
    },
);

const Display =DisplayDatareducer.reducer
export default Display;