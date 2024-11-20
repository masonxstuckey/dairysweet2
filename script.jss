document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase(); // Get search query
    const details = document.querySelectorAll('details'); // Select all collapsible sections

    details.forEach((detail) => {
        const items = detail.querySelectorAll('.menu-category p'); // Find all menu items in the section
        let hasMatch = false;

        items.forEach((item) => {
            if (item.innerText.toLowerCase().includes(query)) {
                item.style.display = 'block'; // Show matching item
                hasMatch = true; // Mark that this section has a match
            } else {
                item.style.display = 'none'; // Hide non-matching items
            }
        });

        // Show or hide the section based on whether it contains matches
        if (hasMatch) {
            detail.style.display = 'block';
            detail.open = true; // Automatically expand the section
        } else {
            detail.style.display = 'none';
        }
    });
});
