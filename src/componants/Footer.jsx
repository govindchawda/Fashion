import React from 'react'
import img1 from '../images/logo.webp'
import img2 from '../images/img2.webp'

export default function Footer() {
  return (
    <footer>
      <div className="container">
      <div className="footer">
        <div className="company">
          <img src={img1} alt="" />
          <p>The customer is at the heart of our unique business model, which includes design</p>
          <img src={img2} alt=""  className='f-img'/>
        </div>
        <div className="category">
          <h3>CATEGORIES</h3>
          <ul>
            <li>MEN's CLOTHING</li>
            <li>WOMEN's CLOTHING</li>
            <li>CHILDREN's CLOTHING</li>
            <li>FOOTWEAR</li>
          </ul>
        </div>
        <div className="footer-link">
           <h3>SHOPING</h3>
           <ul>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>PAYMENT METHODS</li>
            <li>RETURN & EXCHANGE</li>
           </ul>
        </div>
        <div className="main-menu">
      <h3>MAIN-MENU</h3>
      <div className="footer-main">
    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
    <div  className='footer-input'>
    <input type="email"placeholder='Enter Email' /></div>
    <hr className='hr-line' />
      </div>
      </div>
      </div>

      <hr className='hr-line' />
      <div className='footer_bottom_tittle'>
      <strong>made by <span className='span1'>govind</span> <span className='span2'>chawda</span> <span className='span1'>46</span></strong>
      </div>
        </div>
    </footer>

  )
}
