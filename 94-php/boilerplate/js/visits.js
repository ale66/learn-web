// Script that sends the cookie to a Php file

//eval root path for this site
console.log("window.location.protocol:",window.location.protocol);
console.log("window.location.host:",window.location.host);
console.log("window.location.pathname:",window.location.pathname);
let rooturl=window.location.protocol+"//"+window.location.host+window.location.pathname;
rooturl=rooturl.replace(/[^/]*$/, "");
console.log(rooturl);

//exec call to server site code
var xhr = new XMLHttpRequest();
xhr.open('GET', rooturl+'php/visits.php', true);
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
			let response = xhr.responseText;
    	console.log('Response:'+response);
    };
}
