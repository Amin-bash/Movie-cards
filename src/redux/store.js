import { configureStore } from '@reduxjs/toolkit'
import global from './global'

export const store = configureStore({
    reducer: {
        'global': global
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
})