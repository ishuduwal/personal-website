import axios from "axios";
const URL = "http://localhost:5000/contact";

export const sendContact = (contactData) => axios.post(`${URL}`, contactData);