let form = document.getElementById('formulario');

let dados = [];

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (usuario.trim() === '') {   //campo vazio
        alert("Campo de usuário vazio!");
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
        window.location.href = "pag_inicial.html";

        form.reset();
    }

})