function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = value;
    inputField.value = '';
    return value;

};
//update total
function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;

};

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function() {
    event.preventDefault();
    const amount = getInputValue('deposit-input');

    // deposit total
    updateTotal('deposit-total', amount);

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function() {
    event.preventDefault();

})