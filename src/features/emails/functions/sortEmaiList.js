const sortEmailList = list => {
  return new Promise((resolve, reject) => {
    const sorted = list.sort((a, b) => new Date(b.date) - new Date(a.date));
    resolve(sorted);
  });
};

export default sortEmailList;
