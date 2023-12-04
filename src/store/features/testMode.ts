import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
type TestModeType = {
  open: boolean;
  topicId?: string;
  subtopicId?: string;
};

// Define the initial state using that type
const initialState: TestModeType = {
  open: false,
  topicId: '',
  subtopicId: '',
};

// Actual Slice
export const testModeSlice = createSlice({
  name: 'testMode',
  initialState,
  reducers: {
    enterTestMode(state, action: PayloadAction<TestModeType>) {
      state.open = action.payload.open;
      state.topicId = action.payload.topicId;
      state.subtopicId = action.payload.subtopicId;
    },
    exitTestMode(state) {
      state.open = false;
      state.topicId = '';
      state.subtopicId = '';
    },
  },
});

export const { enterTestMode, exitTestMode } = testModeSlice.actions;

export default testModeSlice.reducer;
