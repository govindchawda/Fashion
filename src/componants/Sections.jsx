import { FaCartPlus } from "react-icons/fa";
// import img4 from '../images/section4.avif'
import { TiStar } from "react-icons/ti";
import { IoEye } from "react-icons/io5";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";


export default function Sections() {
    const setting = {
        dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    }
    const[arr, setaArr] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setaArr(res.data)
        })
    },[]);
  return (
    <>
    <div className='container' style={{marginTop:"40px"} }>
            <div className='section_tittle'>
                <div>
                <h2>POPULAR PRODUCTS</h2>
                </div>
            </div>
            <div className='section'>
            <Slider {...setting}>
            {arr.map((items,index)=>{
                return(
                    <div className="Section_box" style={{backgroundColor:"#fff",padding:"10px",marginBottom:"20px",}} key={index}>
                        <img src={items.image} alt="" />
                        <div className='section_inner'>
                            <p>{items.title}</p>
                            <div className='sectiom_price' style={{display:"flex", justifyContent:"space-evenly"}}>
                                <p style={{paddingTop:"9px"}}>{items.price}</p>
                                       <p><TiStar />
                                4.4</p>
                            </div>
                            <div style={{display:'flex', justifyContent:"space-evenly"}}>
                            <p><FaCartPlus /> choose varient 
                            </p>
                            <p style={{fontSize:"16px", fontWeight:"500"}}><IoEye />
                            </p>
                            </div>
                        </div>
                        <div className="Section_center_box">
                        <div className="box1">
                            NEW
                        </div>
                        <div className="box2">
                            SALE
                        </div>  
                        </div>
                    </div>      
                )
            })}
            </Slider>
        </div>
    </div>
        <div className='section_bottom'>
            <a href="#">more products</a>
        </div>
    </>
  )
}