$(document).ready(function(){
    let selectedRating = 0;
  
    // Check if a persistent cookie exists
    const existingRating = getCookie('userRating');
    const sessionExpiry = new Date(getCookie('sessionExpiry'));
  
    if (existingRating && sessionExpiry && new Date() < sessionExpiry) {
      // Display the existing rating
      selectedRating = parseInt(existingRating);
      displayThankYouMessage();
    }
  
    $('.star').click(function(){
      // Check if the user has already rated in the current session
      if (getCookie('hasRated')) {
        // Display a message indicating that the user has already rated
        $('#thank-you-message').text('Thanks, we have your rating already!');
        return;
      }
  
      selectedRating = $(this).data('rating');
      displayThankYouMessage();
  
      // Save the rating to a cookie with an expiration date for the next minute
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 24);
  
      document.cookie = 'userRating=' + selectedRating + '; expires=' + expirationDate.toUTCString() + '; path=/';
      document.cookie = 'hasRated=true; expires=' + expirationDate.toUTCString() + '; path=/';
      document.cookie = 'sessionExpiry=' + expirationDate.toUTCString() + '; expires=' + expirationDate.toUTCString() + '; path=/';
  
      // Send the rating to the PHP file using fetch for saving.
      fetch('../php/ratings.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'rating=' + selectedRating,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Rating saved successfully');
      })
      .catch(error => {
        console.error('Error saving rating: ', error);
      });
    });
  
    function displayThankYouMessage() {
      $('#thank-you-message').text('Thanks for rating us!');
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
  });
  