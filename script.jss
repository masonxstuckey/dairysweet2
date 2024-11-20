// Email Popup Logic
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('emailPopup');
    const closePopup = document.getElementById('closePopup');

    // Show popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 3000);

    // Close popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
