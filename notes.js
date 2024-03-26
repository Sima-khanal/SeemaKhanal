function addNote() {
  var noteInput = document.getElementById('noteInput');
  var noteText = noteInput.value.trim();

  if (noteText === '') {
    alert('Please enter a note.');
    return;
  }

  var noteList = document.getElementById('noteList');
  var li = document.createElement('li');
  li.textContent = noteText;
  noteList.appendChild(li);

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    noteList.removeChild(li);
  };
  li.appendChild(deleteButton);

  noteInput.value = '';
}
