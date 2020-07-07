import React from 'react'

function Hero() {
    return (
        <section className="tm-banner">
                <div className="tm-container-outer tm-banner-bg">
                    <div className="container">

                        <div className="row tm-banner-row tm-banner-row-header">
                            <div className="col-xs-12">
                                <div className="tm-banner-header">
                                    <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                                    <img src="img/dots-3.png" alt="Dots"/>
                                    <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                                    <a href="javascript:void(0)" className="tm-down-arrow-link"><i className="fa fa-2x fa-angle-down tm-down-arrow"></i></a>       
                                </div>    
                            </div>                       
                        </div> 
                      
                    </div>                    
                </div>                    
            </section>
    )
}

export default Hero
