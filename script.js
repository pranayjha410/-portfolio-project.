document.addEventListener('DOMContentLoaded', () => {
    const roles = ['Full Stack Developer', 'Web Developer','Designer', 'Coder', 'Problem Solver'];
    const roleElement = document.querySelector('.role');
    let index = 0;

    function rotateText() {
        roleElement.textContent = roles[index];
        index = (index + 1) % roles.length;
    }

    rotateText(); // Initialize with the first role
    setInterval(rotateText, 2000); // Change text every 2 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const hireButton = document.getElementById('btm');

    hireButton.addEventListener('click', () => {
        alert('Thank you for considering me! Please contact me at pranayjha410@gmail.com'); 
        // Replace this with your actual contact logic
    });
});
