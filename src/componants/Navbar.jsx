import React, { useEffect, useState } from 'react'
import logo from  '../images/logo.webp'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const[arr, setArr] = useState([]);
    useEffect(()=>{
        try {
            axios.get('https://fakestoreapi.com/products/categories').then((res)=>{
                setArr(res.data);
            })
        } catch (error) {
            
        }
    },[])
  return (
    <nav>
        <div className="container">
            <div className="navHeader">
                <div><img src={logo} alt="" /></div>
                <ul>
                    <li><Link to="" className='navText'>Home</Link></li>
                    <li><Link to="">Shop</Link></li>
                    <li className="dropdown">
                        <Link to="/Categories" className="dropbtn">Products</Link>
                        <div  className="dropdown-content">
                            {arr.map((items,index)=>{
                                return(   
                                    <Link key={index} to="#">{items}</Link>
                                )
                            })}
                        </div>
                    </li>
                    <li><Link to="" className='navText'>Cart</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )

}
