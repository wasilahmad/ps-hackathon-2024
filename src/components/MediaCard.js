import media1 from '../images/media-card-1.jpg';
import media2 from '../images/media-card-2.jpg';
import media3 from '../images/media-card-3.jpeg';

const MediaCard = ({date, detail, index}) => {
    const images = [media1, media2, media3];
    const imageIndex = index % images.length;

    return (
        <div className="card offer-card-container bg-dark text-dark border-0 mb-4 mb-lg-0">
            <img src={images[imageIndex]} className="card-img" alt="" />
            <div className="card-img-overlay offer-card">
                <p className="card-title font-small">
                    Valid through <br/>{date}
                </p>
                <span className="card-divider"></span>
                <p className="card-text">
                    {detail}
                </p>
                <a href="https://www.marriott.com/offers.mi" className="btn btn-secondary">view offer</a>
            </div>
        </div>
    );
  };
  
  export default MediaCard;