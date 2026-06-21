"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAHNfan9pnFFNs0GktG8RjD_NLZhRi4Hfs",
  authDomain: "landingpage-7afca.firebaseapp.com",
  projectId: "landingpage-7afca",
  storageBucket: "landingpage-7afca.firebasestorage.app",
  messagingSenderId: "949432372411",
  appId: "1:949432372411:web:4dee0d71a2a36bc7096d9e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const saveForm = async (formData) => {

  try {
    let ref = push(ref(database, "serviceRequests"));
    let newRefawait = push(ref);
    
    let response = await set(newRefawait, {

        fullname: formData.fullname,
        whatsapp: formData.whatsapp,
        service: formData.service,
        date: formData.date,
        details: formData.details,
        timestamp: Date.now()


    });

    return response
    .then(() => {
        console.log("Data saved successfully!");
    })
    .catch((error) => {
        console.error("Error saving data:", error);
        throw error;
    });


  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  };

};
    
export { ref, set, push, get, child };