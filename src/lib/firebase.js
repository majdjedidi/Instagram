import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import {seedDatabase} from '../seed'
const config ={
apiKey:"AIzaSyAzmYJUZhiahy80aCpOQ8BvpKQPzSMJKiM",
authDomain: "instagram-2d22b.firebaseapp.com",
projectId: "instagram-2d22b",
storageBucket: "instagram-2d22b.appspot.com",
messagingSenderId: "704054239658",
appId: "1:704054239658:web:002efa421885ec1191cbd3"
};
const firebase = Firebase.initializeApp(config);
const FieldValue = firebase.firestore.FieldValue;



//seedDatabase(firebase);
export {firebase,FieldValue};