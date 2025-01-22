import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './categories/categoriesSlice'
import productsSlice from './products/productsSlice'
import cart from './cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'


const persistCartConfig = {
    key: 'cart',
    storage,
    whiteList: ['items']
}
const rootReducer = combineReducers({
    categoriesSlice,
    productsSlice,
    cart: persistReducer(persistCartConfig, cart)
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})
export const persisterStore = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch