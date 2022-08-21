const ol = document.getElementById('selected-players');

function showSelectedPlayer(btnId,playerNameId){
    const button = document.getElementById(btnId);
    
    button.addEventListener('click',function(){

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

        button.setAttribute('disabled','');
        button.style.backgroundColor = 'gray';
    })
}