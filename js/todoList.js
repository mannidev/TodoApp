var el;
window.onload = (event) => {
    const parentRow = document.getElementById('todo-1');
    parentRow.addEventListener('click', (event) => {
        const clickedElement = event.target.parentElement;
        const childElementId = clickedElement.dataset.childId;
        const detailsPanel = document.getElementById(childElementId);

        if (detailsPanel.classList.contains('hidden')) {
            detailsPanel.classList.add('show');
            detailsPanel.classList.remove('hidden');
        } else {
            detailsPanel.classList.add('hidden');
            detailsPanel.classList.remove('show');
        }
    });
}