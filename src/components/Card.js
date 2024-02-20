import hotel_1 from '../images/hotel-1.jpg';
import hotel_2 from '../images/hotel-2.jpg';
import hotel_3 from '../images/hotel-3.jpg';
import share from '../images/share-color.svg';

const Card = (props) => {
    const {name, address, availablility, cuisines, fans, distanceToStadium, link} = props.data;
    const index = props.index;
    const images = [hotel_1, hotel_2, hotel_3];
    const imageIndex = index % images.length;
    return (
        <div className="card mb-4 mb-lg-0 shadow-sm">
            <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height={225}
            src={images[imageIndex]}
            alt=""
            />
            <div className='badge card-badge'>Available:{availablility}</div>
            <div className="card-body">
                <h3 className="card-text card-title"><span className='text-bold text-uppercase'>{name}</span></h3>
                <p className="card-text">Address:  <span className='text-muted'>{address}</span></p>

                <p className="card-heading mb-2">Key Highlights:</p>
                <ul>
                    <li>Distance to Stadium: {distanceToStadium}km</li>
                    <li>Cuisines: {cuisines}</li>
                    <li>Booked by Regional Fans: {fans}</li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <a href={link} className="btn btn-sm btn-outline-secondary">
                        View Offer
                    </a>
                    <a href={link} className="btn btn-sm btn-outline-secondary">
                        Book Now
                    </a>
                    </div>
                    <div className="text-muted d-inline-flex pl-4" >
                        <a href="#" target="_blank"><img className="share-icon" src={share} alt="share"/></a>
                    </div>
                </div>
            </div>
      </div>      
    );
  };
  
  export default Card;