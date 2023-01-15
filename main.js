var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);



//addItem
function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));


    //Create delete button element
    var deleteButton = document.createElement('button');

    // Add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button
    li.appendChild(deleteButton);

    
    // Append li to list
    itemList.appendChild(li);

}

// Function removeItem
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    // Convert to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }

    });
}