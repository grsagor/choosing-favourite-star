const ol = document.getElementById('selected-players');

function showSelectedPlayer(btnId,playerNameId){
    const button = document.getElementById(btnId);
    
    button.addEventListener('click',function(){

        const childNumber = ol.childElementCount;
        if(childNumber > 4){
            alert('You can not select more than 5 players.');
            return;
        }
        
        const nameElement = document.getElementById(playerNameId);
        const name = nameElement.innerText;
        const newLi = document.createElement('li');
        newLi.style.fontSize = '18px'
        newLi.innerText = name;
        ol.appendChild(newLi);

        button.setAttribute('disabled','');
        button.style.backgroundColor = 'gray';
    })
}

function getInputValue(elementId){
    const element = document.getElementById(elementId);


        const elementValueString = element.value;
        const elementValue = parseFloat(elementValueString);
        return elementValue;

}

function getTextValue(elementId){
    const element = document.getElementById(elementId);


    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;

}