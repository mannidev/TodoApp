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

function showNewGroupSection() {
    const summary = document.getElementById('todo-summary');
    const newGroup = document.getElementById('new-todo-Group');

    summary.classList.add('hide');
    newGroup.classList.add('show');
    newGroup.classList.remove('hide');
}

function addNewGroup() {
    const toast = document.getElementById('toast');
    toast.classList.add('show-toast');
    toast.innerHTML = 'New Todo Group Successfully Added';
    setTimeout(() => {
        toast.classList.remove('show-toast')
    }, 3000);
}