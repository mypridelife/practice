const fibonacci = (s => (f = i => s[i] || (s[i] = f(i - 1) + f(i - 2))))([
  0,
  1,
  1
]);
