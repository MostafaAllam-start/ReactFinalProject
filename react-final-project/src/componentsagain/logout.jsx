import React from 'react'

function Logout(props){
    
return(
    // <button type='button' className=' btn m-2 border-none' onClick={handlelogout} hidden={loading||!currentUser}>  logout </button>
    // <a  onClick={handlelogout} hidden={loading||!currentUser}> logout</a>
    <a className="nav-link" href="#" onClick={props.handlelogout} hidden={props.loading||!props.currentUser}><i className="fa-solid fa-right-from-bracket"></i></a>
)

}
export default Logout