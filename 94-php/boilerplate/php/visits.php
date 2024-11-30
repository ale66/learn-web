<?php
// this file is executed upon a page sending a POST back
// please only change the name of the file were each visit is recorded
// in line 8

session_start();

$file = '/tmpreport/visits.txt';

// Check if the visitor has a session
if (!isset($_SESSION['visit_counter'])) {
    // If no session, it's a new visit
    $visit_message = 'New visit';

    // Combine IP address and user agent to create a unique identifier
    $visitor_identifier = $_SERVER['REMOTE_ADDR'] . $_SERVER['HTTP_USER_AGENT'];

    // Check if the identifier is already recorded
    $identifiers = file_get_contents($file);
    
    if (strpos($identifiers, $visitor_identifier) === false) {
        // If not, it's a truly new visit
        $current_time = date('d-m-Y H:i:s', strtotime('+1 hour'));
        file_put_contents($file, "$visitor_identifier $current_time\n", FILE_APPEND);
    }

    // Set a session variable to avoid counting multiple times during the same visit
    $_SESSION['visit_counter'] = true;
} else {
    // the session exists: it's a returning visit
    $visit_message = 'Returning visit';
}

// Get the current date and time
$timestamp = date('d-m-Y H:i:s', strtotime('+1 hour'));

// Write the visit information to the text file
file_put_contents($file, "$visit_message at $timestamp\n", FILE_APPEND);

echo $visit_message;
?>
