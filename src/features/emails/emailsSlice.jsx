/* global gapi */
import { createSlice } from "@reduxjs/toolkit";
import fetchEmailIds from "./functions/fetchEmailIds";
import sortEmailList from "./functions/sortEmaiList";
import fetchEmailsByIds from "./functions/fetchEmailsByIds";

const emailsSlice = createSlice({
  name: "emails",
  initialState: [],
  reducers: {
    addEmail: (state, action) => {
      const email = action.payload;
      state.push(...email);
    }
  }
});

const { reducer, actions } = emailsSlice;
const { addEmail } = actions;

export default reducer;

export const fetchEmails = () => {
  return dispatch => {
    fetchEmailIds().then(emailIds =>
      fetchEmailsByIds(emailIds).then(emails => {
        sortEmailList(emails).then(sortedEmails => {
          dispatch(addEmail(sortedEmails));
        });
      })
    );
  };
};
