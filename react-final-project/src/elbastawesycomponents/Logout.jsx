import React from 'react'
import {useAuth,logout,} from "./firebase"
import {useState,} from 'react';
function Logout(props){
    const [loading,setloading]=useState(false);
    const currentUser=useAuth();
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
    // <button type='button' className=' btn m-2 border-none' onClick={handlelogout} hidden={loading||!currentUser}>  logout </button>
    // <a  onClick={handlelogout} hidden={loading||!currentUser}> logout</a>
    <a className="nav-link" href="#login" onClick={handlelogout} hidden={loading||!currentUser}><i class="fa-solid fa-right-from-bracket"></i></a>
)

}
export default Logout