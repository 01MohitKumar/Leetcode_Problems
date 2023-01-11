// 875. Koko Eating Bananas

// Input: piles = [3,6,7,11], h = 8
// Output: 4

const calcTime = (piles, speed) =>
  piles.reduce((acc, pile) => acc + Math.ceil(pile / speed), 0);

var minEatingSpeed = function (piles, h) {
  let l = 0,
    r = Math.max(...piles),
    mid,
    time,
    best;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    time = calcTime(piles, mid);
    if (time <= h) {
      best = mid;
      r = mid - 1;
    } else l = mid + 1;
  }
  return best;
};
