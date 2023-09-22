

const list = document.querySelector('#textUL');
const forms = document.querySelector('#formToDo');
const input = document.querySelector('#inputBox');


forms.addEventListener('submit', function(event){
    event.preventDefault();
    
    if(input.value === ''){
      alert(`You must input name!`)
    } else {
    const li = document.createElement('li');
    const text = document.createElement('span');
    const deleteBtn = document.createElement('button');

    text.innerText = input.value;
    deleteBtn.innerText = 'Delete';
    li.appendChild(text);
    li.appendChild(deleteBtn);
    input.value = ''
    list.appendChild(li);
  }
})

list.addEventListener('click', function(event){
    const li =event.target.parentElement;
    list.removeChild(li)
})
