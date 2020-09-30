'use strict';

var WIZARD_FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристофр`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
var WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
var COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
var EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

var setup = document.querySelector(`.setup`);
var setupSimilar = document.querySelector(`.setup-similar`);

setup.classList.remove(`hidden`);
setupSimilar.classList.remove(`hidden`);

var similarListElement = document.querySelector(`.setup-similar-list`);
var similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

var getRandomValue = function (max, min) {
  return Math.floor(Math.random() * (max.length - min) + min);
};

var wizardAmount = 4;
var wizards = [];

for (var wizardCount = 0; wizardCount < wizardAmount; wizardCount++) {
  wizards[wizardCount] =
  {
    name: WIZARD_FIRST_NAMES[getRandomValue(WIZARD_FIRST_NAMES, 0)] + ` ` + WIZARD_LAST_NAMES[getRandomValue(WIZARD_LAST_NAMES, 0)],
    coatColor: COAT_COLORS[getRandomValue(COAT_COLORS, 0)],
    eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS, 0)]
  };
}

var renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
