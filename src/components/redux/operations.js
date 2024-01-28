import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/api/'
const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const signUp = createAsyncThunk('auth/signUp', async (user, thunkAPI) => {
    try {
        const { data } = await axios.post('/signup', user)
        setToken(data.token);
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const signIn = createAsyncThunk('auth/signIn', async (user, thunkAPI) => {
    try {
        const { data } = await axios.post('auth/signin', user)
        console.log(data)
        console.log(user)
        setToken(data.token);
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})