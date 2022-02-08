document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  let newTask = document.getElementById('new-task-description');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(newTask.value);
    form.reset();
  })
  
});

function buildToDo (toDo){
  let newPara = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleRemove)
  btn.textContent = 'X'
  newPara.textContent = `${toDo} `;
  console.log(newPara)
  document.querySelector('#list').appendChild(newPara);
  newPara.appendChild(btn)
}

function handleRemove(e){
  e.target.parentNode.remove();
  if ('clicked' === true){
    alert('All Done.')
  }
}


