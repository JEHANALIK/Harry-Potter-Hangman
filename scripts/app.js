function init() {
  const letters = document.querySelector(".letters");
  const letterBtn = document.querySelectorAll(".letterBtn");
  const playTheme = document.querySelector("#playTheme");
  const showDash = document.querySelector(".showDash");
  const spellsBtn = document.querySelector("#spellsBtn");
  const charactersBtn = document.querySelector("#charactersBtn");
  const objectsBtn = document.querySelector("#objectsBtn");
  const start = document.querySelector("#start");
  const reset = document.querySelector("#reset");
  const hangman = document.querySelector(".hangman");
  const popup1 = document.querySelector("#popup1");
  let status = false;
  let wrongLetters = 0;
  document.addEventListener("click", (event) => {
    status = false; //set to false if the it click , then in compare to true if the same letter
    let letterClicked = event.target.classList; //click
    let letterC = event.target.innerHTML;
    if (letterClicked == "letterBtn") {
      event.target.classList.add("clicked");
      letterBtn.disabled = true;
      return compareLetter(letterC); // return the letter that you clicked
    }
  });

  const spells = ["ALOHOMORA", "AVADAKEDAVRA", "FERAVERTO", "LEVIOCA"];
  const objects = ["DELUMINATOR", "WAND", "HOWLER", "REVEALER"];
  const characters = [
    "DOBBY",
    "HAGRID",
    "MALFOY",
    "VOLDEMORT",
    "SNAPE",
    "HERMIONE",
    "POTTER",
    "DUMBLEDORE",
  ];

  /* ------------------------------------------reset-----------------------------------------*/
  function resetGame() {
    letterBtn.forEach((resetbtn) => {
      resetbtn.disabled = true;
    });
    spellsBtn.disabled = true;
    charactersBtn.disabled = true;
    objectsBtn.disabled = true;
    reset.disabled = true;
    showDash.textContent = "";
    start.disabled = false;
    hangman.textContent = "";
  }
  reset.addEventListener("click", resetGame);
  /* ------------------------------------------start-
  maybe ill delete it----------------------------------------*/
  function startGame() {
    letterBtn.forEach((startbtn) => {
      startbtn.disabled = false;
    });
    spellsBtn.disabled = false;
    charactersBtn.disabled = false;
    objectsBtn.disabled = false;
    reset.disabled = false;
    showDash.textContent = "";
    start.disabled = true;
  }
  start.addEventListener("click", startGame);

  // ---------------------------------generate Random spells-----------------------------
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

  spellsBtn.addEventListener("click", generateSpells); //output the correct selected letter to the dash
  function compareLetter(letterC) {
    spellChars.forEach((char, key) => {
      if (char == letterC) {
        status = true;
        spellDash[key] = letterC;
        return spellDash[key];
      }
    });
    showDash.innerHTML = spellDash;
    console.log("checj");
    console.log(spellDash);
    console.log(showDash.innerHTML);
    console.log(status);
    if (status != true) {
      wrongLetters++;
      hangman.classList.add(`letter-${wrongLetters}`); //add to the hangman class to display the hangman
      document.querySelector("#wrong").play();
      if (wrongLetters === 5) {
        gameOver();
        letterBtn.classList.add("stop");
      }
    }
  }
  const endText = document.querySelector("#endText");
  const content = document.querySelector(".content");

  function gameOver() {
    endText.innerHTML = "GAME OVER!";
    content.innerHTML = "The word is " + spellChars.join("");

    document.body.appendChild(popup1);
    resetGame();
  }

  function win() {
    endText.innerHTML = "YOU GUESSED ALL LETTERS";
    document.body.appendChild(popup1);
    resetGame();
  }

  // ---------------------------------generate random chracters----------------------------
  // function generateCharacters() {
  //   var randomCharacters =
  //     characters[Math.floor(Math.random() * characters.length)];
  //   let x = "";
  //   for (let i = 0; i < randomCharacters.length; i++) {
  //     let characterChars = randomCharacters.charAt(i).toUpperCase();
  //     // const html = `<p class="word">_</p>`;
  //     characterChars.toUpperCase();
  //     let s = characterChars.replace(/[A-Z]/, "_");
  //     x = x + " " + s;
  //   }
  //   showDash.innerHTML = x;
  // }
  // charactersBtn.addEventListener("click", generateCharacters);

  /*let objectChars = [];
  let objectDash = [];
  let objectJoin = [];
  function generateObjects() {
    //create the dashes for the spell categorie
    let randomObjects = objects[Math.floor(Math.random() * objects.length)];
    objectChars = randomObjects.split(""); //
    objectDash = Array(randomObjects.length).fill("_");
    objectJoin = objectDash.join(" ");
    console.log(objectChars);
    console.log(objectJoin);
    console.log("dashh");
    showDash.innerHTML = objectJoin;
  }
  objectsBtn.addEventListener("click", generateObjects); //output the correct selected letter to the dash
  function compareLetter(letterC) {
    objectChars.forEach((object, i) => {
      if (object == letterC) {
        // guess;
        //spellJoin[key].pop();
        objectDash[i] = letterC;
        return objectDash[i];
      }
    });
    showDash.innerHTML = objectDash;
    console.log("checj");
    //console.log(guess);
    console.log(objectDash);
    console.log(showDash.innerHTML);
  } */

  const audio = document.querySelector("#audio");
  playTheme.addEventListener("click", (event) => {
    audio.src = "/Harry Potter Theme Song.mp3";
    audio.play();
    console.log("page loaded");
  });

  stopTheme.addEventListener("click", (event) => {
    audio.src = "/Harry Potter Theme Song.mp3";
    audio.stop();
  });
}
window.addEventListener("DOMContentLoaded", init);
