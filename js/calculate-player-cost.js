document.getElementById('btn-calculate').addEventListener('click',function(){
    const playerExpenseElement = document.getElementById('player-expense');
    const numberOfPlayers = ol.childElementCount;

    const perPlayerCost = getInputValue('cost-per-player');

    const playerExpense = numberOfPlayers * perPlayerCost;

    playerExpenseElement.innerText = playerExpense;
})