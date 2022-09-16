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
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");
  const card4 = document.getElementById("card4");
  const card5 = document.getElementById("card5");
  const card6 = document.getElementById("card6");

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

  const addListener = item => {
    item.addEventListener("click", () => {
      const section = document.querySelectorAll(`#${item.id} section`);
      section[0].classList.toggle("erase");
      const div = document.querySelectorAll(`#${item.id} div`);
      div[0].classList.toggle("erase");
    });
  };

  //
  shuffle(cardsArray);
  assignCards(backDiv, cardsArray);
  addListener(card1);
  addListener(card2);
  addListener(card3);
  addListener(card4);
  addListener(card5);
  addListener(card6);
};
