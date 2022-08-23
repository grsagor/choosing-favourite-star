document.getElementById('btn-player-one').addEventListener('click',function(){
    const ol = document.getElementById('selected-players');
    const nameElement = document.getElementById('player-one-name');
    const name = nameElement.innerText;
    const newLi = document.createElement('li');
    newLi.innerText = name;
    ol.appendChild(newLi);
})