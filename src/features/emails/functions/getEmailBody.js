const getHTMLPart = arr => {
  return new Promise((resolve, reject) => {
    for (let x = 0; x <= arr.length; x++) {
      if (typeof arr[x].parts === "undefined") {
        if (arr[x].mimeType === "text/html") {
          resolve(arr[x].body.data);
        }
      } else {
        return resolve(getHTMLPart(arr[x].parts));
      }
    }
    resolve("");
  });
};

const getEmailBody = async message => {
  let encodedBody = "";
  if (typeof message.parts === "undefined") {
    encodedBody = message.body;
  } else {
    encodedBody = await getHTMLPart(message.parts);
  }
  encodedBody = encodedBody
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .replace(/\s/g, "");
  return decodeURIComponent(escape(window.atob(encodedBody)));
};

export default getEmailBody;
