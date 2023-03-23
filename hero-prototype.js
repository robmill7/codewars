/*
define a Hero prototype to be used in a terminal game. 
The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
*/

function Hero(name, position) {
  this.name = name || 'Hero';
  this.position = position || '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

Hero.prototype.move = function(direction) {
  // Implement movement logic here
  console.log(`${this.name} moved ${direction}.`);
};

Hero.prototype.attack = function(target) {
  // Implement attack logic here
  console.log(`${this.name} attacked ${target.name} for ${this.damage} damage.`);
};

Hero.prototype.levelUp = function() {
  // Implement level up logic here
  console.log(`${this.name} leveled up!`);
  this.health += 10;
  this.damage += 2;
};
