// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the button and div elements
    const fetchDataButton = document.getElementById('fetchDataButton');
    const dataDisplay = document.getElementById('dataDisplay');

    // Add an event listener to the button
    fetchDataButton.addEventListener('click', function() {
        // URL of the API endpoint
        const apiUrl = 'https://api.example.com/data';

        // Make a GET request to the API
        fetch(apiUrl)
            .then(response => {
                // Check if the response is ok (status code 200-299)
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                // Parse the response as JSON
                return response.json();
            })
            .then(data => {
                // Display the fetched data
                dataDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});
