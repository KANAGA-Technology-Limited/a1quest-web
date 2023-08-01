import { removeSessionDetails, storeSessionDetails } from './../../functions/userSession';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../types/user';

// Define a type for the slice state

// Define the initial state using that type
const initialState: { user: UserType | null } = {
  user: null,
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState: { ...initialState, count: 200 },
  reducers: {
    updateUser(state, action: PayloadAction<{ user: UserType }>) {
      state.user = action.payload.user;
      storeSessionDetails(action.payload.user);
    },

    signOut(state) {
      state.user = null;
      removeSessionDetails();
    },
  },
});

export const { updateUser, signOut } = userSlice.actions;

export default userSlice.reducer;
