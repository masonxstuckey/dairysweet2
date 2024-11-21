document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase(); // Capture the input text and convert it to lowercase
    const items = document.querySelectorAll('.menu-category p'); // Select all menu items
    let resultsFound = false; // To track if matches are found

    items.forEach((item) => {
        const text = item.textContent.toLowerCase(); // Get the text content of each item
        if (text.startsWith(query) && query !== "") {
            item.style.display = 'block'; // Show items that match
            resultsFound = true; // At least one match found
        } else {
            item.style.display = 'none'; // Hide items that don’t match
        }
    });

    // Show or hide the "No Results" message
    const noResultsMessage = document.getElementById('noResultsMessage');
    if (!resultsFound && query !== "") {
        noResultsMessage.style.display = 'block'; // Show the message if no results match
    } else {
        noResultsMessage.style.display = 'none'; // Hide the message if matches are found
    }
});
