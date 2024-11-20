// Search Bar Filter
document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const categories = document.querySelectorAll('.menu-category');

    categories.forEach((category) => {
        const text = category.innerText.toLowerCase();
        if (text.includes(query)) {
            category.parentElement.style.display = 'block';
        } else {
            category.parentElement.style.display = 'none';
        }
    });
});
