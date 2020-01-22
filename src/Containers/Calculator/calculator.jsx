const doIt = (a1,a2,perf) => {
  let n1 = parseInt(a1);
  let n2 = parseInt(a2);
switch(perf) {
  case "+":
    return n1+n2;
    break;
  case "-":
      return n1-n2;
    break;
  case "*":
      return n1*n2;
    break;
    case "/":
      return n1/n2;
    break;
  default:
    return "I have never heard of that one..";
    break;
} 
}

export default doIt;