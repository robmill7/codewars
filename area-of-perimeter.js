const areaOrPerimeter = function(l , w) {
  
  // if length and width are equal return formula for squares area
  if(l == w){
    return l*w;
  }
  else{   //if length and width are not equal return formula for rectangle perimeter
    return 2*(l+w);
  }
};
