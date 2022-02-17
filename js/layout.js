$(function () {
    $('.btn-register, .card').on('click', function(){
        let pathname = location.pathname;
        if (pathname.includes('signup')){
            validateInput()
        } else {
            location.href = 'signup.html'
        }
    })
});