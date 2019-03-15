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
