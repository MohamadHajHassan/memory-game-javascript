window.onload = () => {
  // Variables
  const backDiv = document.querySelectorAll(".back");
  const cardsArray = [
    `<img src="images/html-logo.png" alt="" />`,
    `<img src="images/html-logo.png" alt="" />`,
    `<img src="images/css-logo.png" alt="" />`,
    `<img src="images/css-logo.png" alt="" />`,
    `<img src="images/js-logo.png" alt="" />`,
    `<img src="images/js-logo.png" alt="" />`,
  ];
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

  const assignCards = (array1, array2) => {
    for (let i = 0; i < 6; i++) {
      array1[i].innerHTML = array2[i];
    }
  };

  shuffle(cardsArray);
  assignCards(backDiv, cardsArray);
};
