/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  const regex = /[♠♥♦♣]/g;
  const matches = card.match(regex);
  
  console.log(matches);
  
  if (matches.includes('♠')) {
    return 'spades';
  } 
  else if (matches.includes('♥')) {
    return 'hearts';
  }
  else if (matches.includes('♦')) {
    return 'diamonds';
  }
  else {
    return 'clubs';
  }
}
