// ==========================================
// REGISTRATION SYSTEM
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const modal =
        document.getElementById("registrationModal");

    const closeModal =
        document.getElementById("closeModal");

    const form =
        document.getElementById("registrationForm");

    const successMessage =
        document.getElementById("successMessage");

    const successClose =
        document.getElementById("successClose");

    const eventSelection =
        document.getElementById("eventSelection");


    // ======================================
    // ADD EVENTS TO SELECT
    // ======================================

    if (eventSelection && typeof events !== "undefined") {

        events.forEach(event => {

            const option =
                document.createElement("option");

            option.value =
                event.name;

            option.textContent =
                event.name;

            eventSelection.appendChild(option);

        });

    }


    // ======================================
    // CLOSE MODAL
    // ======================================

    function closeRegistrationModal() {

        modal.classList.remove("show");

        document.body.classList.remove("modal-open");

        if (form) {

            form.reset();

        }

        if (successMessage) {

            successMessage.classList.remove("show");

        }

        if (form) {

            form.style.display = "block";

        }

    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeRegistrationModal
        );

    }


    if (successClose) {

        successClose.addEventListener(
            "click",
            closeRegistrationModal
        );

    }


    // Close by clicking outside

    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {

                closeRegistrationModal();

            }

        });

    }


    // ======================================
    // VALIDATION
    // ======================================

    function validateForm() {

        let valid = true;


        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const college =
            document.getElementById("college");

        const selectedEvent =
            document.getElementById("eventSelection");


        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const collegeError =
            document.getElementById("collegeError");

        const eventError =
            document.getElementById("eventError");


        // Clear errors

        nameError.textContent = "";
        emailError.textContent = "";
        collegeError.textContent = "";
        eventError.textContent = "";


        // Name

        if (name.value.trim().length < 2) {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        // Email

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        // College

        if (college.value.trim().length < 2) {

            collegeError.textContent =
                "Please enter your college name.";

            valid = false;

        }


        // Event

        if (!selectedEvent.value) {

            eventError.textContent =
                "Please select an event.";

            valid = false;

        }


        return valid;

    }


    // ======================================
    // SUBMIT FORM
    // ======================================

    if (form) {

        form.addEventListener("submit", event => {

            event.preventDefault();


            if (!validateForm()) {

                return;

            }


            const registration = {

                name:
                    document.getElementById("name").value.trim(),

                email:
                    document.getElementById("email").value.trim(),

                college:
                    document.getElementById("college").value.trim(),

                event:
                    document.getElementById("eventSelection").value,

                registeredAt:
                    new Date().toISOString()

            };


            // =================================
            // LOCAL STORAGE
            // =================================

            let registrations =
                JSON.parse(
                    localStorage.getItem("eventRegistrations")
                ) || [];


            registrations.push(registration);


            localStorage.setItem(
                "eventRegistrations",
                JSON.stringify(registrations)
            );


            // =================================
            // SHOW SUCCESS
            // =================================

            form.style.display =
                "none";

            successMessage.classList.add(
                "show"
            );

        });

    }

});