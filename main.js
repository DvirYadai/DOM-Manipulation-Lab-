const list = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('button');

addButton.onclick = function(){
    const newValue = input.value;
    input.value = '';
    const listItem = document.createElement('li');   
    const text = document.createElement('span');   
    const newButton = document.createElement('button');   

    listItem.appendChild(text);
    listItem.appendChild(newButton);
    text.textContent = newValue;
    newButton.textContent = 'Delete';

    list.appendChild(listItem);

    newButton.onclick = function(){
        list.removeChild(listItem);
    }
}


