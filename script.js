let form = document.getElementById('formulario');

let dados = [];

if(toggle){
    toggle.addEventListener("click", function () {
        alert("Pedido enviado ao Administrador!");
    });
}

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let usuarioInput = document.getElementById('usuario');
    let senhaInput = document.getElementById('senha');

    let usuario = usuarioInput.value;
    let senha = senhaInput.value;

    let erroUsuario = document.getElementById('erro-usuario');
    let erroSenha = document.getElementById('erro-senha');

    erroUsuario.innerHTML = "";
    erroSenha.innerHTML = "";

    usuarioInput.classList.remove('is-invalid');
    senhaInput.classList.remove('is-invalid');

   
    if (usuario.trim() === '') { //campo vazio

        usuarioInput.classList.add('is-invalid');

        erroUsuario.innerHTML = "Campo de usuário vazio!";

        valido = false;

    }

    else if (usuario.trim() !== 'Administrador') { //usuario errado

        usuarioInput.classList.add('is-invalid');

        erroUsuario.innerHTML = "Usuário inexistente!";

        valido = false;
    }

  
    if (senha.trim() === '') { //campo vazio

        senhaInput.classList.add('is-invalid');

        erroSenha.innerHTML = "Campo de senha vazio!";

        valido = false;

    }

    else if (senha.trim() !== '1543') { //senha errada

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

        window.location.href = "home.html";

        form.reset();
    }

});
