import { configureStore, createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: { risk: "Medium", industry: "Any", budget: 10000000 },
  reducers: {
    setPreferences: (state, action) => Object.assign(state, action.payload)
  }
});

const investmentsSlice = createSlice({
  name: "investments",
  initialState: [],
  reducers: {
    hydrate: (_, action) => action.payload,
    toggle: (state, action) => {
      const id = action.payload;
      const index = state.indexOf(id);
      if (index >= 0) state.splice(index, 1);
      else state.push(id);
    }
  }
});

export const { setPreferences } = preferencesSlice.actions;
export const { hydrate, toggle } = investmentsSlice.actions;

export const store = configureStore({
  reducer: { preferences: preferencesSlice.reducer, investments: investmentsSlice.reducer }
});
