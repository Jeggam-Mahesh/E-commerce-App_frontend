import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const SingleProductComp=(props)=>{
   const [value,setValue]=useState("");
   useEffect(()=>{
      axios.get(`https://e-commerce-app-6v8f.onrender.com/${props.value}`)
      .then((data)=>setValue(data.data)) 
     .catch((e)=>console.log("eeror",e))
 },[props.value])
    console.log("use effect",value,props)

    return( 
        <>
        <Navbar/>
        <div  className="main_cotainer">
            {/* <div className="container1"></div> */}
            <div className="container2">
            {
             value&&value.filter((item)=>item.brand===props.product).map((item,index)=>{
                return (
                    <div className="gen" key={index}>
                    <Link to='/productdetails' state={{index:item}} ><img src={item.image} alt='not' width='200px' height='200px' /></Link>
<<<<<<< HEAD
                    <h4>{item.product_tittle.slice(0,50)}</h4>
=======
                    <h2>{item.product_tittle.slice(0,50)}</h2>
>>>>>>> bc09061032e3fb7070418231bcff41c7197b9e7b
                <h3  className="price">Price:₹{item.price}</h3>
                <Link className="addtocartbtn" to='/productdetails' state={{index:item}} ><button className='btn'>Add To Cart</button>
                </Link>
                    </div>
                )
            }) 
                     
            }
            </div>
        </div>
        </>
    ) 
}
export default SingleProductComp
