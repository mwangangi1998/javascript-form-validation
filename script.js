const form = document.querySelector('#myform');
const inputfname = document.querySelector('#fname');
const inputlname = document.querySelector('#lname');
const inputemail = document.querySelector('#email');
const inputpassword = document.querySelector('#password');
const inputcpassword = document.querySelector('#cpassword');
form.addEventListener('submit', function (event) {
     event.preventDefault();
    ValiditeForm();
});
function ValiditeForm() {
    if (inputfname.value.trim() == "") {
        setError(inputfname, 'first name cannot be empty');
    }
    else if (inputfname.value.trim().length < 5 || inputfname.value.trim().length > 15) {
        setError(inputfname, 'first name should be min 5 adn max 15 characters');
    } else {
        setSuccess(inputfname);
    }


// valiate last name

    if (inputlname.value.trim() == "") {
        setError(inputlname, 'Last name cannot be empty');
    } else if (inputlname.value.trim().length < 5 || inputlname.value.trim().length > 15) {
        setError(inputlname, 'last name characters should be a min of 5 and max of 15');
    }
    else {
        setSuccess(inputlname);
    }


    // validate email
    if(inputemail.value.trim()==""){
        setError(inputemail, 'provide email, cannot be empty!');
    } else if (inputemail.value.trim().length < 5 || inputemail.value.trim().length > 25) {
        setError(inputemail, 'email');
    }
    else {
        setSuccess(inputemail);
    }
    // validate password
    if(inputpassword.value.trim()=="")
    {
        setError(inputpassword,'provide password');
    }
    else if(inputpassword.value.trim().length<7){
        setError(inputpassword,'Password cannot be less than 7 characters');
    }
    else{
        setSuccess(inputpassword);
    }
    // validate cpassword
    if(inputcpassword.value.trim()==""){
        setError(inputcpassword,"confirm password cannot be empty");
    }
    else if (inputcpassword.value!==inputpassword.value) {
        setError(inputcpassword,"password do not match");
        
    }
    else{
        setSuccess(inputcpassword);
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}
function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');

}

