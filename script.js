// element variables
const newTaskInput = document.getElementById('taskInput');
const taskForm = document.getElementById('taskForm');
const taskList = document.querySelector('.taskList');

taskForm.addEventListener('submit' , function(e){
    e.preventDefault();
    // console.log("form submitted");
    var newTaskInputValue = newTaskInput.value;
    // console.log('newTaskInputValue: ', newTaskInputValue);

    addTaskItem(newTaskInputValue);

    //reset input value to empty
    newTaskInput.value = '';
    // console.log('completed submit')
})

function addTaskItem(newTask){
    console.log(newTask);
    // Create the list item element
    const newTaskItem = document.createElement('li');
    newTaskItem.classList.add('taskItem');

    // Create the label element
    const label = document.createElement('label');
    label.classList.add('checkContainer');

    // Create the checkbox input element
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    // Create the checkmark span element
    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');

    label.appendChild(checkbox);
    label.appendChild(checkmark);

    newTaskItem.appendChild(label);
    newTaskItem.appendChild(document.createTextNode(newTask));

    // Create the delete button div
    const deleteButton = document.createElement('div');
    deleteButton.classList.add('deleteButton');

    // Create the SVG element for the delete button
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.classList.add('lucide', 'lucide-trash-2');

    // Create the paths for the SVG
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M3 6h18');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6');
    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2');
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '10');
    line1.setAttribute('x2', '10');
    line1.setAttribute('y1', '11');
    line1.setAttribute('y2', '17');
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '14');
    line2.setAttribute('x2', '14');
    line2.setAttribute('y1', '11');
    line2.setAttribute('y2', '17');

     // Append paths and lines to the SVG
     svg.appendChild(path1);
     svg.appendChild(path2);
     svg.appendChild(path3);
     svg.appendChild(line1);
     svg.appendChild(line2);
 
     // Append the SVG to the delete button div
     deleteButton.appendChild(svg);
 
     // Append the delete button to the list item
     newTaskItem.appendChild(deleteButton);

     taskList.appendChild(newTaskItem);
     
}


