// These criteria must be met:
// > When a key is pressed, the associated sound is played
// > When a button is clicked, the associated sound is played
// That’s it. Style it however you want!

// Function to play the sound where parameter is source of the sound
const sound = (source) => {
  var snd = new Audio(source)//wav is also supported
  snd.play()//plays the sound
}

// Variables of every button created in html
const aKey = document.getElementById("A");
const sKey = document.getElementById("S");
const dKey = document.getElementById("D");
const fKey = document.getElementById("F");
const gKey = document.getElementById("G");
const hKey = document.getElementById("H");
const jKey = document.getElementById("J");
const kKey = document.getElementById("K");
const lKey = document.getElementById("L");


// Functionn to play the sound. When keyboard character is pressed sound is played. 
// Variables
// Source of the sound file
// keyKeyboard - nuber (keyCode.event)

const keyPress = (keyKeyboard, source) => {
  document.addEventListener('keyup', (event) =>
    {if (event.keyCode === keyKeyboard)
    {sound(source)}})
}

// Functionn to play the sound. When button is clicked sound is played. 
// Sound function inside
// Variables definied above

const clickButton = (keyChar, source) => {
  keyChar.addEventListener('click', () => {
    sound(source)
  }, true)

}

// Function to play the sound when button is clicked or keyboard char pressed.
// 2 Functions wrapped inside
clickPressSound = (keyChar, source, keyKeyboard) => {
  keyPress(keyKeyboard, source)
  clickButton(keyChar, source)
}



clickPressSound(aKey, './boom.wav', 65);
clickPressSound(sKey, './clap.wav', 83);
clickPressSound(dKey, './hihat.wav', 68)
clickPressSound(fKey, './kick.wav', 70)
clickPressSound(gKey, './openhat.wav', 71)
clickPressSound(hKey, './ride.wav', 72)
clickPressSound(jKey, './snare.wav', 74)
clickPressSound(kKey, './tink.wav', 75)
clickPressSound(lKey, './tom.wav', 76)

