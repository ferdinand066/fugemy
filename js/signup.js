function validateInput(){
    let name = $('#name').val()
    let email = $('#email').val()
    let phoneNumber = $('#phone-number').val()
    let address = $('#address').val()
    let tnc = $('#tnc').prop('checked')

    if (name.trim() === '' || 
        email.trim() === '' ||
        phoneNumber.trim() === '' ||
        address.trim() === ''){
        alert('Field cannot be empty!')
    }

    else if (!tnc){
        alert('Terms and condition must be checked!')
    }

    else if (name.trim().length < 5){
        alert('Name must be 5 or more characters!')
    }

    else if (!email.includes('@')){
        alert("Email must be contains '@'!")
    }

    else if (isNaN(parseInt(phoneNumber))){
        alert('Phone Number must only contains [0-9] characters!')
    }

    else if (!address.trim().includes(' ')){
        alert('Address must be at least 2 words')
    }

    else {
        alert('Successfully sign up!')
        location.href = 'index.html'
    }
}