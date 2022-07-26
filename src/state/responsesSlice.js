import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prior_screen: "Unknown",
  comorbidity: "Unknown",
  family_history: "Unknown",
  biopsy_history: "Unknown",
  density: "Unknown",
  modality: "Unknown",
};

export const responsesSlice = createSlice({
  name: 'responses',
  initialState,
  reducers: {
    getResponses: (state) => {
      return { ...state }
    },
    setResponses: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { getResponses, setResponses } = responsesSlice.actions;
export default responsesSlice.reducer;
