import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Categories() {
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
    <div className='container'>
        <div className='categories_tittle'>
            <h2>Categoreis</h2>
        </div>
        <div className='category_box animate__animated animate__slideInUp wow'>
            {arr.map((items,index)=>(
                 <div className='category_childBox '>
                     <p><strong>{items}</strong></p>
                 </div>
            ))}
        </div>
    </div>
  )
}
