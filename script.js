// Show bottom message after 5 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        const msg = document.getElementById('bottomMessage');
        msg.style.bottom = '30px';
        msg.style.opacity = '1';
        // Hide after 5 seconds
        setTimeout(() => {
            msg.style.bottom = '-50px';
            msg.style.opacity = '0';
        }, 5000);
    }, 5000);
});
