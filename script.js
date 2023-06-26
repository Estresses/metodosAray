// pegar as perguntas
const metodo = document.querySelectorAll('.metodo');

// clicar na pergunta
metodo.forEach(metodo => {
  const title = metodo.querySelector('.metodo-nome');
  const resposta = metodo.querySelector('.resposta');

  title.addEventListener('click', () => {
    resposta.classList.toggle('show');
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////
///////FUNCTION///////////
function calcularDivisao() {
    var dividendo = parseFloat(document.getElementById("dividendo").value);
    var divisor = parseFloat(document.getElementById("divisor").value);

    if (divisor === 0) {
      alert("Erro: o divisor não pode ser zero!");
    } else {
      var resultado = dividendo / divisor;
      document.getElementById("demo").innerHTML = "O resultado da divisão é: " + resultado;
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
///////OBJECT///////////
  function NomeSobrenome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    const person = {
      firstName: nome,
      lastName : sobrenome,
      id     :  5566
    };
    
    document.getElementById("demo2").innerHTML =
    person.firstName + " " + person.lastName;

    
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
///////MAP///////////
  function multiplicar() {
    const numeros = document.getElementById("numeros").value;
  
    const arrayNumeros = numeros.split(",");
  
    const numerosConvertidos = arrayNumeros.map(num => parseInt(num));
    
    const numerosMultiplicados = numerosConvertidos.map(num => num * 10);
  
    document.getElementById("demo3").innerHTML = numerosMultiplicados.join(", ");
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
///////FOREACH///////////
function somarDez() {
  const entradaNumeros = document.getElementById("numeros2").value;
  const arrayNumeros = entradaNumeros.split(",").map(Number);

  arrayNumeros.forEach(function(numero, indice, arr) {
    arr[indice] = numero + 10;
  });

  document.getElementById("demo4").innerHTML = arrayNumeros.join(", ");
}
//////////////////////////////////////////////////////////////////////////////////////////////////
///////FIND///////////
function encontrarMaiorIdade() {
  const entradaIdades = document.getElementById("idades").value;
  const arrayIdades = entradaIdades.split(",").map(Number);

  const maiorIdade = arrayIdades.find(function(idade) {
    return idade > 18;
  });

  document.getElementById("demo5").innerHTML = maiorIdade;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
///////FILTER///////////
function filtrarIdades() {
  const entradaIdades = document.getElementById("idades2").value;
  const arrayIdades = entradaIdades.split(",").map(Number);

  const idadesFiltradas = arrayIdades.filter(function(idade) {
    return idade >= 18;
  });

  document.getElementById("demo6").innerHTML = idadesFiltradas.join(", ");
}
//////////////////////////////////////////////////////////////////////////////////////////////////
///////REDUCE///////////
function subtrairNumeros() {
  const entradaNumeros = document.getElementById("numeros3").value;
  const arrayNumeros = entradaNumeros.split(",").map(Number);

  const resultado = arrayNumeros.reduce(function(total, num) {
    return total - num;
  });

  document.getElementById("demo7").innerHTML = "Resultado: " + resultado;
}

function verjs() {
  document.getElementById("js").innerHTML = '<img src="js.jpeg">';
}