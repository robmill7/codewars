




function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window > h) {
    return -1
  }
  
  // counts number of times ball falls
  let counter = 0
  
  while (window < h) {
    counter += 1
    h *= bounce

  }
  
  // multiply by two to count the bounce up
  return counter * 2 -1
}
