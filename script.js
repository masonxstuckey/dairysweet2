document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase(); // Capture input text and convert to lowercase
    const items = document.querySelectorAll('.menu-category p'); // Select all menu items
    const resultsContainer = document.getElementById('resultsContainer'); // Select the results container

    // Clear previous results
    resultsContainer.innerHTML = '';

    let resultsFound = false;

    items.forEach((item) => {
        const text = item.textContent.toLowerCase(); // Get the text content of each item
        if (text.includes(query) && query !== "") {
            const resultItem = document.createElement('p'); // Create a new result item
            resultItem.textContent = item.textContent; // Set the text of the result item
            resultsContainer.appendChild(resultItem); // Append the result to the container
            resultsFound = true;
        }
    });

    // Display "No Results" message if no matches are found
    if (!resultsFound && query !== "") {
        resultsContainer.innerHTML = '<p style="color: red; font-weight: bold;">No matching items found.</p>';
    }
});
