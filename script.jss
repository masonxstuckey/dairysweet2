document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase(); // Get the search query
    const items = document.querySelectorAll('.menu-category p'); // Select all menu items

    let found = false;

    items.forEach((item) => {
        const text = item.textContent.toLowerCase(); // Get item text
        if (text.includes(query) && query !== "") {
            found = true;
            item.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the item
            item.style.backgroundColor = '#ffffa0'; // Highlight the item
            setTimeout(() => (item.style.backgroundColor = ''), 2000); // Remove highlight after 2 seconds
        }
    });

    // Show "unavailable" if no match is found
    if (!found && query !== "") {
        alert("Item unavailable on the menu.");
    }
});
