import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Floor {
    floor: number
    access: boolean 
}

const initialState: Floor[] = [
    {floor: 8, access: false},
    {floor: 3, access: false},
    {floor: 10,access: false},
    {floor: 12,access: false},
    {floor: 15,access: false},
]

export const accessSlice = createSlice({
    name: 'floorAccess',
    initialState,
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            state[action.payload].access =  false ? true : false 
        }
    }
})

export default accessSlice

export const {changeAccess} = accessSlice.actions
