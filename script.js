document.addEventListener("DOMContentLoaded", function() {
    const additionalFeatures = document.querySelectorAll(".checkbox-group input");
    const totalAmount = document.getElementById("totalAmount");
    const logoYes = document.getElementById("logoYes");
    const uploadLogo = document.getElementById("uploadLogo");

    function calculateTotal() {
        let total = 0;
        additionalFeatures.forEach((feature) => {
            if (feature.checked) total += parseInt(feature.value);
        });
        totalAmount.textContent = total;
        totalAmount.style.color = "blue";
    }

    additionalFeatures.forEach((feature) => feature.addEventListener("change", calculateTotal));

    logoYes.addEventListener("change", () => {
        uploadLogo.classList.remove("hidden");
    });

    document.getElementById("enquiryForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (!document.getElementById("name").value.trim()) {
            alert("Please fill all required fields.");
            return;
        }

        alert("Your enquiry has been submitted successfully!");
        document.getElementById("enquiryForm").reset();
        totalAmount.textContent = "0";
        totalAmount.style.color = "black";
    });
});
