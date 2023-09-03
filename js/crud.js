
// Sample JSON data
let jsonData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

// Function to display JSON data in HTML
function displayData() {
    const jsonOutput = document.getElementById('jsonOutput');
    jsonOutput.innerHTML = JSON.stringify(jsonData, null, 2);
}

// Function to create a new item
document.getElementById('createForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newId = parseInt(document.getElementById('newId').value);
    const newName = document.getElementById('newName').value;

    // Check if the provided ID is unique
    const idExists = jsonData.some(item => item.id === newId);

    if (idExists) {
        alert('ID already exists. Please choose a unique ID.');
    } else {
        const newItem = { id: newId, name: newName };
        jsonData.push(newItem);
        displayData();
        this.reset();
    }
});

// Function to edit an item by ID
document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const idToEdit = parseInt(document.getElementById('editId').value);
    const newName = document.getElementById('editName').value;

    const itemToEdit = jsonData.find(item => item.id === idToEdit);
    if (itemToEdit) {
        itemToEdit.name = newName;
        displayData();
        this.reset();
    } else {
        alert('Item not found');
    }
});

// Function to delete an item by ID
document.getElementById('deleteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const idToDelete = parseInt(document.getElementById('deleteId').value);

    const indexToDelete = jsonData.findIndex(item => item.id === idToDelete);
    if (indexToDelete !== -1) {
        jsonData.splice(indexToDelete, 1);
        displayData();
        this.reset();
    } else {
        alert('Item not found');
    }
});

// Initial display
displayData();
