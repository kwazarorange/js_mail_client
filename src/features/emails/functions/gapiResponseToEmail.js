const findValueByName = (array, value) => {
  const foundObject = array.find(obj => obj.name == value);
  return foundObject.value;
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
  const { headers } = response.result.payload;
  const to = getSubstrInBrackets(findValueByName(headers, "To"));
  const from = getSubstrInBrackets(findValueByName(headers, "From"));
  const subject = findValueByName(headers, "Subject");
  const date = findValueByName(headers, "Date");
  const email = { to, from, subject, date };

  return email;
}

export default gapiResponseToEmail;
