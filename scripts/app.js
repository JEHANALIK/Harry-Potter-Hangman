function init() {
  const letters = document.querySelectorAll(".letters");
  const letterBtn = document.querySelectorAll(".letterBtn");
  const playTheme = document.querySelector("#playTheme");
  const showDash = document.querySelector(".showDash");
  const spellsBtn = document.querySelector("#spellsBtn");
  // const charactersBtn = document.querySelector("#charactersBtn");
  //const objectsBtn = document.querySelector("#objectsBtn");
  const start = document.querySelector("#start");
  const reset = document.querySelector("#reset");
  const hangman = document.querySelector(".hangman");
  const popup1 = document.querySelector("#popup1");
  let status = false;
  let wrongLetters = 0;
  const spells = [
    "ALOHOMORA",
    "AVADAKEDAVRA",
    "FERAVERTO",
    "LEVIOCA",
    "DELUMINATOR",
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

  // ---------------------------------output dashes----------------------------------
  spellsBtn.addEventListener("click", generateSpells);

  function compareLetter(letterC) {
    spellChars.forEach((char, key) => {
      if (char == letterC) {
        status = true;
        spellDash[key] = letterC;
        return spellDash[key];
      }
    });
    showDash.innerHTML = spellDash.join(" "); //output the correct selected letter to the dash
    console.log("check");
    console.log(spellDash);
    console.log(showDash.innerHTML);
    console.log(status);
    if (status != true) {
      wrongLetters++;
      hangman.classList.add(`letter-${wrongLetters}`); //add to the hangman class to display the hangman
      document.querySelector("#wrong").play();
      if (wrongLetters === 5) {
        gameOver();
      }
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
  }
  reset.addEventListener("click", resetGame);

  // ---------------------------------Win and Lose-----------------------------
  const endText = document.querySelector("#endText");
  const content = document.querySelector(".content");

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
