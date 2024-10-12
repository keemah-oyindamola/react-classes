import mystyle from "./Mystyle";
import image from "./Suga-of-BTS-solo-tour-050123-05-2000-f662155cd4134a63abad0ed8b2b0218b.jpg" 
import { AiFillAppstore } from "react-icons/ai";
import sstyling from "./Sstyling";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Notfound from "./Notfound";
import Discard from "./Discard";
import Todo from "./Todo";
import Navbar from "./Navbar";
import Http from "./Http";
import Oneproduct from "./Oneproduct";
import Clw from "./Clw";
import Formik from "./Formik";
import Login from "./Login";
import Mydashbd from "./Mydashbd";
import Counter from "./Counter";
import Userrexux from "./Userrexux";

const App = ()=>{
  // const mystyle={
  //   header:{
  //     color:'blue',
  //     fontSize:'20px'
  //   },
  //   nav:{
  //     color:'yellow',
  //     fontSize:'20px'
  //   }
  // }
  // const sstyling={
  //   color:'red',
  // }
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<Notfound/>}/>
      <Route path="/student/signup" element={<Discard/>}/>
      <Route path="/student/signin" element={<Todo/>}/>
      <Route path="/http" element={<Http/>}/>
      <Route path="/one/:id" element={<Oneproduct/>}/>
      <Route path="/clw" element={<Clw/>}/>
      <Route path="/formik" element={<Formik/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/mydashbd/:id" element={<Mydashbd/>}/>
      <Route path="/count" element={<Counter/>}/>
      <Route path="/user" element={<Userrexux/>}/>

    </Routes>
      {/* <h1 style={{color:'red', backgroundColor:'black'}}>Welcome to react</h1>
      <p style={mystyle.header}>Internal styling</p>
      <p style={mystyle.nav}>Internal styling</p>
      <button className="btn btn-danger">MyButton</button>
      <i className="fa fa-users"></i>
      <img src={require('./Suga-of-BTS-solo-tour-050123-05-2000-f662155cd4134a63abad0ed8b2b0218b.jpg')}  />
      <img src={image} alt="" />
      <AiFillAppstore />
      <p style={sstyling}>jsugsuygw</p> */}
      
    </>
  ) 
}
export default App;