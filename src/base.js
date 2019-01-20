import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB6MREPmiNLL8R4e9LyeISzAKwBFi5SuWE',
  authDomain: 'nk-rfb.firebaseapp.com',
  databaseURL: 'https://nk-rfb.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
