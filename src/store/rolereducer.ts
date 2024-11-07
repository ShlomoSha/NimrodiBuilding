import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: string = "Unknown Personnel"

export const roleSlice = createSlice({
    name: 'Role',
    initialState,
    reducers: {
        setRole : (state, action: PayloadAction<string>) => {
            if (action.payload == "Guest" || action.payload == "Student" || action.payload == "Developer" || action.payload == "Executive Personnel") {
                state = action.payload
                return
            } else {
                return
            }
        }
    }
})

export default roleSlice

export const { setRole } = roleSlice.actions