import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducer'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer)
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch