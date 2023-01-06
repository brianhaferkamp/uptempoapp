function die1() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides);
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die1Result = dice.roll();
  console.log('Die 1 result: ' + die1Result);
  
}

function die2() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides);
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die2Result = dice.roll();
  console.log('Die 2 result: ' + die2Result);
  
}

function die3() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides);
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die3Result = dice.roll();
  console.log('Die 3 result: ' + die3Result);
  
}

function die4() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides);
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die4Result = dice.roll();
  console.log('Die 4 result: ' + die4Result);
  
}

function die5() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides);
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die5Result = dice.roll();
  console.log('Die 5 result: ' + die5Result);
  
}

function die6() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides);
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die6Result = dice.roll();
  console.log('Die 6 result: ' + die6Result);
  
}

function rollAllDice() {
  die1();
  die2();
  die3();
  die4();
  die5();
  die6();
}

function resultsRoll() {
  die1();
  die2();
  
  if (die1Result === 0 && die2Result === 0) {
    // change 00 to 100
    $('.die1 > span').css('display', 'none').text('10').fadeIn();
    $('.die2 > span').css('display', 'none').text('10').fadeIn();
  } else {
    // result roll
    $('.die1 > span').css('display', 'none').text(die1Result).fadeIn();
    $('.die2 > span').css('display', 'none').text(die2Result).fadeIn();
  }
}

function shootingRoll() {
  die3();
  die4();
  
  if (die3Result === 0 && die4Result === 0) {
    // shooting / runs
    $('.die3 > span').css('display', 'none').text('10').fadeIn();
    $('.die4 > span').css('display', 'none').text('10').fadeIn();
  } else {
    // shooting / runs
    $('.die3 > span').css('display', 'none').text(die3Result).fadeIn();
    $('.die4 > span').css('display', 'none').text(die4Result).fadeIn();
  }
}

function playerRoll() {
  die5();
  die6();
  
  if (die5Result === 0 && die6Result === 0) {
    // player
    $('.die5 > span').css('display', 'none').text('10').fadeIn();
    $('.die6 > span').css('display', 'none').text('10').fadeIn();
  } else {
    // player
    $('.die5 > span').css('display', 'none').text(die5Result).fadeIn();
    $('.die6 > span').css('display', 'none').text(die6Result).fadeIn();
  }
}

function outputResults() {
  if (die1Result === 0 && die2Result === 0) {
    // change 00 to 100
    $('.die1 > span').css('display', 'none').text('10').fadeIn();
    $('.die2 > span').css('display', 'none').text('10').fadeIn();
  } else {
    // result roll
    $('.die1 > span').css('display', 'none').text(die1Result).fadeIn();
    $('.die2 > span').css('display', 'none').text(die2Result).fadeIn();
  }
  
  if (die3Result === 0 && die4Result === 0) {
    // shooting / runs
    $('.die3 > span').css('display', 'none').text('10').fadeIn();
    $('.die4 > span').css('display', 'none').text('10').fadeIn();
  } else {
    // shooting / runs
    $('.die3 > span').css('display', 'none').text(die3Result).fadeIn();
    $('.die4 > span').css('display', 'none').text(die4Result).fadeIn();
  }
  
  if (die5Result === 0 && die6Result === 0) {
    // player
    $('.die5 > span').css('display', 'none').text('10').fadeIn();
    $('.die6 > span').css('display', 'none').text('10').fadeIn();
  } else {
    // player
    $('.die5 > span').css('display', 'none').text(die5Result).fadeIn();
    $('.die6 > span').css('display', 'none').text(die6Result).fadeIn();
  }
}

