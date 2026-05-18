const dados = [];

let toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {

    alert("Pedido enviado ao Administrador 🚂");

});
form.addEventListener('submit', function (e) {

const formLogin = document.getElementById("formulario");
if (formLogin) {
  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;

    const usuarioInput = document.getElementById("usuario");
    const senhaInput = document.getElementById("senha");
    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    const erroUsuario = document.getElementById("erro-usuario");
    const erroSenha = document.getElementById("erro-senha");

    if (erroUsuario) erroUsuario.innerHTML = "";
    if (erroSenha) erroSenha.innerHTML = "";

    usuarioInput.classList.remove("is-invalid");
    senhaInput.classList.remove("is-invalid");

    if (usuario.trim() === "") {
      usuarioInput.classList.add("is-invalid");
      if (erroUsuario) erroUsuario.innerHTML = "Campo de usuario vazio!";
      valido = false;
    } else if (usuario.trim() !== "Administrador") {
      usuarioInput.classList.add("is-invalid");
      if (erroUsuario) erroUsuario.innerHTML = "Usuario inexistente!";
      valido = false;
    }

    if (senha.trim() === "") {
      senhaInput.classList.add("is-invalid");
      if (erroSenha) erroSenha.innerHTML = "Campo de senha vazio!";
      valido = false;
    } else if (senha.trim() !== "1543") {
      senhaInput.classList.add("is-invalid");
      if (erroSenha) erroSenha.innerHTML = "Senha incorreta!";
      valido = false;
    }

    if (!valido) return;

    dados.push({ usuario, senha });
    console.table(dados);

    alert("Login realizado!");
    window.location.href = "home.html";
    formLogin.reset();
  });
}

