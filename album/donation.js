document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data for cats
    fetch("Midterm.json")
        .then(response => response.json())
        .then(data => populateDropdown(data.cats))
        .catch(error => console.error("Error fetching JSON:", error));

    // Function to populate the dropdown menu with cat names
    function populateDropdown(cats) {
        const catSelect = document.getElementById('catSelect');

        cats.forEach(cat => {
            const option = document.createElement('option');
            option.textContent = cat.name;
            option.value = cat.name; // You can set the value to cat ID or any unique identifier if needed
            catSelect.appendChild(option);
        });
    }

    // Handle donation submission
    const donationForm = document.getElementById('donationForm');
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form data
        const formData = new FormData(donationForm);
        const catName = formData.get('catName');
        const amount = formData.get('amount');

        // Simulate donation process (replace with actual donation handling)
        alert(`Thank you for sponsoring ${catName} with a donation of $${amount}!`);

        // Clear form inputs
        donationForm.reset();
    });
});
