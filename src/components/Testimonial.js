import user1 from '../images/user_1.png';
import user2 from '../images/user_2.png';
import user3 from '../images/user_3.png';

const Testimonial = ({title, desc, index}) => {
    const images = [user1, user2, user3];
    const imageIndex = index % images.length;

    return (
        <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">
                {title}
                {/* <span className="text-muted">See for yourself.</span> */}
                </h2>
                <p className="lead">
                {desc}
                </p>
            </div>
            <div className="col-md-5 order-md-1">
                <img
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width={500}
                    height={500}
                    src={images[imageIndex]}
                    alt="Happy Customer"
                    />
            </div>
        </div>
    );
  };
  
  export default Testimonial;