function bouncingBall(initial, proportion) {  
    var height = initial;
    var bounces = 0;
   
    
    while (height > 1) {
      bounces += 1; 
      height = height * proportion;     
    } 
    
    return bounces
    
  };