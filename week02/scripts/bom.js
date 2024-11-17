const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
list.append(li);

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Create a new li element for the chapter
        const li = document.createElement('li');
        li.textContent = input.value.trim(); // Set the text of the new list item to the input value
    
        // Create a delete button for this new list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
    
        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
          list.removeChild(li); // Remove the li element from the list
          input.focus(); // Return focus to the input field
        });
    
        // Append the delete button to the list item
        li.appendChild(deleteButton);
    
        // Append the new li to the list
        list.appendChild(li);
    
        // Clear the input field
        input.value = '';
        // Focus the input field again
        input.focus();
      } else {
        // If input is blank, focus the input field and do nothing
        input.focus();
      }
    });