function timedReading(maxLength, text) {
    const justText = text.replace(/[^a-zA-Z0-9 ]/g, '');
    const words = justText.split(" ");
    let regex = /^[a-zA-Z]+$/; 
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (regex.test(words[i]) && words[i].length <= maxLength) {
            count += 1;
        } else {
            count = count;
        }    
    }  
    return count;
  }