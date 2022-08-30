import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDlTSiJ4Vjfck6HxjKwKVMIFGgCdXyi5Jc",
  authDomain: "form-auth-1e5fc.firebaseapp.com",
  databaseURL: "https://form-auth-1e5fc-default-rtdb.firebaseio.com",
  projectId: "form-auth-1e5fc",
  storageBucket: "form-auth-1e5fc.appspot.com",
  messagingSenderId: "441486575011",
  appId: "1:441486575011:web:6d567afc3da0efc974c616"
};
const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);
export{db};
export {auth};
export function signup(email,password){
 return createUserWithEmailAndPassword(auth,email,password)
}
export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
}
export function logout(){
  return signOut(auth);
}
export function useAuth(){
  const [currentUser,setCurrentUser]= useState();
  useEffect(()=>{
  const unsub=  onAuthStateChanged(auth,user=>{setCurrentUser(user)});
  return unsub
  },[])
  return currentUser;
}