import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TabBarState {
  screen?: string;
}

const initialState: TabBarState = {
  screen: "",
};

export const tabBarSlice = createSlice({
  name: "tabbar",
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<TabBarState["screen"]>) => {
      state.screen = action.payload;
    },
  },
});

export const { setScreen } = tabBarSlice.actions;
export default tabBarSlice.reducer;
