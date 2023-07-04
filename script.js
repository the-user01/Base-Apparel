const button = document.getElementById('btn');
const errorIcon = document.getElementById('error-icon');
const warningText = document.getElementById('warning-text');

button.addEventListener('click', ()=>{

const emailInput = document.getElementById('email').value;

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    if(isValidEmail(emailInput))
    {
        document.getElementById('email').value = ' ';
        errorIcon.style.display = 'none';
        warningText.style.display = 'none';
    }
    else{
        errorIcon.style.display = 'block';
        warningText.style.display = 'block';
        document.getElementById('email').value = ' ';
    }

})