'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристофр', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var GET_RANDOM_VALUE = function (wizardObj) {
  for (var startValue = 0; startValue <= wizardObj.length; startValue++) {
    startValue += 1;
  };
  return Math.round(Math.random() * (startValue - 0) + 0);
};

var wizards = [
  {
    name: WIZARD_FIRST_NAMES[GET_RANDOM_VALUE(WIZARD_FIRST_NAMES)] + ' ' + WIZARD_LAST_NAMES[GET_RANDOM_VALUE(WIZARD_LAST_NAMES)],
    coatColor: WIZARD_COAT[GET_RANDOM_VALUE(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[GET_RANDOM_VALUE(WIZARD_EYES)]
  },
  {
    name: WIZARD_FIRST_NAMES[GET_RANDOM_VALUE(WIZARD_FIRST_NAMES)] + ' ' + WIZARD_LAST_NAMES[GET_RANDOM_VALUE(WIZARD_LAST_NAMES)],
    coatColor: WIZARD_COAT[GET_RANDOM_VALUE(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[GET_RANDOM_VALUE(WIZARD_EYES)]
  },
  {
    name: WIZARD_FIRST_NAMES[GET_RANDOM_VALUE(WIZARD_FIRST_NAMES)] + ' ' + WIZARD_LAST_NAMES[GET_RANDOM_VALUE(WIZARD_LAST_NAMES)],
    coatColor: WIZARD_COAT[GET_RANDOM_VALUE(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[GET_RANDOM_VALUE(WIZARD_EYES)]
  },
  {
    name: WIZARD_FIRST_NAMES[GET_RANDOM_VALUE(WIZARD_FIRST_NAMES)] + ' ' + WIZARD_LAST_NAMES[GET_RANDOM_VALUE(WIZARD_LAST_NAMES)],
    coatColor: WIZARD_COAT[GET_RANDOM_VALUE(WIZARD_COAT)],
    eyesColor: WIZARD_EYES[GET_RANDOM_VALUE(WIZARD_EYES)]
  },
];

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
