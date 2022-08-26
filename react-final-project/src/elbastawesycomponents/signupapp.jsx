import React,{useState,useRef} from 'react';
import Signup from './signup';
import {signup,useAuth,logout,login} from "./firebase"
import Logout from './Logout';
import Signin from './signin';

function SignupApp(){
    const [loading,setloading]=useState(false);
    const emailref=useRef();
    const passwordref=useRef();
    const passwordref2=useRef();
    const emailref2=useRef();
    const currentUser=useAuth();
    
    async function handlesignup(){
        setloading(true);
           try {
            await signup(emailref.current.value,passwordref.current.value)
           } catch (error) {
            alert("error!")
           }
           setloading(false)
        }
        async function handlelogin(){
            setloading(true);
            try {
             await login(emailref2.current.value,passwordref2.current.value)
             console.log(emailref2.current.value);
             console.log(passwordref2.current.value);
            } catch (error) {
             alert("error!")
             console.log(emailref2.current.value);
             console.log(passwordref2.current.value);
            }
            setloading(false)
        }
        async function handlelogout(){
            setloading(true)
            try {
                await logout()
            } catch (error) {
                alert("Error!");
            }
            setloading(false)
        }
return(
<React.Fragment>
    <div className='container text-center'> 
    <Logout handleclick={handlelogout} hidden={loading || !currentUser} />
    <h1>{currentUser?.email}</h1> 
     </div>
    <div className='container'>
    <Signup emailref={emailref} passwordref={passwordref} handleclick={handlesignup} hidden={loading|| currentUser}/>
    <Signin emailref2={emailref2} passwordref2={passwordref2} handleclick={handlelogin} hidden={loading||currentUser}/>
    </div>
</React.Fragment>
)
}

export default SignupApp;