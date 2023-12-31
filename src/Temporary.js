import { NavLink } from "react-router-dom";
import menuButton from "./images.png";
import profile from "../assets/Home/profile_icon.svg";
import cart from "../assets/Home/shopping-cart.png";
import shopify from "../assets/Home/shopifylogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [loginval, setLogin] = useState(0);

  const navigate = useNavigate();
  let cnt = 1;

  // ... Other code ...
  function menubox(){
    let menu= document.getElementById('menu_list');
    if((cnt%2)!==0){
       menu.style.display='block';
       cnt++;
    }
    else{
    menu.style.display='none'
    cnt++;
    }

}
const handleClose=()=>{
    // console.log("iam closed")
     let profile=document.getElementsByClassName('profile')[0]
    //  console.log(profile)
    profile.style.display='none';
}
const handleClose2=()=>{
    console.log("iam closed")
     let log_sign=document.getElementsByClassName('log_sign')[0]
    //  console.log(log_sign)
    log_sign.style.display='none';
}
const handelClick=()=>{
     let profile=document.getElementsByClassName('profile')[0]
    //  console.log(profile)
    profile.style.display='block';
}
const handelClick2=()=>{
    let log_sign=document.getElementsByClassName('log_sign')[0]
    // console.log(log_sign)
   log_sign.style.display='block';

}
  // useEffect to update login status
  useEffect(() => {
    // Retrieve username from local storage when the component mounts
    const storedUsername = localStorage.getItem("username");
    const logval = localStorage.getItem("loginid");
    setLogin(logval);
    if (storedUsername) {
      document.getElementById("username").textContent = storedUsername;
      document.getElementById("username2").textContent = storedUsername;
    }
  }, []); // Empty dependency array means this effect runs once, when the component mounts

  const HandleCart = () => {
    const loginid = localStorage.getItem("loginid");

    if (loginid === "0") {
      // User is not logged in, show an alert
      alert("Please log in first");
    } else {
      // User is logged in, navigate to the cart page
      navigate("/cart");
    }
  };

  const submitlogout = () => {
    const email = localStorage.getItem("email");
    axios
      .post(`https://e-commerce-app-6v8f.onrender.com/logoutuser/${email}`)
      .then((res) => res.data)
      .then((res) => {
        localStorage.setItem("islogin", false);
        localStorage.setItem("mahesh", "");
        localStorage.setItem("email", "");
        localStorage.setItem("loginid", 0);
        localStorage.setItem("username", "");

        setLogin(0); // Set login state to 0 (not logged in)

        return alert(res.msg);
      })
      .catch((err) => console.log("error", err));
    document.getElementById("username").innerHTML = "";
    document.getElementById("username2").innerHTML = "";
    let profile = document.getElementsByClassName("profile")[0];
    profile.style.display = "none";
    let log_sign = document.getElementsByClassName("log_sign")[0];
    log_sign.style.display = "none";
    navigate("/");
  };

  return (
    <div className="linkprnt">
      {/* ... Other code ... */}
      <div id='tittle'>
           <img id='shopify' src={shopify} alt="not"  width='50px'/>
           <span id="username2">.</span>
            <button id='menu_button' onClick={menubox} >
               <img src={menuButton} alt="notfound" width='30px' />
            </button>
           
           </div>
           <div className="menu">
           <span id='menu_list'>
           <div className="dashboard">
           <button onClick={HandleCart}> 
           <img src={cart} alt='not' height='35px' width='30px'/>
           </button>
   
    <button onClick={handelClick2}><img src={profile} alt='not' height='35px'/></button>
     </div>
     <hr></hr>
     <div className="searchbar">
        <input type="text" placeholder="search here.." className="search"/>
        </div>
        <div className="log_sign">
        <button  id='close' onClick={handleClose2}>X</button><br></br>
        <li>< Link  to='/signup' onClick={()=>{
          let log_sign=document.getElementsByClassName('log_sign')[0]
          log_sign.style.display="none"
        }}>Signup</ Link></li>
        <li>< Link  to='/login' onClick={()=>{
          let log_sign=document.getElementsByClassName('log_sign')[0]
          log_sign.style.display="none"
        }} >login</ Link></li>
        <li style={{color:"black", fontSize:"1.5rem"}}onClick={submitlogout}>Logout</li>
        </div>
            {/* <ul> */}
                <li> <NavLink  to='/'>Home</NavLink></li> 
                <li><NavLink to='/mobiles'>Mobile</NavLink></li>
                <li><NavLink to='/watches'>Watches</NavLink></li>
                <li><NavLink to='/headset'>Headset</NavLink></li>
                <li> <NavLink to='/laptop'>Laptop</NavLink></li>
            {/* </ul> */}
            </span>
           </div>
           
         <div id='navbar'>
        <div className="nav2">
         <img id='shopify' src={shopify} alt="not" height='40px' width='50px'/>
       
        <div className="searchbar">
        <input type="text" placeholder="search here.." className="search"/>
       
        </div>
      <div>
        
       <h4 id="username">.</h4>
           </div>
      <div className="dashboard">
        <button onClick={HandleCart}>
          <img src={cart} alt="not" height="40px" width="45px" />
        </button>
        {loginval === "0" ? (
          <button>
            <Link to="/login">Login</Link>
          </button>
        ) : (
          <button onClick={submitlogout}>Logout</button>
        )}
        <button onClick={handelClick}>
          <img src={profile} alt="not" height="35px" />
        </button>
      </div>
      <div className="componentLink">
         <li> <NavLink to='/'>Home</NavLink></li>  

         <li><NavLink to='/mobiles'>Mobile</NavLink>
         <ul className="dropdown">
            <li><NavLink to= "/vivo"> Vivo</NavLink></li>
            <li><NavLink to= "/realme"> Realme</NavLink></li>
            <li><NavLink to= "/samsung"> Samsung</NavLink></li>
            <li><NavLink to= "/oneplus">One plus </NavLink></li>
         </ul>
         </li>
        <li><NavLink to='/watches'>Watches</NavLink>
        <ul className="dropdown">
           
            <li><NavLink to= "/noise">Noise </NavLink></li>
            <li><NavLink to= "/boatwatch">Boat </NavLink></li>
            <li><NavLink to= "/applewatches"> Apple</NavLink></li>
           <li><NavLink to= "/samsungwatches">Samsung </NavLink></li>
         </ul>
        </li>
        <li><NavLink to='/headset'>Headset</NavLink>
        <ul className="dropdown">
          
            <li><NavLink to= "/boatbuds"> Boat</NavLink> </li>
            <li><NavLink to= "/mivi">Mivi </NavLink> </li>
            <li><NavLink to= "/oneplusbuds">one plus </NavLink></li>
            <li>  <NavLink to= "/applebuds">Apple</NavLink></li>
           
         </ul>
        </li>
        <li> <NavLink to='/laptop'>Laptop</NavLink>
        <ul className="dropdown">
            <li><NavLink to= "/applelaptops">Apple </NavLink></li>
            <li><NavLink to= "/lenovo"> Lenovo</NavLink> </li>
            <li><NavLink to= "/dell"> Dell </NavLink></li>
            <li><NavLink to= "/hp">HP </NavLink></li>
         </ul>
        </li>
         </div>
        </div>
        
      {/* ... Other code ... */}
      </div>
    </div>
  );
};

export default Navbar;
