import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { login } from "./services/login";
import { resume } from "./services/resume";
import { user } from "./services/user";
import authReducer from "./reducers/userreducer";

const rootReducer = combineReducers({
  auth: login.reducer,
  userinfo: authReducer,
  [user.reducerPath]: user.reducer,
  [resume.reducerPath]: resume.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(login.middleware, user.middleware, resume.middleware),
});

export const persistor = persistStore(store);
