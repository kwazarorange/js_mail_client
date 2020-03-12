import fetchEmailById from "./fetchEmailById";

const fetchEmailsByIds = emailIds => {
  return new Promise(resolve => {
    const actions = emailIds.map(fetchEmailById);
    const results = Promise.all(actions);
    results.then(emails => {
      resolve(emails);
    });
  });
};
export default fetchEmailsByIds;
