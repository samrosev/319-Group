document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("midterm.json")
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
            
            <p></p>
            <button onclick="learnMore('${cat.name}', '${cat.description}','${cat.age}')">Learn More</button>
          `;
          catContainer.appendChild(itemDiv);
        });
  
        //<p>${cat.description}</p>
        //catContainer.appendChild(categoryDiv);
    
    }
});