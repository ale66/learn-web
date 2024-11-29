// Script that sends the cookie to a Php file
var xhr = new XMLHttpRequest();
xhr.open('GET', '../php/visits.php', true);
xhr.send();
