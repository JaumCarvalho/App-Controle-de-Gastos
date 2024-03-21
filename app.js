const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expenseList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alert = document.querySelector("#alert-ctrl");

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener("click", () =>{
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    if (enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0) {
            alert.buttons=["Ok"];
            alert.present();
        return;
    }
    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + ": R$" + enteredAmount;

    expenseList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = " R$" + totalExpenses;

    clear();
});

cancelBtn.addEventListener("click", clear);
