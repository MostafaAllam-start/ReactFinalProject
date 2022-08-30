import React ,{Component}from "react";
import  { db }  from "./firebase";
// import { FirebaseApp } from "firebase/app";
import{collection,addDoc} from "firebase/firestore";
class Addproduct extends Component {
state={
  name:"",
  description:"",
  price:"",
  imgsrc:"",
  categorie:""
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
    categorie:this.state.categorie


  })

  alert("thanks");
}
render(){
    return(
       <React.Fragment>
       <form className="container">
       <h1 className="text-center mt-2 modalheadingcolor ">
       Add Product information
       </h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">product name:</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" onChange={this.onchangehandler}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">product description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="description" onChange={this.onchangehandler}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">product price</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="price" onChange={this.onchangehandler}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">product image link</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="imgsrc" onChange={this.onchangehandler}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">product categorie</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="categorie" onChange={this.onchangehandler}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={this.submithandler}>Add</button>
</form>
       </React.Fragment>
    )
}
}
export default Addproduct;