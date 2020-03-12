/* global gapi */

const fetchEmailIds = () => {
  return new Promise((resolve, reject) => {
    gapi.client.gmail.users.messages
      .list({
        userId: "me",
        labelIds: "INBOX",
        maxResults: 10
      })
      .then(response => {
        resolve(response.result.messages.map(message => message.id));
      })
      .catch(error => {
        reject(error.message);
      });
  });
};

export default fetchEmailIds;
