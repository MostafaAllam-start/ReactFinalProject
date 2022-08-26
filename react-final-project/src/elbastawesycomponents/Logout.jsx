import React from 'react'
function Logout(props){
return(
    <button type='button' className='btn btn-danger m-2' onClick={props.handleclick} hidden={props.hidden}>  🚶‍♂️logout </button>

)

}
export default Logout