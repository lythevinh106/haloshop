import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../features/Auth/AuthSlice'
import cartSlice from '../features/Cart/CartSlice'
import progressSlice from '../features/progress/progressSlice'

export const store = configureStore({


  reducer: {

    progress: progressSlice.reducer,
    cart: cartSlice.reducer,
    auth: AuthSlice.reducer

  },
})