import { writable } from 'svelte/store'

const config = writable({
  backendURL: "http://localhost:5000",
  currentUser: null,
  categories: null,
  settings: {
    address: "",
    currency: "",
    deliveryFee: null,
    email: "",
    shopName: "",
    tel: "",
    vat: null,
  }
});

export default config;