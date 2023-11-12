function fakeBin(x){
    let numbers = x.split("")
    let binaryString = "";
    let i = 0;
    
    while (i < numbers.length){
      if (numbers[i] < 5){
        binaryString += "0";
        i++
      } else {
        binaryString += "1";
        i++
      }
    } 
    return binaryString
  }