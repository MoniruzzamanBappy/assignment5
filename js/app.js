// add expenses total function 
function totalExpenses() {
    // <!-- income part -->
    let incomeInput = document.getElementById('total-income-input');
    let incomeValue = parseFloat(incomeInput.value);

    // <!-- expenses part -->
    let foodInput = document.getElementById('food-expenses-input');
    let foodValue = parseFloat(foodInput.value);

    let rentInput = document.getElementById('rent-expenses-input');
    let rentValue = parseFloat(rentInput.value);

    let clothInput = document.getElementById('cloth-expenses-input');
    let clothValue = parseFloat(clothInput.value);

    let ex = foodValue + rentValue + clothValue;

    // <!-- total part -->
    let totalExpense = document.getElementById('total-expenses');
    let totalBalance = document.getElementById('rem-balance');

    // validation inputs
    if (isNaN(incomeInput.value) == false && isNaN(foodInput.value) == false && isNaN(rentInput.value) == false && isNaN(clothInput.value) == false) {
        // total calculation
        if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0) {
            alert('Please Input A Positive Number');
        }
        else {
            if (ex < incomeValue || ex == incomeValue) {
                totalExpense.innerText = ex;
                totalBalance.innerText = incomeValue - ex;
            }
            else {
                alert('Expenses can not greater than Income');
            }
        }

    }
    else {

        alert('Please Input A Number');
    }

    // <!-- remaining total part  -->
    let totalBalanceFinal = document.getElementById('rem-balance-final');
    if (isNaN(incomeInput.value) == false && isNaN(foodInput.value) == false && isNaN(rentInput.value) == false && isNaN(clothInput.value) == false) {
        totalBalanceFinal.innerText = incomeValue - ex;
    }
}
// savings calculate
function savingAmountCalculate() {
    let savingInput = document.getElementById('save-input');
    let savingValue = parseFloat(savingInput.value);

    let incomeInput = document.getElementById('total-income-input');
    let incomeValue = parseFloat(incomeInput.value);

    let savingAmount = document.getElementById('saving-amount');
    // validation input 
    if (isNaN(incomeInput.value) == false && isNaN(savingInput.value) == false) {
        savingAmount.innerText = incomeValue * (savingValue / 100);
    }
    else {
        alert('Please Input A Number');
    }

    let totalBalanceFinal = document.getElementById('rem-balance-final');
    let totalBalance = document.getElementById('rem-balance');
    let x = parseFloat(totalBalance.innerText) - parseFloat(savingAmount.innerText);

    // savings validation
    if (x < 0) {

        alert('Savings exits your total balance limits');
    }
    else {
        if (incomeValue < 0 || savingValue < 0) {
            alert('Please Input A Positive Number');
        }
        else {
            totalBalanceFinal.innerText = x;
        }
    }
}
// calculate button add listener
document.getElementById('calculate-btn').addEventListener('click', function () {
    totalExpenses();
});

// saving button add listener
document.getElementById('save-btn').addEventListener('click', function () {
    savingAmountCalculate();
});