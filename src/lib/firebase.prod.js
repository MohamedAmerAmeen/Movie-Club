import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAbE0K7SWuVkxAsU9MsTiiyG1qrSCktxD8",
    authDomain: "movie-app-7158a.firebaseapp.com",
    projectId: "movie-app-7158a",
    storageBucket: "movie-app-7158a.appspot.com",
    messagingSenderId: "726635365627",
    appId: "1:726635365627:web:a5408ece67d6c6b798dc5e"
}

const firebase = Firebase.initializeApp(firebaseConfig);    

// seedDatabase(firebase);

export {firebase};
