/* global gapi */

import gapiResponseToEmail from "./gapiResponseToEmail";

const fetchEmailById = emailId => {
  return new Promise(resolve => {
    gapi.client.gmail.users.messages
      .get({
        userId: "me",
        id: emailId
      })
      .then(response => {
        const email = gapiResponseToEmail(response);
        resolve(email);
      });
  });
};

export default fetchEmailById;
