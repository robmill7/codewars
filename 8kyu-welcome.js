/************************************************************************************************************
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - 
if you have it in your database. It should default to English if the language is not in the database, 
or in the event of an invalid input.
*************************************************************************************************************/

function greet(language) {
	let dataBase = {
    
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
  };
  
  // checking for valid input returning language selection
  if (dataBase.hasOwnProperty(language)) {
    return dataBase[language];
  } else {
    // defaulting to english if input is invalid 
    return dataBase.english;
  }
}
