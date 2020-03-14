/* global gapi */
import { createSlice } from "@reduxjs/toolkit";
import fetchEmailIds from "./functions/fetchEmailIds";
import sortEmailList from "./functions/sortEmaiList";
import fetchEmailsByIds from "./functions/fetchEmailsByIds";

const emailsSlice = createSlice({
  name: "emails",
  initialState: {},
  reducers: {
    addEmail: (state, action) => {
      const emails = action.payload;
      console.log(emails);
      emails.map(email => state[email.id] = email);
    },
    toggleOpenEmail: (state, action) => {
      const id = action.payload;
      const prev = state[id].isOpen;
      state[id].isOpen = !prev;
    }
  }
});

const { reducer, actions } = emailsSlice;
export const { addEmail, toggleOpenEmail } = actions;

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
