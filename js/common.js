function showSelectedPlayer(btnId,playerNameId){
    document.getElementById(btnId).addEventListener('click',function(){
        const ol = document.getElementById('selected-players');

        const childNumber = ol.childElementCount;
        if(childNumber > 4){
            alert('No');
            return;
        }
        
        const nameElement = document.getElementById(playerNameId);
        const name = nameElement.innerText;
        const newLi = document.createElement('li');
        newLi.innerText = name;
        ol.appendChild(newLi);
    })
}