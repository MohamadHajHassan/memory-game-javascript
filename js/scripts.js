window.onload = () => {
  // Variables
  const cardsArray = [1, 1, 2, 2, 3, 3];

  //   Functions
  const shuffle = array => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  };
};
