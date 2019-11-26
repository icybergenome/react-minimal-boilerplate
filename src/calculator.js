export const doIt = (n1,n2,perf) => {
    

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
      text = "I have never heard of that one..";
      break;
  } 
}