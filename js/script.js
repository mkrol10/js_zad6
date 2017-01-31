var maleNames = ['Mateusz', 'Kacper', 'Michał', 'Żelisław'];
var femaleNames = ['Natalia', 'Kornelia', 'Izabela', 'Aleksandra'];

var allNames = maleNames.concat(femaleNames);

var newName = 'Józef';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

console.log(allNames);