function clock() {
  // get current clock time
  var quarter = $('.timing .quarter').text();
  var label = $('.timing .label').text();
  var minutes = $('.clock .minutes').text();
  var seconds = $('.clock .seconds').text();
  console.log(minutes + ':' + seconds);
  
  // decrement minutes if :00
  if (seconds === '00') {
    minutes--;
  }
  
  // decrement seconds
  if (seconds === "00") {
    seconds = "40";
  } else if (seconds === "40") {
    seconds = "20";
  } else if (seconds === "20") {
    seconds = "00";
  }
  
  // output new time
  
  // check for end of quarter
  if (minutes === '0' && seconds === '00' && label === 'OT') {
    $('#roll').attr('hidden', true);
    $('#reset-game').attr('hidden', false);
    $('#overtime').attr('hidden', false);
  } else if (minutes === '0' && seconds === '00' && quarter === '4') {
    $('#roll').attr('hidden', true);
    $('#reset-game').attr('hidden', false);
    $('#overtime').attr('hidden', false);
  } else if (minutes === '0' && seconds === '00') {
    $('#roll').attr('hidden', true);
    $('#next-quarter').attr('hidden', false);
  }
  
  // output clock changes
  $('.clock .seconds').text(seconds);
  $('.clock .minutes').text(minutes);
  console.log(minutes + ':' + seconds);
}

function nextQuarter() {
  // increment quarter
  var quarter = $('.timing .quarter').text();
  quarter++;
  $('.timing .quarter').text(quarter);
  console.log('Qtr: ' + quarter);
  
  // reset clock
  $('.clock .seconds').text('00');
  $('.clock .minutes').text("12");
  
  // clear dice numbers
  $('.die span').text('');
  
  // hide next quarter button, show roll button
  $('#next-quarter').attr('hidden', true);
  $('#roll').attr('hidden', false);
}

function scoringRunsTimer() {
  // get current clock time
  var quarter = $('.timing .quarter').text();
  var label = $('.timing .label').text();
  var minutes = $('.clock .minutes').text();
  var seconds = $('.clock .seconds').text();
  console.log(minutes + ':' + seconds);
  
  if (quarter > 0 && quarter < 4) {
    
     if (minutes < 13 && minutes > 1) {
      minutes = parseInt(minutes);
      console.log(minutes);
      var interval = 2;
      console.log(interval);
      console.log(minutes - interval);
      minutes = minutes - interval;
      $('.clock .minutes').text(minutes);
       
      if (minutes == 0 && seconds == 00) {
        // hide next quarter button, show roll button
        $('#next-quarter').attr('hidden', false);
        $('#roll').attr('hidden', true);
      }
       
      
    } else if (minutes === '1') {
      $('.clock .minutes').text('11');
      if (quarter > 0 && quarter < 4) {
        quarter++;
        $('.timing .quarter').text(quarter);
      }
    } else if (minutes === '0') {
      $('.clock .minutes').text('10');
      if (quarter > 0 && quarter < 4) {
        quarter++;
        $('.timing .quarter').text(quarter);
      }
    }
  }
}

function overTime() {
  $('.timing .quarter').text('');
  $('.timing .label').text('OT');
  console.log('Overtime!');
  
  // reset clock
  $('.clock .seconds').text('00');
  $('.clock .minutes').text("12");
  
  // clear dice numbers
  $('.die span').text('');
  
  // hide next quarter button, show roll button
  $('#overtime').attr('hidden', true);
  $('#reset-game').attr('hidden', true);
  $('#roll').attr('hidden', false);
}

function resetGame() {
  
  // reset clock to 12:00
  $('.clock .minutes').text("12");
  $('.clock .seconds').text('00');
  
  // reset Qtr
  $('.timing .label').text('Qtr');
  $('.timing .quarter').text('1');
  
  // clear dice numbers
  $('.die span').text('');
  
  // hide next quarter and reset buttons, show roll button
  $('#overtime').attr('hidden', true);
  $('#reset-game').attr('hidden', true);
  $('#roll').attr('hidden', false);
}


$('#roll').on('click', function() {
  // roll all the dice
  rollAllDice();
  
  // output the results to the dice on the screen
  outputResults();
  
  // change clock and output to screen
  clock();
});

$('.dice-1').on('click', function() {
  resultsRoll();
});

$('.dice-2').on('click', function() {
  shootingRoll();
});

$('.dice-3').on('click', function() {
  playerRoll();
});

$('#next-quarter').on('click', function() {
  nextQuarter();
});

$('.clock').on('click', function() {
  scoringRunsTimer();
});

$('#overtime').on('click', function() {
  overTime();
});

$('#reset-game').on('click', function() {
  resetGame();
});