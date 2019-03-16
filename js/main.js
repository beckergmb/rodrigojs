function comparar() {
  var div = document.getElementById('div').innerHTML;
  var input = document.getElementById('input').value;

  if (input == "") {
    alert("O campo está em branco, digite algo...");
    return false;
  }


  if (div == input) {
    alert("O numero é igual")
  }
  else {
    alert("O número é diferente")
  }

    atualiza();

  }

  function atualiza() {
  var r = Math.floor(Math.random()* 100);
  document.getElementById('div').innerHTML = r;
  document.getElementById('input').value = "";
  document.getElementById('input').focus();
  }

  function handle(){
    var keycode = window.event.keyCode;

    if (keycode == 13) {
      comparar();
    }
  }

  function validar() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;

    if (nome == "") {
      alert("O Nome está vazio. Digite algo...");
      document.getElementById('nome').focus();
      return false;
    }

    if (idade == "") {
      alert("A Idade está vazia. Digite algo...");
      document.getElementById('idade').focus();
      return false;
    }

    if (isNaN(idade)) {
      alert("O campo idade só aceita números.");
    }

    if (cpf == "") {
      alert("O CPF está vazio. Digite algo...");
      document.getElementById('cpf').focus();
      return false;
    }

    if (isNaN(cpf)) {
      alert("O cpf idade só aceita números.");
    }

    if (telefone == "") {
      alert("O Telefone está vazio. Digite algo...");
      document.getElementById('telefone').focus();
      return false;
    }

    if (isNaN(telefone)) {
      alert("O telefone idade só aceita números.");
    }

    if (cep == "") {
      alert("O CEP está vazio. Digite algo...");
      document.getElementById('cep').focus();
      return false;
    }

    if (isNaN(cep)) {
      alert("O cep idade só aceita números.");
    }

    if (endereco == "") {
      alert("O Endereco está vazio. Digite algo...");
      document.getElementById('endereco').focus();
      return false;
    }
  }
