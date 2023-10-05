// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var noun1But = document.getElementById("noun1");
var verbBut = document.getElementById("verb");
var adjectiveBut = document.getElementById("adjective");
var noun2But = document.getElementById("noun2");
var settingBut = document.getElementById('setting');

// Constants for p tag to display query selectors
var choosenNoun1Element = document.getElementById("choosenNoun1");
var choosenVerbElement = document.getElementById("choosenVerb");
var choosenAdjectiveElement = document.getElementById("choosenAdjective");
var choosenNoun2Element = document.getElementById("choosenNoun2");
var choosenSettingElement = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
var playbackBut = document.getElementById("playback");
var randomBut = document.getElementById("random");
var storyElement = document.getElementById("story");

// Variables for pre-defined arrays
var noun1 = ["Mom", "Dad", "Dog", "My Teacher"];
var verb = ["sat on", "ate", "danced with", "saw"];
var adjective = ["a fat", "a funny", "a scary", "a slimy"];
var noun2 = ["goat", "monkey", "fish", "cow"];
var settings = ["on the moon", "on the chair", "in my soup", "on the grass"];

// Variables for count to grab array elements
var choosenNoun1 = " ";
var choosenVerb = " ";
var choosenAdjective = " ";
var choosenNoun2 = " ";
var choosenSetting = " ";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1 = getRandomWord(noun1);
    choosenNoun1Element.textContent = choosenNoun1; // if-else to change count setting
}

function verb_on_click() {
    choosenVerb = getRandomWord(verb);
    choosenVerbElement.textContent = choosenVerb;
}

function adjective_on_click() {
    choosenAdjective = getRandomWord(adjective);
    choosenAdjectiveElement.textContent = choosenAdjective;
}

function noun2_on_click() {
    choosenNoun2 = getRandomWord(noun2);
    choosenNoun2Element.textContent = choosenNoun2;
}

function setting_on_click() {
    choosenSetting = getRandomWord(settings);
    choosenSettingElement.textContent = choosenSetting;
}

// concatenate the user story and display
function playback_on_click() {
    var story = `${choosenNoun1} ${choosenVerb} ${choosenAdjective} ${choosenNoun2} in ${choosenSetting}.`;
    storyElement.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    choosenNoun1 = getRandomWord(noun1);
    choosenVerb = getRandomWord(verb);
    choosenAdjective = getRandomWord(adjective);
    choosenNoun2 = getRandomWord(noun2);
    choosenSetting = getRandomWord(settings);

    var story = `${choosenNoun1} ${choosenVerb} ${choosenAdjective} ${choosenNoun2} in ${choosenSetting}.`;
    storyElement.textContent = story;
}

/* Event Listeners
-------------------------------------------------- */
noun1But.addEventListener('click', noun1_on_click);
verbBut.addEventListener('click', verb_on_click);
adjectiveBut.addEventListener('click', adjective_on_click);
noun2But.addEventListener('click', noun2_on_click);
settingBut.addEventListener('click', setting_on_click);

playbackBut.addEventListener('click', playback_on_click);
randomBut.addEventListener('click', random_on_click);

// Function to add student ID/name dynamically
document.getElementById("200535886").textContent = "Joel Parappuram Joy";

// Function to get a random word from an array
function getRandomWord(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
