/* global gapi */
const formValuesToPayload = formValues => {
  const headers = {
    To: formValues.email,
    Subject: formValues.subject
  };
  const { message } = formValues;
  let payload = "";
  for (const [key, value] of Object.entries(headers)) {
    payload += key + ": " + value + "\r\n";
  }
  payload += "\r\n" + message;
  return payload;
};

const sendMail = formValues => {
  return new Promise((resolve, reject) => {
    const payload = formValuesToPayload(formValues);
    const sendRequest = gapi.client.gmail.users.messages.send({
      userId: "me",
      resource: {
        raw: window
          .btoa(payload)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
      }
    });

    sendRequest.then(() => resolve()).catch(error => reject(error));
  });
};

export default sendMail;
