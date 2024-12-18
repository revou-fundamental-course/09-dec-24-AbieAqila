const form = document.getElementById('form');
const namaLengkap = document.getElementById('nama-lengkap');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    validateInput(); // Pastikan nama fungsi sesuai
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInput = () => {
    const namaLengkapValue = namaLengkap.value.trim();
    const emailValue = email.value.trim();

    if (namaLengkapValue === '') {
        setError(namaLengkap, 'Nama lengkap wajib diisi');
    } else {
        setSuccess(namaLengkap);
    }

    if (emailValue === '') {
        setError(email, 'Email wajib diisi');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Masukkan email yang valid');
    } else {
        setSuccess(email);
    }
};


var firstIndex = 0;

function automaticSlide() {
    setTimeout(automaticSlide, 2000); 
    const img = document.querySelectorAll('.images img'); 

    
    for (let pics = 0; pics < img.length; pics++) {
        img[pics].style.display = "none";
    }

    
    firstIndex++;
    if (firstIndex > img.length) {
        firstIndex = 1; 
    }

    img[firstIndex - 1].style.display = "block";
}

automaticSlide(); 

