// ------------------------------------------------------------------------------------------------------------
// = Bootcamp Berijalan Techno Center | Batch 8
// = Day 1 | HOMEWORK
// = 25 September 2023
// ------------------------------------------------------------------------------------------------------------
function timeConversion(time) {
  const isAM = time.includes('AM');
  let [hours, minutes, seconds] = time.slice(0, 8).split(':').map(Number);

  if (isAM) {
    hours = (hours === 12) ? 0 : hours;
  } else {
    hours = (hours === 12) ? 12 : hours + 12;
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Contoh penggunaan fungsi:
console.log(timeConversion('12:01:00PM')); // Output: '12:01:00'
console.log(timeConversion('12:01:00AM')); // Output: '00:01:00'