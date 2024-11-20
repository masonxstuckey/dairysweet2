document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase(); // Get the search query
    const items = document.querySelectorAll('.menu-category p'); // Select all menu items
    let resultsFound = false; // Track if any items match the query

    items.forEach((item) => {
        const text = item.textContent.toLowerCase(); // Get the text of the menu item
        if (text.startsWith(query) && query !== "") {
            item.style.display = 'block'; // Show matching items
            resultsFound = true;
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });

    // If no results are found, display a "No results" message
    const noResultsMessage = document.getElementById('noResultsMessage');
    if (!resultsFound && query !== "") {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
});
