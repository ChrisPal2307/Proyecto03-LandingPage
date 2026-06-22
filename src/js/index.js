"use strict";



const enableform = () => {
  const form = document.getElementById("serviceRequestForm");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();
        const formData = {
            fullname: form.querySelector("#form-fullname").value,
            whatsapp: form.querySelector("#form-whatsapp").value,
            service: form.querySelector("#form-service").value,
            date: form.querySelector("#form-date").value,
            details: form.querySelector("#form-details").value
        };  

        try {

            let response = await saveForm(formData);

            if (response.success) {
                
                alert(response.message);
                form.reset();

            } else {

                alert(response.message);

            }

        } catch (error) {
            alert("An unexpected error occurred: " + error.message);
        }

    }

    );
};


(() => {
  enableform();
})();

export { enableform };
