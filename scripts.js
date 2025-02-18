document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date().toLocaleDateString();
    document.querySelector('footer p').innerHTML += ' - ' + currentDate;
});
