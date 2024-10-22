import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBzhbYdSF2exqRkr73FsdDQp3JULRlBVvI",
  authDomain: "netflix-clone-755cb.firebaseapp.com",
  projectId: "netflix-clone-755cb",
  storageBucket: "netflix-clone-755cb.appspot.com",
  messagingSenderId: "336773621652",
  appId: "1:336773621652:web:e2d1d577b3904b837d9181"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)


const signup = async (name , email,password) => {
    try{
  const res =   await createUserWithEmailAndPassword(auth , email ,password);
  const user = res.user;
  await addDoc(collection(db,"user") , {
    uid:user.uid,
    name,
    authPrvider : "local",
    email,
  })

    }catch (error){
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const login = async(email , password) => {
   try {
   await signInWithEmailAndPassword(auth,email ,password)
   }catch (error ) {
    console.log(error)
   toast.error(error.code.split('/')[1].split('-').join(" "))
   }
}

const logout =  () => {
    signOut(auth);
}

export {
    auth, 
    db , 
    login ,
    signup , 
    logout
}