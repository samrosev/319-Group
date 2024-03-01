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
            <button onclick="addToOrder('${item.name}', '${item.price}')">Add to Order</button>
          `;
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
  });