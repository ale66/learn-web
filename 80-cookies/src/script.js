function setCookie(cname, cvalue, exdays) {
  /* sets the 'expires' value to exdays from now
    it is done in milliseconds
  */

  const d = new Date();
    
  let now = d.getTime()

  d.setTime(now + (exdays * 24 * 60 * 60 * 1000));
    
  let expires = "expires=" + d.toUTCString();
    
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {

  let name = cname + "=";
  
  // a list of cookies: ca[0] contains the first, ca[1] the second and so on
  let ca = document.cookie.split(';');
  
  // iterate over all cookies
  for(let i = 0; i < ca.length; i++) {
    
    // pick up the cookie
    let c = ca[i];
    
    // trim some extra space at the beginning
    while (c.charAt(0) == ' ') {
      // begin from position 1: we're chopping off the space in front
      c = c.substring(1);
    }
    
    // now, does the present cookie begin by name?
    if (c.indexOf(name) == 0) {

      // bingo, we found it, we return it to the caller
      return c.substring(name.length, c.length);
    }
  }
  
  // we couldn't find anything...
  return "";
}
  

  function checkCookie() {
    /* if the username exists already inside the cookie 
        then salute the returning user
    */

    // is there a cookie already?
    let user = getCookie("username");

    if (user != "") {
      // returning user: salute them
      document.getElementById('salutation').innerText = 'Hello ' + user + ', good to see you again!'
      document.getElementById('salutation').style.backgroundColor = "antiquewhite";

    } else {

      user = prompt("Thanks for visiting! Please enter your name:", "");

      if (user != "" && user != null) {

        // this will be kept for 1 day
        setCookie("username", user, 1);

        // returning user: salute them
        document.getElementById('salutation').innerText = 'Hello ' + user + ', welcome to Webcomm!'

        document.getElementById('salutation').style.backgroundColor = "antiquewhite";
      }
    }
  } 