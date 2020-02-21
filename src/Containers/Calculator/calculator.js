const doIt = (a1, a2, perf) => {
  // eslint-disable-next-line radix
  const n1 = parseInt(a1);
  // eslint-disable-next-line radix
  const n2 = parseInt(a2);

  switch (perf) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    default:
      return 'I have never heard of that one..';
  }
};

export default doIt;
