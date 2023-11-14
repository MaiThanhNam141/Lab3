import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAitznqMtvAU5nx0u8qVPxvFLAzHYsgw7o",
    authDomain: "rnexpo-429ed.firebaseapp.com",
    projectId: "rnexpo-429ed",
    storageBucket: "rnexpo-429ed.appspot.com",
    messagingSenderId: "886087002580",
    appId: "1:886087002580:web:6e965d072ab5fdfd708e41"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };