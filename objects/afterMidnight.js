var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;


function timeOfDay(deltaMinutes) {
  var baselineDate = new Date;
  baselineDate.setHours(0);
  baselineDate.setMinutes(0+deltaMinutes);
  var minutes = baselineDate.getMinutes();
  var hours = baselineDate.getHours();
  return `${padWithZeroes(hours,2)}:${padWithZeroes(minutes,2)}`
  return baselineDate
}

function timeOfDay2(deltaMinutes) {
  var hours;
  var minutes;

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}



console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
