let form = document.getElementById('formulario');

let dados = [];

let toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {

    alert("Pedido enviado ao Administrador");

});

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

     let erroUsuario = document.getElementById('erro-usuario');
     let erroSenha = document.getElementById('erro-senha');

      let usuarioInput = document.getElementById('usuario');
      let senhaInput = document.getElementById('senha');

      let usuario = usuarioInput.value;
      let senha = senhaInput.value;

    erroUsuario.innerHTML = "";
    erroSenha.innerHTML = "";


    if (usuario.trim() === '') {   //campo vazio
         usuarioInput.classList.add('is-invalid');
        erroUsuario.innerHTML = "Campo de usuário vazio!";
        valido = false;
    } 

     else if(usuario.trim() !== 'Administrador') {
       usuarioInput.classList.add('is-invalid');
       erroUsuario.innerHTML = "Usuário inexistente!";
       valido = false;
    }

    if (senha.trim() === '') {   //campo vazio
        senhaInput.classList.add('is-invalid');
        erroSenha.innerHTML = "Campo de senha vazio!";
        valido = false;
    }

    else if(senha.trim() !== '1543') {
       senhaInput.classList.add('is-invalid');
        erroSenha.innerHTML = "Senha incorreta!";
        valido = false;
    }



    if (valido) {


        let usuarioObj = {
            usuario: usuario,
            senha: senha
        };

        dados.push(usuarioObj);
        console.table(dados);
        alert('Login realizado!');
        window.location.href = "pag_inicial.html";

        form.reset();
    }

})