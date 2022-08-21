document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerCost = getInputValue('manager-cost');
const coachCost = getInputValue('coach-cost');
const playerExpense = getTextValue('player-expense');

const totalCost = playerExpense + managerCost + coachCost;

const totalEliment = document.getElementById('total-cost');

totalEliment.innerText = totalCost;
})