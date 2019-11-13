// ask the user name
var name = prompt('Whats your name?');
console.log(name);


//as the user lastname
var surname = prompt('Whats your last name?');
console.log(surname);


// ask user favourite color
var color19 = prompt('Whats your favourite color?');
console.log(color19);

//print result
var password = (name + surname + color19);
console.log(password);
document.getElementByID('name').innerHtml = nome;
document.getElementByID('surname').innerHtml = cognome;
document.getElementByID('color19').innerHtml = colore;

document.getElementByID('password').setAttribute('class','visible');
