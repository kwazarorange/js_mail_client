const findValueByName = (array, value) => {
  const foundObject = array.find(obj => obj.name == value);
  return foundObject.value ? foundObject.value : "";
};
const getSubstrInBrackets = (string) => {
  const regex = /(?<=<).+(?=>)/g;
  try {
    return string.match(regex)[0];
  } catch (e) {
    return "";
  }
}

const gapiResponseToEmail = response => {
  const { headers, parts, body } = response.result.payload;
  const bodyData = body.data;
  const {id} = response.result;
  const to = getSubstrInBrackets(findValueByName(headers, "To"));
  const from = getSubstrInBrackets(findValueByName(headers, "From"));
  const subject = findValueByName(headers, "Subject");
  const date = findValueByName(headers, "Date");

  const email = {
    id,
    to,
    from,
    subject,
    date,
    body: { parts, body: bodyData }
  };
  return email;
};

export default gapiResponseToEmail;
