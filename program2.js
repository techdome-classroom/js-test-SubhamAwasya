const decodeTheRing = function (s, p) {
  // write your code here

  let sl = s.length;
  let pl = p.length;

  let i = 0;
  let j = 0;

  let result = true;

  while (sl > 0) {
    if (s[i] == p[i]) {
      i++;
      j++;
    } else if (p[i] == "*") {
    } else if (p[i] == "?") {
    }
  }

  return true;
};

module.exports = decodeTheRing;
