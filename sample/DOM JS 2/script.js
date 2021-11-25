// ##
// ##

const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')

// ##
// ##


// Form submit ebevent
form.addEventListener('submit', addItem)
// Dlete event
itemList.addEventListener('click', removeItem)
// Filter event 
filter.addEventListener('keyup', filterItems)

// ##
// ##


// Add item
function addItem(e) {
    e.preventDefault()

  //  console.log(1)

  // Get input value (##### getElementById('item').value <- I put that lower in li.)
  const newItem = document.getElementById('item')

  // Create new li element
  const li = document.createElement('li')

  // Add class
  li.className = 'list-group-item'
  //console.log(li)

  // Add text node with input value  (##### .value addted here - just wonder what thay change...)
  li.appendChild(document.createTextNode(newItem.value))

  // Create del button element
  const deleteBtn = document.createElement('button')

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-end delete'

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'))

  // Append button to the li
  li.appendChild(deleteBtn)

  // Append li to list
  itemList.appendChild(li)
}

// ##
// ##

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement
            itemList.removeChild(li)
        }
    } 
}

// ##
// ##

// Filter items
function filterItems(e) {
    // Convert text to lowercase
    const text = e.target.value.toLowerCase()
   // console.log(text)
    // Get list
    const items = itemList.getElementsByTagName('li')
   // console.log(items) HTMLCollection
   // Convert to an Array
   Array.from(items).forEach(function(item) {
       const itemName = item.firstChild.textContent
       //console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
   })
}
