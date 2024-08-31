import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <section>
        <div className="container">
            <div className="banner">
                <div className='bannerMainbox'>
                    <div className='Mainbox_images'>
                        <div className='bannerText'>
                            <h2>NEW <br /> COLLACTION</h2>
                        <p>of fashion clothes</p>
                        <a href="">shop Now</a>
                        </div>
                    </div>
                </div>
                <div className='bannerRightSide'>
                    <div className="bannerRightTop">
                        <div className='bannerRightText'>
                            <h4>Get the hottest styles</h4>
                            <h3>at 70% off!</h3>
                        </div>
                    </div>
                <div className="bannerRightBottom">
                    <h3>last chance</h3>
                    <h4>up to 60%off</h4>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
