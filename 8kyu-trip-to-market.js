/********************************************************************************************************
Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". 
Since you are tired of being grifted by this monster, the time has come to code a solution for finding
The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". 
Your function should return true if you're talking with The Loch Ness Moster, false otherwise.
*********************************************************************************************************/


function isLockNessMonster(s) {
  const phrase1 = /tree fiddy/;
  const phrase2 = /3.50/;
  const phrase3 = /three fifty/;
  
  if(s.match(phrase1)){
    return true;
  }
  else if(s.match(phrase2)){
    return true;
  }
  else if(s.match(phrase3)){
    return true;
  }
  else{
    return false;
  }
  
}
