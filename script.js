function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
 }
 
 function bulbFunction() {
  var bulbLight = document.getElementById('bulb');
  
  if (bulbLight.src.match('bulbon'))
    bulbLight.src = 'images/bulboffbg.png';
  else
    bulbLight.src = 'images/bulbon.jpg';
 }

const dateFunction = document.getElementById('dateTime').innerHTML=Date();
 
 const calculatorFunction = document.getElementById('result')

  function display(val) {
    calculatorFunction.value += val;
  }

  function solve() {
    let x = calculatorFunction.value
    let y = eval(x);
    calculatorFunction.value = y
  }

  function clearScreen() {
    calculatorFunction.value = ''
  }
 // "document.getElementById('demo').innerHTML = Date()"
 
