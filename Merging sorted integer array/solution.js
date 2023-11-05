function mergeArrays(a, b) {
    const oneArray = [...a, ...b];
    const duplicatesRemoved = [...new Set(oneArray)]
    
    duplicatesRemoved.sort((a,b) => a-b)
    
    return duplicatesRemoved
  }