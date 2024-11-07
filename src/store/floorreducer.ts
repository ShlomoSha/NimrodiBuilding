import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Floor {
    [key: number]: boolean
}

const initialState: Floor = {
    8: false,
    3: false,
    10:false,
    12:false,
    15:false,
}

export const accessSlice = createSlice({
    name: 'floorAccess',
    initialState,
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            state[action.payload] =  false ? true : false 
        }
    }
})

export default accessSlice

export const {changeAccess} = accessSlice.actions
