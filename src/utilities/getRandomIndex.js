const getRandomIndex = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
};

module.exports = getRandomIndex;
