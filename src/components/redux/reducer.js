import { createReducer } from '@reduxjs/toolkit'
import { signUp, signIn } from './operations'

const initialState = {
    token: '',
    name: '',
    avatarURL: '',
    monthWorkouts: []
}

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signIn.fulfilled, (state, action) => {
            state.token = action.payload.token
        })
})