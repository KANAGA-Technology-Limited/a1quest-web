import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultTitle = 'A1 Quest';

// Define the initial state using that type
const initialState: { pageTitle: string; showBackButton?: boolean } = {
  pageTitle: defaultTitle,
  showBackButton: false,
};

// Actual Slice
export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    updatePageTitle(state, action: PayloadAction<{ pageTitle: string }>) {
      state.pageTitle = action.payload.pageTitle;
    },
    resetPageTitle(state) {
      state.pageTitle = defaultTitle;
    },
    enableBackButton(state) {
      state.showBackButton = true;
    },
    hideBackButton(state) {
      state.showBackButton = false;
    },
  },
});

export const { updatePageTitle, resetPageTitle, enableBackButton, hideBackButton } =
  layoutSlice.actions;

export default layoutSlice.reducer;
