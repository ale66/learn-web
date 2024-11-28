function randAssign() {
  // Import pre-made functions in the Math library
  // guess a random number between 0
  // (inclusive),  and 1 (exclusive)
  
  myrand = Math.random();

  // half of the times (more or less) the 
  // guessed number will be below 0.5:
  if (myrand >= 0.5) {
  
    return 'A'
  
  } else {
    
    return 'B'
  
  }
}