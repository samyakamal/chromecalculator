function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
  }
  
  function calculate() {
    const resultField = document.getElementById('result');
    try {
      resultField.value = eval(resultField.value);
    } catch (e) {
      alert('Invalid Expression');
    }
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  