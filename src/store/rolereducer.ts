import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import roles from '../data/roles.json'
const initialState: string = "Unknown Personnel"

export const roleSlice = createSlice({
    name: 'Role',
    initialState,
    reducers: {
        setRole : (state, action: PayloadAction<number>) => {
           state = roles[action.payload]
        }
    }
})

export default roleSlice

export const { setRole } = roleSlice.actions