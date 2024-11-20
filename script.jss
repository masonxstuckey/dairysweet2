// Filter menu items using the search bar
document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach((item) => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        const itemDescription = item.querySelector('p').textContent.toLowerCase();

        if (itemName.includes(query) || itemDescription.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});
