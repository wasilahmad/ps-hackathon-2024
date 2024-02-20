import React, { useEffect, useState } from 'react';

/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
const HeroBanner = () => {

  const [cssClass, setCssClass] = useState('');

  useEffect(() => {
    // Function to read query parameters from the URL
    const getQueryParam = (name) => {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    };
   var cssClassBg = 'jumbotron jumbotron-bg';
  // Read the 'param' query parameter from the URL on component mount
  const initialParamValue = getQueryParam('team');
    if (initialParamValue === 'France') {
      cssClassBg = 'jumbotron jumbotron-bg jumbotron-bg-france';
    }
    else if (initialParamValue === 'Italy') {
      cssClassBg = 'jumbotron jumbotron-bg jumbotron-bg-italy';
    } else if (initialParamValue === 'Brazil') {
      cssClassBg = 'jumbotron jumbotron-bg jumbotron-bg-brazil';    
    }
    setCssClass(cssClassBg);  
}, []);

  return (
    <section className={cssClass}>
        <div className="container">
            <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
                <h1 className="jumbotron-heading">
                FIFA World Cup 2026 Hotel Bookings Made Easy with iVERS STAYS
                </h1>
                <p className="lead">
                "Experience the thrill of the FIFA World Cup like never before! Book
                your stay at our hotel and enjoy luxurious accommodations, top-notch
                amenities, and easy access to all the action. Book now and make your
                World Cup dreams a reality!"
                </p>
                <p>
                <a href="https://www.marriott.com/loyalty/createAccount/createAccountPage1.mi" className="btn btn-solid-light btn-lg my-2" target="_blank">
                    Book Now
                </a>
                </p>
            </div>
            </div>
        </div>
        {/* <div className="overlay"></div> */}
    </section>
  );
};

export default HeroBanner;