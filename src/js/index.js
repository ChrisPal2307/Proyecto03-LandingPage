"use strict";

import { saveForm } from "./firebase.js";

const enableform = () => {
    const form = document.getElementById("saveForm");

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

const count = async () => {

    const countForm = await fetch("https://landingpage-7afca-default-rtdb.firebaseio.com/serviceRequests.json")
        .then((response) => response.json())
        .then((data) => {
            const countElement = document.getElementById("total-citas-contador");
            if (countElement) {
                countElement.textContent = Object.keys(data).length;
            }
        });

}

(() => {
    enableform();
    count();
})();

export { enableform };
