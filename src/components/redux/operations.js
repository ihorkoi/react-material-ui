import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ''
const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const signUp = createAsyncThunk('signUp', async (user, thunkAPI) => {
    try {
        const { data } = await axios.post('/signup', user)
        setToken(data.token);
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const signIn = createAsyncThunk('signIn', async (user, thunkAPI) => {
    try {
        const { data } = await axios.post('/login', user)
        setToken(data.token);
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})