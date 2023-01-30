/******************************************************************************************************************************
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.

*****************************************************************************************************************************/


function calculateTip(amount, rating) {
  let terrible = 0.0
  let poor = .05
  let good = .1
  let great = .15
  let exellent = .2
  let Rating = rating.toLowerCase();
  
  if(Rating == 'excellent'){
    return Math.ceil((exellent * amount) )
  }
  else if(Rating == 'great'){
    return Math.ceil((great * amount) )
  }
  else if(Rating == 'good'){
    return Math.ceil((good * amount))
  }
  else if(Rating == 'poor'){
    return Math.ceil((poor * amount) )
  }
  else if(Rating == 'terrible'){
    return Math.ceil((terrible * amount) )
  }
  else{
    return 'Rating not recognised'
  }
  
  
}
