(function (win, doc) {

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;

  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;


  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de algum
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  let $visor = doc.querySelector('[data-js="visor"]');
  let $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  let $buttonCE = doc.querySelector('[data-js="button-ce"]');
  let $buttonOperation = doc.querySelectorAll(
    '[data-js="button-operation"]');
  let $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initEvents() {
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
    $buttonsNumbers.forEach(button => {
      button.addEventListener('click', handleClickNumber, false)
    });
    Array.prototype.forEach.call($buttonOperation, function(button) {
      button.addEventListener('click', handleClickOperation, false)
    })
  }
  function initialize(params) {
    initEvents();
  }

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = '0';
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItsOperation($visor.value);
    $visor.value += this.value;
  }

  function removeLastItemIfItsOperation(string) {
    if (isLastAnOperation(string)) {
      return string.slice(0, -1);
    }
    return string;
  }

  function isLastAnOperation(number) {
    let operation = getOperations();
    let lastItem = number.split('').pop();
    return operation.some(function (operator) {
      return operator === lastItem;
    });
  }

  function getOperations() {
    return Array.prototype.map.call($buttonOperation, function(button) {
      return button.value;
    });
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItsOperation($visor.value);
    let AllValues = $visor.value.match(getRegexOperation());
    $visor.value = AllValues.reduce(calculateAllValue);
  }

  function getRegexOperation() {
    return new RegExp('\\d+['+ getOperations().join('') +']?', 'g');
  }

  function calculateAllValue(accumulated, actual) {
    let firstValue = accumulated.slice(0, -1);
    let operator = accumulated.split('').pop();
    let lastValue = removeLastItemIfItsOperation(actual);
    getLastOperator(actual);
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  }
  function getLastOperator(value) {
    let lastOperator = isLastAnOperation(value) ? value.split('').pop() : '';
  }
  function doOperation(operator, firstValue, lastValue) {
    switch (operator) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
    }
  }
  initialize();
})(window, document);
