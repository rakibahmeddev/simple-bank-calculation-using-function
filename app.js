function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = value;
    inputField.value = '';
    return value;
}

/*====== uporer update secction =======*/
function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}

/* ====== update balance section =======*/

function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    // condition
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    } else {
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
};

/*========= New Function for Withdraw and balance COndition ==========*/
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
};


/*======= handle desposit button ======*/
document.getElementById('deposit-button').addEventListener('click', function() {
    event.preventDefault();
    // function calling
    const amount = getInputValue('deposit-input');

    /*======
     Deposit button validation using condition
    =========*/
    if (amount > 0) {
        // function calling for deposite total and withdraw total
        updateTotal('deposit-total', amount);
        // function calling for update total Balanace section
        updateBalance(amount, true);
    }

});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function() {
    event.preventDefault();
    //  function calling to get value
    const amount = getInputValue('withdraw-input');

    // function for getInnerText value from Balance Total for condition
    const balance = getInnerTextValue('balance-total');

    /*======
    withdraw button validation using condition
   =========*/
    if (amount > 0 && amount <= balance) {
        // function calling for update withdraw total
        updateTotal('withdraw-total', amount);

        // function calling for withdraw total and redeuce balance
        updateBalance(amount, false);
    }


});