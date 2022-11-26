import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReviewBox from '../components/ReviewBox'





export default function Home() {
    return (
        <div className="home-wrapper">
            <Header/>
            <div className="home">
                <div className="home-main-content">
                    <div className="home-cta-wrapper">
                        <div className="home-cta">
                            Call To Action
                        </div>
                    </div>
                    <ReviewBox/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}