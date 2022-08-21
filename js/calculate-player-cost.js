document.getElementById('btn-calculate').addEventListener('click',function(){
    const playerExpenseElement = document.getElementById('player-expense');
    const numberOfPlayers = ol.childElementCount;
    const perPlayerCostElement = document.getElementById('cost-per-player');
    const perPlayerCostString = perPlayerCostElement.value;
    const perPlayerCost = parseFloat(perPlayerCostString);
    const playerExpense = numberOfPlayers * perPlayerCost;

    playerExpenseElement.innerText = playerExpense;
})