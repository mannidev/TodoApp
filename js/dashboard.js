window.onload = (event) => {
    const elements = document.getElementsByClassName('todo-Group');
    
    if (elements) {
        for(let element of elements) {
            element.addEventListener('click', (event) => {
                window.location.href = 'TodoList.html';
            });
        } 
    }
}

function addNewGroup() {
    const summary = document.getElementById('todo-summary');
    const newGroup = document.getElementById('new-todo-Group');

    summary.classList.add('hide');
    newGroup.classList.add('show');
    newGroup.classList.remove('hide');
}