function calculate(string) {
    var num = string.match(/\d+/g);
    var result = 0;
    
    if (string.includes("loses")){
      result = parseInt(num[0]) - parseInt(num[1]);
    } else if (string.includes("gains")) {
      result = parseInt(num[0]) + parseInt(num[1]);
    } 

    if (result >= 0){
        return result
    } else {
        return 0
    }
  } 