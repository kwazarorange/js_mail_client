import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { showMailModal: false },
  reducers: {
    updateMailModal: state => {
      const showModal = state.showMailModal;
      state.showMailModal = !showModal;
    }
  }
});

const { reducer, actions } = appSlice;
export const { updateMailModal } = actions;

export default reducer;