const tabelaUsuarios = document.getElementById("corpoTabela");
if (tabelaUsuarios) {
  const usuarios = [
    { id: 1, nome: "Davi Sehnem", email: "Davi.S@gmail.com", tipo: "Administrador", status: "Ativo" },
    { id: 2, nome: "Amanda L.", email: "Amanda.L@gmail.com", tipo: "Usuario", status: "Ativo" },
    { id: 3, nome: "Fernando G.", email: "Fernando.G@gmail.com", tipo: "Usuario", status: "Ativo" },
    { id: 4, nome: "Manuela B.", email: "Manula.Borba@gmail.com", tipo: "Usuario", status: "Inativo" },
    { id: 5, nome: "Ana L.", email: "Ana.Jung@gmail.com", tipo: "Administrador", status: "Ativo" },
  ];

  let proximoId = 6;
  let idxParaExcluir = null;

  function iniciais(nome) {
    return nome
      .split(" ")
      .map((parte) => parte[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  function atualizarCards() {
    document.getElementById("totalFuncionarios").textContent = usuarios.length;
    document.getElementById("totalAdmins").textContent = usuarios.filter((u) => u.tipo === "Administrador").length;
    document.getElementById("totalUsuarios").textContent = usuarios.filter((u) => u.tipo === "Usuario").length;
    document.getElementById("totalAtivos").textContent = usuarios.filter((u) => u.status === "Ativo").length;
  }

  function renderTabela(lista) {
    if (lista.length === 0) {
      tabelaUsuarios.innerHTML =
        '<tr><td colspan="6" class="text-center text-muted py-4">Nenhum funcionario encontrado.</td></tr>';
      return;
    }

    tabelaUsuarios.innerHTML = lista
      .map((u) => {
        const realIdx = usuarios.indexOf(u);
        const badgeClass = u.status === "Ativo" ? "badge-ativo" : "badge-inativo";

        return `
          <tr>
            <td>${u.id}</td>
            <td>
              <div class="avatar-wrap">
                <div class="avatar">${iniciais(u.nome)}</div>
                ${u.nome}
              </div>
            </td>
            <td>${u.email}</td>
            <td>${u.tipo}</td>
            <td><span class="${badgeClass}">${u.status}</span></td>
            <td class="text-center">
              <button class="btn-action btn-view me-1" onclick="verUsuario(${realIdx})" title="Visualizar">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn-action btn-edit me-1" onclick="editarUsuario(${realIdx})" title="Editar">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn-action btn-delete" onclick="confirmarDelete(${realIdx})" title="Excluir">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        `;
      })
      .join("");
  }

  function aplicarFiltros() {
    const termo = document.getElementById("searchInput").value.toLowerCase();
    const tipo = document.getElementById("filterTipo").value;
    const status = document.getElementById("filterStatus").value;

    const filtrado = usuarios.filter(
      (u) =>
        (u.nome.toLowerCase().includes(termo) || u.email.toLowerCase().includes(termo)) &&
        (tipo === "" || u.tipo === tipo) &&
        (status === "" || u.status === status)
    );

    renderTabela(filtrado);
  }

  function abrirModal(id) {
    document.getElementById(id).classList.add("show");
  }

  function fecharModal(id) {
    document.getElementById(id).classList.remove("show");
  }

  function abrirModalAdicionar() {
    document.getElementById("modalFormTitulo").textContent = "Adicionar Funcionario";
    document.getElementById("formUsuario").reset();
    document.getElementById("editIndex").value = "";
    document.querySelectorAll("#formUsuario .is-invalid").forEach((el) => el.classList.remove("is-invalid"));
    abrirModal("modalForm");
  }

  function editarUsuario(idx) {
    const u = usuarios[idx];
    document.getElementById("modalFormTitulo").textContent = "Editar Funcionario";
    document.getElementById("editIndex").value = idx;
    document.getElementById("fNome").value = u.nome;
    document.getElementById("fEmail").value = u.email;
    document.getElementById("fTipo").value = u.tipo;
    document.getElementById("fStatus").value = u.status;
    abrirModal("modalForm");
  }

  function verUsuario(idx) {
    const u = usuarios[idx];
    document.getElementById("viewBody").innerHTML = `
      <tr><th>ID</th><td>${u.id}</td></tr>
      <tr><th>Nome</th><td>${u.nome}</td></tr>
      <tr><th>E-mail</th><td>${u.email}</td></tr>
      <tr><th>Tipo de conta</th><td>${u.tipo}</td></tr>
      <tr><th>Status</th><td><span class="${u.status === "Ativo" ? "badge-ativo" : "badge-inativo"}">${u.status}</span></td></tr>
    `;
    abrirModal("modalView");
  }

  function confirmarDelete(idx) {
    idxParaExcluir = idx;
    document.getElementById("deleteNome").textContent = usuarios[idx].nome;
    abrirModal("modalDelete");
  }

  document.getElementById("searchInput").addEventListener("input", aplicarFiltros);
  document.getElementById("filterTipo").addEventListener("change", aplicarFiltros);
  document.getElementById("filterStatus").addEventListener("change", aplicarFiltros);

  document.querySelectorAll(".modal-overlay").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target === el) {
        el.classList.remove("show");
      }
    });
  });

  document.getElementById("formUsuario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("fNome");
    const email = document.getElementById("fEmail");
    const tipo = document.getElementById("fTipo");
    const status = document.getElementById("fStatus");
    let valido = true;

    [nome, email, tipo, status].forEach((campo) => campo.classList.remove("is-invalid"));

    if (!nome.value.trim()) {
      nome.classList.add("is-invalid");
      valido = false;
    }

    if (!email.value.includes("@")) {
      email.classList.add("is-invalid");
      valido = false;
    }

    if (!tipo.value) {
      tipo.classList.add("is-invalid");
      valido = false;
    }

    if (!status.value) {
      status.classList.add("is-invalid");
      valido = false;
    }

    if (valido) {

        let usuarioObj = {
            usuario: usuario,
            senha: senha
        };

        dados.push(usuarioObj);

        console.table(dados);

        alert('Login realizado! 🚂');

        window.location.href = "home.html";

        form.reset();
    }

});
