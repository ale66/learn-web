function getCookie1(name) {
    /* much the same as getCookie(name) 
    but returns only one value
    */
    const nameEQ = name + "=";

    const ca = document.cookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
    
        let c = ca[i];
    
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(nameEQ) === 0){
            return c.substring(nameEQ.length);
        }
    }
    return null;
}

// Check if user has already responded
function checkFeedback() {

    const feedback = getCookie1('pageFeedback');

    if (feedback === 'yes') {
        // User liked the page, don't show survey
        console.log('User already likes the page!');

    } else {
        // No feedback yet or user is unsure/didn't like it, show survey
        document.getElementById('surveyContainer').classList.remove('hidden');
    }
}

// Submit feedback
function submitFeedback() {

    const selected = document.querySelector('input[name="feedback"]:checked');

    if (!selected) {
        alert('Please select an option');
        return;
    }
    
    const value = selected.value;

    setCookie('pageFeedback', value, 365); // Store for 1 year

    /*
    new concept: we change all elements of a class at once
    either by ther CSS class, .radio-group, or by the html tag name

    classList contains all the CSS classes that have been assigned
    try, e.g., a console.log(thankYouMsg.classList); to visualise
    */

    // Hide radio buttons and show thank you message
    document.querySelector('.radio-group').classList.add('hidden');
    document.querySelector('button').classList.add('hidden');
    
    const thankYouMsg = document.getElementById('thankYouMessage');

    if (value === 'yes') {
        thankYouMsg.textContent = 'Thank you! We\'re glad you like it! 😊';

    } else if (value === 'no') {
        thankYouMsg.textContent = 'Thank you for your feedback! We\'ll work on improving.';

    } else {
        thankYouMsg.textContent = 'No problem! Feel free to let us know when you decide.';
    }

    thankYouMsg.classList.remove('hidden');
    
    // Hide entire survey after 2 seconds only if user liked it
    if (value === 'yes') {

        setTimeout(() => {
            document.getElementById('surveyContainer').classList.add('hidden');
        }, 2000);
    } else {

        // For other responses, just hide the thank you message after a bit
        setTimeout(() => {
            thankYouMsg.classList.add('hidden');
            document.querySelector('.radio-group').classList.remove('hidden');
            document.querySelector('button').classList.remove('hidden');
        }, 2000);
    }
}
