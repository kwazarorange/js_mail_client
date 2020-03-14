const useDate = stringDate => {
  const date = new Date(stringDate);
  const today = new Date();

  if (
    today.getDate() == date.getDate() &&
    today.getMonth() == date.getMonth() &&
    today.getFullYear() == date.getFullYear()
  ) {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric"
    });
  }
  return date.toLocaleDateString();
};

export default useDate;
