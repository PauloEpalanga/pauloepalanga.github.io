$(document).ready(function(){
    // Limpar os campos do formulário de sign in ao carregar a página
    limparCamposSignIn();

    $('#btnSignin').click(function(){
        $('#signin').css('left', '25px');
        $('#signup').css('left', '450px');
        $('.btnColor').css('left', '0px');
        
        // Esvazia os campos do formulário de sign in
        limparCamposSignIn();
    });

    $('#btnSignup').click(function(){
        $('#signin').css('left', '-450px');
        $('#signup').css('left', '25px');
        $('.btnColor').css('left', '110px');

        // Esvazia os campos do formulário de sign up
        limparCamposSignUp();
    });

    // Submit do formulário de sign in
    $('#signin').submit(function(event){
        event.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();
        var remember = $('#remember').is(':checked');

        // Validar o email usando uma expressão regular
        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        alert('Login submetido com sucesso.\nEmail: ' + email + '\nPassword: ' + password);
        window.location.href = '../index.html';  

        // Esvazia os campos do formulário de sign in
        limparCamposSignIn();
    });

    // Submit do formulário de sign up
    $('#signup').submit(function(event){
        event.preventDefault();

        var email = $('#emailSignup').val();
        var password = $('#passwordSignup').val();
        var password2 = $('#password2Signup').val();
        var terms = $('#terms').is(':checked');

        // Validar o email usando uma expressão regular
        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (email === '' || password === '' || password2 === '' || !terms) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Cadastro submetido com sucesso.\nEmail: ' + email + '\nPassword: ' + password);
        window.location.href = '../index.html'; 

        // Esvazia os campos do formulário de sign up
        limparCamposSignUp();
    });

    // Função para limpar os campos do formulário de sign in
    function limparCamposSignIn() {
        $('#email').val('');
        $('#password').val('');
        $('#remember').prop('checked', false);
    }

    // Função para limpar os campos do formulário de sign up
    function limparCamposSignUp() {
        $('#emailSignup').val('');
        $('#passwordSignup').val('');
        $('#password2Signup').val('');
        $('#terms').prop('checked', false);
    }

    // Função para validar o formato do email usando uma expressão regular
    function isValidEmail(email) {
        // Expressão  para validar o formato de email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});