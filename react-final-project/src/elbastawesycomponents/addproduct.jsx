import React ,{Component}from "react";
import  { db }  from "./firebase";
// import { FirebaseApp } from "firebase/app";
import{collection,addDoc} from "firebase/firestore";
class Addproduct extends Component {
state={
  name:"",
  description:"",
  price:"",
  imgsrc:""
}
onchangehandler=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

submithandler=(e)=>{
  e.preventDefault();
  
  addDoc(collection(db,"products"),{
    name:this.state.name,
    price:this.state.price,
    description:this.state.description,
    imgsrc:this.state.imgsrc,


  })

  alert("thanks");
}
render(){
    return(
       <React.Fragment>
       <form className="container">
       <h1>
        Product information
       </h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">product name:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" onChange={this.onchangehandler}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">product description</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="description" onChange={this.onchangehandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">product price</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="price" onChange={this.onchangehandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">product image link</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="imgsrc" onChange={this.onchangehandler}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={this.submithandler}>Add</button>
</form>
       </React.Fragment>
    )
}
}
export default Addproduct;