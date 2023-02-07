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

  // function handleClick(event) {
  document.addEventListener("click", (event) => {
    let letterClicked = event.target.classList; //click
    let letterC = event.target.innerHTML;
    if (letterClicked == "letterBtn") {
      event.target.classList.add("clicked");
      letterBtn.disabled = true;
      // console.log(letterC);
      return compareLetter(letterC); // return the letter that you clicked
    }
  });

  // }
  // letters.innerHTML = event.target.value;
  // console.log(letters);
  // }

  // letterBtn.forEach((btn) => {
  //   btn.addEventListener("click", handleClick);
  // });

  const spells = ["ALOHOMORA", "AVADAKEDAVRA", "FERAVERTO", "LEVIOCA"];
  const objects = ["DELUMINATOR", "Wand", "Howler", "Revealer"];
  const characters = [
    "DOBBY",
    "HAGRID",
    "Malfoy",
    "Voldemort",
    "SNAPE",
    "Hermione",
    "Potter",
    "Dumbledore",
  ];
  const spellSounds = [
    "spells/alohomora.mp3",
    "spells/avada_kedavra.mp3",
    "spells/expecto_patronum.mp3",
    "spells/fera_verto.mp3",
    "spells/leviosa.mp3",
  ];

  // ---------------------------------generate Random spells-----------------------------
  let spellChars = [];
  let spellDash = [];
  let spellJoin = [];
  function generateSpells() {
    var randomSpells = spells[Math.floor(Math.random() * spells.length)];
    spellChars = randomSpells.split(""); //
    spellDash = Array(randomSpells.length).fill("_");
    spellJoin = spellDash.join(" ");
    console.log(spellChars);
    console.log(spellJoin);
    console.log("dashh");

    // var x = "";

    // for (let i = 0; i < randomSpells.length; i++) {
    //   spellChars[i] = randomSpells[i];

    //   spellDash[i] = spellChars[i].replace(/[A-Z]/, "_");
    //   showDash.innerHTML = spellDash.join("");
    //   // let spellChars = randomSpells.charAt(i).toUpperCase();
    //   //spellChars.toUpperCase();
    //   /// spellDash[i] = "_";
    //   //x = x + " " + s;
    //   //console.log(spellChars);
    // }
    // console.log(spellDash);
    // console.log(spellChars);

    // spellsBtn.disabled = true;
    // objectsBtn.disabled = false;
    // charactersBtn.disabled = false;
    showDash.innerHTML = spellJoin;
  }
  let guess = [];
  spellsBtn.addEventListener("click", generateSpells);
  //const dash = document.createElement("div");
  function compareLetter(letterC) {
    spellChars.forEach((array, key) => {
      if (spellChars[key] == letterC) {
        guess[key] = letterC;
        return guess[key];
      }
      showDash.innerHTML = guess;
    });
    console.log("checj");
    console.log(guess);
  }

  //   for (let i = 0; spellChars.length; i++) {
  //     if (spellChars[i] == letterC) {
  //       guess[i] = letterC;
  //     }
  //   }
  // }
  // spellChars.forEach((event, key) => {
  //   if (event[key] === letterC) {

  //     // spellJoin.innerHTML = letterC;
  //     showDash.innerHTML = spellChars[key];
  //   }
  // const dash = document.createElement("div");
  // //dash.classList.add("addDash");
  // dash.innerHTML = letterC;
  //const check = event.textContent;

  //  event.addEventListener("click", () => {
  // for (let i = 0; i < spellChars.length; i++) {
  //   // showDash.appendChild(dash);
  //   if (spellChars[i] == letterC) {
  //     showDash.appendChild(dash);

  //     // spellDash[i] = letterC;
  //     // dash.innerHTML =dash.substring(0, i) + letterC + dash.substring(i + 1);
  //     //  dash.innerHTML = letterC;
  //     console.log(letterC);

  //     console.log("check");
  //   }
  // }
  //  });
  //});
  // }

  // ---------------------------------generate random chracters----------------------------
  function generateCharacters() {
    var randomCharacters =
      characters[Math.floor(Math.random() * characters.length)];
    let x = "";
    for (let i = 0; i < randomCharacters.length; i++) {
      let characterChars = randomCharacters.charAt(i).toUpperCase();
      // const html = `<p class="word">_</p>`;
      characterChars.toUpperCase();
      let s = characterChars.replace(/[A-Z]/, "_");
      x = x + " " + s;
    }
    showDash.innerHTML = x;
  }
  charactersBtn.addEventListener("click", generateCharacters);

  // ---------------------------------generate random objects----------------------------
  function generateObjects() {
    let randomObjects = objects[Math.floor(Math.random() * objects.length)];
    let x = "";
    for (let i = 0; i < randomObjects.length; i++) {
      var objectChars = randomObjects.charAt(i).toUpperCase();
      objectChars.toUpperCase();
      // const html = `<p class="word">_</p>`;
      let s = objectChars.replace(/[A-Z]/, "_");
      x = x + " " + s;
    }
    showDash.innerHTML = x;
  }
  objectsBtn.addEventListener("click", generateObjects);

  // ---------------------------------see if correct or not---------------------------------
  // function handleClick(event) {
  //   for (let i = 0; i < 100; i++) {
  //     let button = document.getElementById("button" + i);
  //     button.addEventListener("click", function () {
  //       console.log(event.target.i);
  //     });
  //   }
  // }
  // const keys = document.querySelectorAll('.key');
  const checkLetter = document.querySelectorAll(".clicked").value;

  // for (let i = 0; i <= spellChars.length; i++) {
  //   if (checkLetter === spellChars[i]) {
  //     console.log(checkLetter);
  //   }
  // }

  // function check() {
  //   if (button.value() === randomObjects[i]) {
  //     let count = 5;
  //     count--;
  //     console.log(count);
  //   }
  // }
  // letterBtn.addEventListener("click", check);

  // function printLetter() {
  //   for (var i = 0; i < characterChars.length; i++) {
  //     if (characterChars[i] ==

  //     var objectFill = document.createTextNode(randomObjects[i]);
  //     letters.appendChild(objectFill);
  //   }
  // }
  // letterBtn.addEventListener("click", printLetter);

  // ---------------------------------alphabets---------------------------------

  // for (let i = 65; i <= 90; i++) {
  //   var letterBtn = document.createElement("button");
  //   // lettersShow += `<button type='button' class='letterBtn'>${String.fromCharCode(
  //   //   i
  //   // )}</button>`;
  //   letterBtn.innerHTML = String.fromCharCode(i);
  //   letters.append(letterBtn);
  // }
  // ---------------------------------guess the letter---------------------------------
  // if (letterBtn.value == randomCharacters[i]) {
  //  showDash.innerHTML = randomCharacters[i];
  // }
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
