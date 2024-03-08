    // Fetch JSON data
    fetch("midterm.json")
      .then(response => response.json())
      .then(data => displayMenu(data.cats))
      .catch(error => console.error("Error fetching JSON:", error));
  
    // Function to display menu
    function displayMenu(cats) {
      const catContainer = document.getElementById('container');

        catContainer.innerHTML = '';  
        cats.forEach(cat => {
          const itemDiv = document.createElement('div');
    
          itemDiv.innerHTML = `


          `;
          catContainer.appendChild(itemDiv);
        });
  
        //<p>${cat.description}</p>
        //catContainer.appendChild(categoryDiv);
    
    }

    // function display(${cat.name}){

    // }

// function learnMore(name,description,age,gender,url){
//     const catContainer = document.getElementById("container");
//         const listItem = document.createElement('li');
//         listItem.textContent = `${name} - ${description} - ${age} - ${gender}- ${url}`;
//         catContainer.appendChild(listItem);
// }