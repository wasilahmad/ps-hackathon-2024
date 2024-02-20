/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../images/logo-icon.png';
import CountryDropDown from './CountryDropDown';

const HeaderComponent = () => {
  return (
    <header>
        <div className="navbar navbar-dark shadow-sm">
            <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
                <img src={logo} alt="" />
                <strong>iVERS STAYS</strong>
            </a>
            <CountryDropDown />
            </div>
        </div>
    </header>
  );
};

export default HeaderComponent;
