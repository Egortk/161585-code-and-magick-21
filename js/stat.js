'use strict';

var CLOUD_WIDTN = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CLOUD_PADDINGS = 20;

var BAR_HEIGHT_MAX = 150;
var BAR_WIDTH = 40;
var BAR_Y_GLOBAL = CLOUD_Y + CLOUD_PADDINGS + (CLOUD_PADDINGS * 2.8);
var BAR_GAP = 50;

var NAME_Y = (CLOUD_HEIGHT + CLOUD_Y) - CLOUD_PADDINGS;

var SCORE_Y_GLOBAL = BAR_Y_GLOBAL - (CLOUD_PADDINGS * 0.5);

var ITEM_X = CLOUD_X + CLOUD_PADDINGS;

var renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTN, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(
    ctx,
    'rgba(0, 0, 0, 0.7)',
    CLOUD_X + GAP,
    CLOUD_Y + GAP
  );
  renderCloud(
    ctx,
    '#fff',
    CLOUD_X,
    CLOUD_Y
  );
  ctx.fillStyle = '#000';
  ctx.fillText(
    'Ура вы победили!',
    ITEM_X,
    CLOUD_PADDINGS * 2
  );
  ctx.fillText(
    'Список результатов:',
    ITEM_X,
    CLOUD_PADDINGS * 3
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    let ITEM_X_STEP = ITEM_X + (BAR_WIDTH + BAR_GAP) * i;

    let barHeight = (BAR_HEIGHT_MAX * times[i]) / maxTime;
    let barY = BAR_Y_GLOBAL + (BAR_HEIGHT_MAX - barHeight);
    let scoreY = SCORE_Y_GLOBAL + (BAR_HEIGHT_MAX - barHeight);

    let getRandomColor = function () {
      return "hsl(" + 233 + ',' + (100 * Math.random()) + '%,' + (100 * Math.random()) + '%)';
    };

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillStyle = '#000';
    ctx.fillText(
      players[i],
      ITEM_X_STEP,
      NAME_Y
    );
    ctx.fillStyle = '#000';
    ctx.fillText(
      Math.ceil(times[i]),
      ITEM_X_STEP,
      scoreY
    );
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(
      ITEM_X_STEP,
      barY,
      BAR_WIDTH,
      barHeight
    );
  }
};
