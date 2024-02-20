import React, { useState } from 'react';
import MediaCard from './MediaCard';

const MediaCardList = () => {

    const offers = [
        { date: "1st, Feb 2026", desc: "Winter Savings & Packages" },
        { date: "2nd, Feb 2026", desc: "Save on 5 + Nights" },
        { date: "3rd, Feb 2026", desc: "Resort Retreats Earn upto $100 credit" },
      ];

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h2 mb-4">Limited Time Deals: Grab One and Go</h2>
                </div>
            </div>
            <div className="row">
            {
                offers.map((offer, index) => (
                    <div className="col-md-4" key={index}><MediaCard date={offer.date} detail={offer.desc} index={index}/></div>
                ))
            }
            </div>
            <div className="space-bar"></div>
        </div>
        </>     
    );
  };
  
  export default MediaCardList;