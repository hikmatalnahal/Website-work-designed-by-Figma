
function toggleInfo(button) {
    var customText = button.previousElementSibling;
    var arrowIcon = button.querySelector('.arrow-icon');

    if (customText.style.display === 'none') {
        customText.style.display = 'block';
        arrowIcon.textContent = '<';
    } else {
        customText.style.display = 'none';
        arrowIcon.textContent = '>';
    }
}