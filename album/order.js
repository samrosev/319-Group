var totalPrice = 0;

document.addEventListener("DOMContentLoaded", function() {
  // Fetch JSON data
  fetch("midterm.json")
    .then(response => response.json())
    .then(data => displayMenu(data.menu.categories))
    .catch(error => console.error("Error fetching JSON:", error));

  // Function to display menu
  function displayMenu(categories) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';

    categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.innerHTML = `<h3>${category.category_name}</h3>`;
      
      category.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
          <p><strong>${item.name}</strong></p>
          <p>${item.description}</p>
          <p>Price: ${item.price}</p>
          <button class="add-to-order-btn">Add</button>
          <button class="remove-from-order-btn">Remove</button>
        `;
        itemDiv.querySelector('.add-to-order-btn').addEventListener('click', () => addToOrder(item.name, item.price));
        itemDiv.querySelector('.remove-from-order-btn').addEventListener('click', () => removeFromOrder(item.name, item.price)); // Add event listener for remove button
        categoryDiv.appendChild(itemDiv);
      });

      menuContainer.appendChild(categoryDiv);
    });
  }

  // Function to add item to order
  function addToOrder(name, price) {
    const orderSummary = document.getElementById('orderSummary');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${price}`;
    orderSummary.appendChild(listItem);
    totalPrice += price;
    console.log("Added item to order")
  }

  // Function to remove item from order
  function removeFromOrder(name, price) {
    const orderSummary = document.getElementById('orderSummary');
    const items = orderSummary.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.textContent === `${name} - ${price}`) {
        orderSummary.removeChild(item);
        totalPrice -= price;
        console.log("Removed item from order");
        return; // Stop after removing the first matching item
      }
    }
  }




  // Function to submit order
  function submitOrder() {
    const orderSummary = document.getElementById('orderSummary');
    if (orderSummary.children.length > 0) {
      alert('Order submitted!');
      orderSummary.innerHTML = '';
    } else {
      alert('Please add items to your order before submitting.');
    }
  }

  // Attach submitOrder function to the submit button
  const submitButton = document.getElementById('submitOrderButton');
  submitButton.addEventListener('click', submitOrder);
  
});
