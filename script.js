document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('.animate-text');
    const loginForm = document.getElementById('loginForm');
    const loginBtn = loginForm.querySelector('button[type="submit"]');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const enrollBtn = document.getElementById('enrollBtn');
    const modal = document.getElementById('enrollModal');
    const closeModal = document.getElementById('closeModal');

    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 100);
    });

    function checkFormValidity() {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginBtn.disabled = false;
        } else {
            loginBtn.disabled = true;
        }
    }

    usernameInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!loginBtn.disabled) {
            animateLoginAndShowWelcome();
        }
    });

    let modelss = false;
    enrollBtn.addEventListener('click', function () {
        if (modelss === false) {
            modal.style.display = 'block';
            modelss = true;
        }
        else {
            modal.style.display = 'none';
            modelss = false;
        }
    });

    // closeModal.addEventListener('click', function () {
    //     modal.style.display = 'none';
    // });

    window.addEventListener('click', function (event) {


    });
});

function animateLoginAndShowWelcome() {
    const container = document.querySelector('.container');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const logo = document.getElementById('logo');
    const houseImage = document.getElementById('houseImage');

    // container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s ease';

    container.style.opacity = '0';
    container.style.display = 'none';
    setTimeout(() => {
        welcomeMessage.style.display = 'flex';

        setTimeout(() => {
            logo.style.opacity = '1';
            logo.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);

        setTimeout(() => {
            houseImage.style.opacity = '1';
            houseImage.style.transform = 'scale(1)';
        }, 1000);
    }, 1000);

    const logoanimate = document.querySelector('.login-logo-animation');

    // Add a class to the logo to move it to the center after a delay or when an event occurs
    setTimeout(() => {
        logoanimate.style.display = 'block';
        logoanimate.classList.add('move-to-center');
        logoanimate.classList.add('login-logo-animate');

    }, 0); // Adjust delay as needed
}

// Select the logo element


