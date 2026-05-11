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
        valido = false;
    }


    if (valido) {


        let usuarioObj = {
            usuario: usuario,
            senha: senha
        };

        dados.push(usuarioObj);
        console.table(dados);
        alert('Formulário enviado com sucesso!');
        window.location.href = "home_historia.html";

        form.reset();
    }

})