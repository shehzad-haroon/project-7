import firebase from 'firebase';
firebase.initializeApp({
    apiKey: "AIzaSyAPgIGeUuO-y7p41BZf1OZuuA47HQdD_38",
    authDomain: "notifications-c1012.firebaseapp.com",
    projectId: "notifications-c1012",
    storageBucket: "notifications-c1012.appspot.com",
    messagingSenderId: "1033914510159",
    appId: "1:1033914510159:web:ddd387820549eb7fec333a"
});

  const messaging = firebase.messaging();

export function requestPermission() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
  }