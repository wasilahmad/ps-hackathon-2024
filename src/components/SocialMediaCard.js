import coverImage from '../images/hotel-bg-1.jpg';
import insta from '../images/instagram.svg';
import whatsapp from '../images/whatsapp.svg';
import facebook from '../images/facebook.svg';


const SocialMediaCard = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="card bg-dark text-white height-300 border-0">
                    <img src={coverImage} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    <div className="text-center">
                        <h3 className="card-title text-uppercase">
                        Share on Social Media &amp; Earn Exciting Offers!
                        </h3>
                        <p className="card-text">
                        Dear football fans, refer our link to your friends and earn a
                        bonus on your next room stay! Plus, the more you share, the higher
                        your chances of getting room upgrades. Don't miss out on this
                        exciting opportunity!
                        </p>
                        <div className="d-flex justify-content-center">
                            <a href="https://www.marriott.com/loyalty/createAccount/createAccountPage1.mi" className="btn btn-solid-light btn-lg my-2" target="_blank">
                                Join Affiliate Membership
                            </a>
                        </div>
                        <div className="divider-line d-flex justify-content-center">
                            <span>OR</span> 
                        </div>
                        <div className="d-flex justify-content-center" >
                            <a href="https://web.whatsapp.com/"  target="_blank"><img className="social-icon" src={whatsapp} alt="whatsapp"/></a>
                            <a href="https://www.instagram.com/?hl=en"  target="_blank"><img className="social-icon" src={insta} alt="instagram"/></a>
                            <a href="https://www.facebook.com/?hl=en"  target="_blank"><img className="social-icon" src={facebook} alt="instagram"/></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="space-bar" />
        </div>
        </>  
    );
  };
  
  export default SocialMediaCard;