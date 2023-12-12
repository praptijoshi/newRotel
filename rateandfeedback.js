function submitFeedback() {
    // Get the form elements
    var rating = document.getElementById('rating').value;
    var feedbackText = document.getElementById('feedbackText').value;

    // Check if both rating and feedback are provided
    if (rating && feedbackText) {
        // Display an alert with the submitted values
        alert('Feedback submitted successfully!\nRating: ' + rating + '\nFeedback: ' + feedbackText);

        // Clear the form fields if needed
        document.getElementById('rating').value = '';
        document.getElementById('feedbackText').value = '';

        // Return false to prevent the form from actually submitting
        return false;
    } else {
        // If either rating or feedback is missing, display an error alert
        alert('Please provide both rating and feedback.');
        
        // Return true to allow the form submission
        return true;
    }
}
