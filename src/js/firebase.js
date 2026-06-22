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


  let ref = ref(database, "serviceRequests");
  let newRef = push(ref);
  try {
    let response = await set(newRef, {

      fullname: formData.fullname,
      whatsapp: formData.whatsapp,
      service: formData.service,
      date: formData.date,
      details: formData.details,
      timestamp: Date.now()

    });

    return response
      .then(() => {
        return {
          success: true,
          message: "Data saved successfully!"
        };
      })
      .catch((error) => {
        return {
          success: false,
          message: "Error saving data: " + error.message
        };
      });

  } catch (error) {
    return {
      success: false,
      message: "Error saving data: " + error.message
    };
  }
};

export { ref, set, push, get, child };