window.onload = () => {
  // Variables
  const backDiv = document.querySelectorAll(".back");
  const cards = document.querySelectorAll(".card");
  const cardsArray = [
    `<img src="images/html-logo.png" alt="" />`,
    `<img src="images/html-logo.png" alt="" />`,
    `<img src="images/css-logo.png" alt="" />`,
    `<img src="images/css-logo.png" alt="" />`,
    `<img src="images/js-logo.png" alt="" />`,
    `<img src="images/js-logo.png" alt="" />`,
  ];
  let winsDisplay = document.getElementById("wins-display");
  let score = document.getElementById("score");
  let btn = document.getElementById("btn");
  let counter = 0;
  let wins = 0;

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
      item.children[0].classList.toggle("erase");
      item.children[1].classList.toggle("erase");
      item.classList.toggle("visible");
      counter++;
    });
  };

  const addListenerChecker = item => {
    item.addEventListener("click", () => {
      if (counter >= 2) {
        const visibleCards = document.querySelectorAll(".visible");
        visibleCards[0].children[0].classList.toggle("erase");
        visibleCards[0].children[1].classList.toggle("erase");
        visibleCards[1].children[0].classList.toggle("erase");
        visibleCards[1].children[1].classList.toggle("erase");
        if (
          visibleCards[0].children[1].children[0].src ==
          visibleCards[1].children[1].children[0].src
        ) {
          visibleCards[0].classList.add("hidden");
          visibleCards[1].classList.add("hidden");
          visibleCards[0].classList.toggle("visible");
          visibleCards[1].classList.toggle("visible");
        } else {
          visibleCards[0].classList.toggle("visible");
          visibleCards[1].classList.toggle("visible");
        }
        counter = 0;
      }
    });
  };

  const winCheck = () => {
    const hiddenCards = document.querySelectorAll(".hidden");
    if (hiddenCards.length == 6) {
      wins++;
      winsDisplay.innerText = `You win!`;
      setInterval(() => {
        winsDisplay.innerText = ``;
      }, 750);
      score.innerHTML = wins;
    }
  };
  const addListenerWinCheck = item => {
    item.addEventListener("click", winCheck);
  };
  const restart = () => {
    const hiddenCards = document.querySelectorAll(".hidden");
    hiddenCards.forEach(item => {
      item.classList.remove("hidden");
    });
    shuffle(cardsArray);
    assignCards(backDiv, cardsArray);
    counter = 0;
  };

  //
  score.innerHTML = wins;
  shuffle(cardsArray);
  assignCards(backDiv, cardsArray);
  cards.forEach(addListener);
  cards.forEach(addListenerChecker);
  cards.forEach(addListenerWinCheck);
  btn.addEventListener("click", restart);
};
