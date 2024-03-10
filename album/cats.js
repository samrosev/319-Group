document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("data.json")
      .then(response => response.json())
      .then(data => displayMenu(data.cats))
      .catch(error => console.error("Error fetching JSON:", error));
  
    // Function to display menu
    function displayMenu(cats) {
      const catContainer = document.getElementById('cats');

      catContainer.innerHTML = '';
            
        cats.forEach(cat => {
          const itemDiv = document.createElement('div');
          itemDiv.innerHTML = `
            <p><strong>${cat.name}</strong> - ${cat.age} year old ${cat.gender}</p>
            <img src=${cat.url}/>
            <p>${cat.description}</p
            
            <p></p>
            
            <button>Adopt Me!</button>
            <hr class="dashed">

          `;
          catContainer.appendChild(itemDiv);
        });
  
        //<p>${cat.description}</p>
        //catContainer.appendChild(categoryDiv);
        //<a id=redirect href="learnMore.html" target="_blank">
        //<button>Learn More</button>
      //</a>
    
    }

    function learnMore(){
    //     <a id=redirect href="learnMore.html" target="_blank">
    //     <button>Learn More</button>
    // </a>
    }


    // function addToOrder(name, price) {
    //     const orderSummary = document.getElementById('orderSummary');
    //     const listItem = document.createElement('li');
    //     listItem.textContent = `${name} - ${price}`;
    //     orderSummary.appendChild(listItem);
    //   }
    //            <p></p>
    //<button onclick="learnMore()">Learn More</button>
});