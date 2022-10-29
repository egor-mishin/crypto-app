import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICoin, IProfileState } from './profileSlice.interface'


const initialState: IProfileState = {
    userInfo: {},
    status: 'idle',
    errorCode: null,
}

export const profileSlice = createSlice({
    name: 'profileData',
    initialState,
    reducers: {}
})

export default profileSlice
