const openEmail = document.querySelectorAll(".open-email")
const closeEmail = document.querySelectorAll(".close-button")


const overlay = document.getElementById("overlay")
const popup = document.getElementById("popup")
const emailForm = document.getElementById("email-form");

console.log("Open buttons:", openEmail);
console.log("Close buttons:", closeEmail);
console.log("Overlay:", overlay);

// Buttons
openEmail.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Open button clicked")
        console.log("Popup found:", popup)
        openPopup(popup)
    })
})

closeEmail.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Close button clicked")
        console.log("Popup found:", popup)
        closePopup(popup)
        resetForm()
    })
})

if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm();
    });
}

// Opening/closing popup
function openPopup(popup) {
    if (popup == null) {
        console.log("Popup is null!")
        return 
    }

    popup.classList.add("active")
    console.log("Popup activated:", popup.classList)
    overlay.classList.add("active")
    console.log("Overlay activated:", overlay.classList)
}

function closePopup(popup) {
    if (popup == null) {
        console.log("Popup is null!")
        return 
    }

    popup.classList.remove("active")
    console.log("Popup deactivated:", popup.classList)
    overlay.classList.remove("active")
    console.log("Overlay deactivated:", overlay.classList)
}

// Reset form when closing/submitting
function resetForm() {
    if (emailForm) {
        emailForm.reset();
        const statusMessage = document.getElementById("form-status");
        if (statusMessage) {
            statusMessage.textContent = "";
            statusMessage.className = "form-status";
        }
    }
}

// Submitting forms
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const statusMessage = document.getElementById("form-status");
    
    // Show sending message
    statusMessage.textContent = "Sending...";
    statusMessage.className = "form-status sending";
    
    // Email submission using EmailJS (recommended third-party service)
    emailjs.send("service_zj81cg6", "template_42bd4hx", {
        from_name: name,
        reply_to: email,
        message: message
    })
    .then(function(response) {
        console.log("Email sent successfully", response);
        statusMessage.textContent = "Message sent successfully!";
        statusMessage.className = "form-status success";
        
        // Optionally close the popup after successful submission
        setTimeout(() => {
            closePopup(popup);
            resetForm();
        }, 1000);
    })
    .catch(function(error) {
        console.error("Email sending failed:", error);
        statusMessage.textContent = "Failed to send message. Please try again.";
        statusMessage.className = "form-status error";
    });
}
