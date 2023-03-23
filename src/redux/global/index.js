import { createSlice, } from '@reduxjs/toolkit'
import { FetchData } from './api'



const initialState = {
    url: 'http://www.omdbapi.com/?s=Matrix&apikey=720c3666',
    data: [],
    originalData: [],
    status: 'pending'
}

const globalApp = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUrl: (state, action) => {
            const url = action.payload
            state.url = url
        },
        setData: (state, action) => {
            const data = action.payload
            state.data = [...data]
        }
    },
    extraReducers: {
        [FetchData.fulfilled]: (state, action) => {
            const data = action.payload?.data
            const url = action?.payload?.url
            state.originalData = data
            state.url = url
            state.data = data
            state.status = 'fulfilled'
        },
        [FetchData.pending]: (state, action) => {
            state.status = 'pending'
        },
        [FetchData.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
})

export default globalApp.reducer
export const { setUrl, setData } = globalApp.actions