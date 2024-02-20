import React, { useState } from 'react';
import Testimonial from './Testimonial';
import Carousel from 'react-bootstrap/Carousel'

const TESTIMONIALS = [
    {
        "title":"Unforgettable Luxury Experience",
        "desc": "The hotel's amenities, including the spa and pool, were an added bonus that made our stay even more enjoyable. I would highly recommend the iVERS STAYS to anyone looking for a 5-star experience in a top-notch location"
    },
    {
        "title":"Weekend Bliss at the Elegant iVERS STAYS",
        "desc": "As soon as we entered the lobby, we were impressed by the elegant decor and attention to detail. Our room was spacious and impeccably clean, offering a comfortable retreat after a day of exploring the city."  
    },
    {
        "title":"Exceptional Business Stay at the iVERS STAYS",
        "desc": "The hotel's meeting facilities were top-notch, and the catering provided during our conference was truly impressive. I can't imagine staying anywhere else when visiting the area for business or leisure. The Hotel has set a new standard for luxury accommodations"
    },
]

const TestimonialCarousel = () => {
    const [items] = useState(TESTIMONIALS);

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h2 mb-4">Your Satisfaction, Our Pride: Genuine Testimonials From Our Clients</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <Carousel controls={false} indicators={false} fade>
                    {/* <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}                    
                    {
                        items.map((item, index) => (
                            <Carousel.Item interval={5000} key={index}>
                                <Testimonial title={item.title} desc={item.desc} index={index} />
                            </Carousel.Item>
                        ))
                    }
                    </Carousel>
                </div>
            </div>
            
            <div className="space-bar"></div>
        </div>
        </>     
    );
  };
  
  export default TestimonialCarousel;