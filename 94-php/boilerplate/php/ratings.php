<?php
// this file is executed upon a page sending a POST back
// please only change the name of the file were each rating is recorded
// in line 10

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rating = $_POST['rating'];

    // Save the rating and timestamp to a text file.
    $file = '/tmpreport/ratings.txt';

    $timestamp = date('d-m-Y H:i:s', strtotime('+1 hour'));
    
    $ratingInfo = "New rating at {$timestamp}: {$rating}\n";

    file_put_contents($file, $ratingInfo, FILE_APPEND);

    // Respond with a success message.
    echo 'Rating saved successfully';
} else {
    // Handle invalid requests.
    echo 'Invalid request';
}
?>
