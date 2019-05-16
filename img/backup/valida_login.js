$(document).ready(function(){
    $("#login").click(function(){
        
        var login = $("#email").val();
        var senha = $("#senha").val();
        var user_info = {
            email: "teste",
            senha: "teste"
        };
        
        if(login == user_info.email && senha == user_info.senha)
        {
            location.href="https://www.google.com/"
        }
        else
        {
            alert("Usuário ou senha errado(s).");
        }
    }
}