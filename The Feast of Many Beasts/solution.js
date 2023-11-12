function feast(beast, dish) {
  
    if (beast.slice(0, 1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1)){
      return true;
    } else {
      return false;
    }
  //your function here
  }