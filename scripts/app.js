function init() {
  const letters = document.querySelectorAll(".letters");
  const letterBtn = document.querySelectorAll(".letterBtn");
  const playTheme = document.querySelector("#playTheme");
  const showDash = document.querySelector(".showDash");
  const spellsBtn = document.querySelector("#spellsBtn");
  const reset = document.querySelector("#reset");
  const hangman = document.querySelector(".hangman");
  const popup1 = document.querySelector("#popup1");
  const lives = document.querySelector("#lives");
  let status = false;
  let wrongLetters = 0;
  const spells = [
    "ALOHOMORA",
    "FERAVERTO",
    "LEVIOCA",
    "WAND",
    "HOWLER",
    "REVEALER",
    "DOBBY",
    "HAGRID",
    "MALFOY",
    "VOLDEMORT",
    "SNAPE",
    "HERMIONE",
    "POTTER",
    "DUMBLEDORE",
    "MAGIC",
    "WITCH",
    "HOGWARTS",
    "SPELLS",
    "POTION",
    "WIZARD",
    "DRAGON",
    "BROOM",
  ];

  /* -------------------------------handle the clicked letters--------------------------*/
  document.addEventListener("click", (event) => {
    status = false; //set to false if the it click , then in compare to true if the same letter
    let letterClicked = event.target.classList; //click
    let letterC = event.target.innerHTML;
    if (letterClicked == "letterBtn") {
      event.target.classList.add("clicked");
      //letterBtn.disabled = true;
      return compareLetter(letterC); // return the letter that you clicked
    }
  });
  // ---------------------------------generate Random words-----------------------------
  let spellChars = [];
  let spellDash = [];
  let spellJoin = [];
  function generateSpells() {
    //create the dashes for the spell categorie
    var randomSpells = spells[Math.floor(Math.random() * spells.length)];
    spellChars = randomSpells.split(""); //
    spellDash = Array(randomSpells.length).fill("_");
    spellJoin = spellDash.join(" ");
    console.log(spellChars);
    console.log(spellJoin);
    console.log("dashh");
    showDash.innerHTML = spellJoin;
  }
  spellsBtn.addEventListener("click", generateSpells);

  const endText = document.querySelector("#endText");
  const content = document.querySelector(".content");
  // ---------------------------------Win and Lose-----------------------------
  function gameOver() {
    endText.innerHTML = "GAME OVER!";
    content.innerHTML = "The word is " + spellChars.join("");
    document.body.appendChild(popup1); //show popup
    resetGame(); //reset everything
  }
  function win() {
    endText.innerHTML = "YOU GUESSED ALL LETTERS";
    content.innerHTML = "The word is " + spellChars.join("");
    document.body.appendChild(popup1);
    resetGame();
  }
  // ---------------------------------output dashes----------------------------------
  let liveCount = 5;
  let checkArray = [];
  function compareLetter(letterC) {
    spellChars.forEach((char, key) => {
      if (char == letterC) {
        status = true;
        spellDash[key] = letterC;
        checkArray.push(letterC);
        return spellDash[key];
      }
    });
    showDash.innerHTML = spellDash.join(" "); //output the correct selected letter to the dash
    console.log("spellChars");
    console.log(spellChars);
    console.log("check array");
    console.log(checkArray);
    console.log(status);

    /* --------check the wrong letters--------------------*/
    if (status != true) {
      wrongLetters++;
      liveCount--;
      hangman.classList.add(`letter-${wrongLetters}`); //display the hangman
      document.querySelector("#wrong").play();
      if (wrongLetters === 5) {
        gameOver();
        checkArray.length = 0;
      }
    }
    lives.innerHTML = `LIVES= ${liveCount}`;
    document.body.appendChild(lives);
    if (spellChars.length === checkArray.length) {
      win();
      checkArray.length = 0;
    }
  }
  /* -------------------------------------reset game-----------------------------------------*/
  function resetGame() {
    letterBtn.forEach((btn) => {
      btn.classList.remove("clicked");
    });
    console.log(letterBtn);
    reset.disabled = true;
    showDash.textContent = "";
    hangman.classList.remove("letter-1");
    hangman.classList.remove("letter-2");
    hangman.classList.remove("letter-3");
    hangman.classList.remove("letter-4");
    hangman.classList.remove("letter-5");
    wrongLetters = 0;
    lives.textContent = " ";
    liveCount = 5;
  }
  reset.addEventListener("click", resetGame);
  // ---------------------------------Background Sound-----------------------------
  const audio = document.querySelector("#audio");
  playTheme.addEventListener("click", (event) => {
    audio.src = "/Harry Potter Theme Song.mp3";
    audio.play();
  });

  stopTheme.addEventListener("click", (event) => {
    audio.src = "/Harry Potter Theme Song.mp3";
    audio.stop();
  });
}
window.addEventListener("DOMContentLoaded", init);
