importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAPgIGeUuO-y7p41BZf1OZuuA47HQdD_38",
    authDomain: "notifications-c1012.firebaseapp.com",
    projectId: "notifications-c1012",
    storageBucket: "notifications-c1012.appspot.com",
    messagingSenderId: "1033914510159",
    appId: "1:1033914510159:web:ddd387820549eb7fec333a"
});
//   firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging();