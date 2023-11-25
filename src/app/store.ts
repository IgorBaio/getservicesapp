import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/user/User";
import tabBarReducer from "../Feature/tabbar/TabBar";

export default configureStore({
  reducer: {
    user: userReducer,
    tabbar: tabBarReducer
  },
});

const store = configureStore({
  reducer: {
    user: userReducer,
    tabbar: tabBarReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch