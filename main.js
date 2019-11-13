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
var password = (name + surname + color);
console.log(password);
document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('color19').innerHTML = color19;


document.getElementById('password').setAttribute('class','visible');
