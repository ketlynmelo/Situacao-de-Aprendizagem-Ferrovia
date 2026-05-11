let form = document.getElementById('formulario');

let dados = [];

let toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {

    alert("Pedido enviado ao Administrador");

});

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

   
    if (senha.trim() === '') {
      mensagem.innerHTML = `
        <div class='erro'>
        <p>Campo de senha vazio!</p>
        </div>
        `; 
        valido = false;
    } else if (senha.trim() === '1532') { //verificar se a senha é a correta//

    } else {
    mensagem.innerHTML = `
        <div class='erro'>
        <p>Senha incorreta!</p>
        </div>
        `; 
        valido = false;
    }
     if (usuario.trim() === '') {   //campo vazio
        mensagem.innerHTML = `
        <div class='erro'>
        <p>Campo de usuário vazio!</p>
        </div>
        `; 
        valido = false;
    } else if (usuario.trim() === 'Administrador') { //Verificar o nome//

    } else {
        mensagem.innerHTML = `
        <div class='erro'>
        <p>Usuário incorreto!</p>
        </div>
        `; 
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
}

})