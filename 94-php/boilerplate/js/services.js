// not implemented at the moment
function closeNavbar(){
	alert("Do nothing");
}

function clearCookies(){
	delCookie('userRating', '/');
	delCookie('hasRated', '/');
	delCookie('sessionExpire', '/');
	setTimeout(function(){
		window.location=".";
	}, 500)
}

// but changing their expiration date to the 'beginning of times' 
//  we are effectively making them all expire
function delCookie(name, path){
	document.cookie = name +'=; Path=' + path + '; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
    
// Function to retrieve the value of a cookie
function getCookie(name) {
      
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    
    const cookie = cookies[i].trim();
    
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
