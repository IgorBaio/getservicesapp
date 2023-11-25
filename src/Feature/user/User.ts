import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    cellphone: string,
    email: string
}

const initialState: UserState = {
    cellphone: '',
    email: ''

}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setCellphone: (state, action: PayloadAction<UserState['cellphone']> )=>{
            state.cellphone = action.payload
        },
        setEmail:  (state, action: PayloadAction<UserState['email']> )=>{
            state.email = action.payload
        },
    }

})

export const {setCellphone, setEmail } = userSlice.actions
export default userSlice.reducer