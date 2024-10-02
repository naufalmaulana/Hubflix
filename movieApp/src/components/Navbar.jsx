import hubflixLogo from '../assets/img/logo-hubflix-transparent.svg'
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({handleSearch}) {
    function openMenu(){
        document.querySelector('.sidebar').classList.add('active')
    }
    return(
        <nav>
            <Link to={"/"}>
                <img src={hubflixLogo} alt="hubflix" className="logo" width="119" height="48"/>
            </Link>
            <div className="search">
                <form className="searchForm" onSubmit={handleSearch}>
                    <input id="search" type="text" placeholder="&nbsp;Search for a movie..." className="searchFormInput"/>
                    <button type="submit" className="searchFormButton border-0">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="menu" onClick={openMenu}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1535_8341)">
                        <path d="M26.6668 23.3332C27.1805 23.3334 27.6743 23.5313 28.046 23.8857C28.4177 24.2402 28.6388 24.724 28.6635 25.2371C28.6882 25.7501 28.5146 26.2529 28.1786 26.6414C27.8426 27.0299 27.3701 27.2743 26.8588 27.3238L26.6668 27.3332H5.3335C4.81987 27.3329 4.32604 27.1351 3.95431 26.7806C3.58259 26.4262 3.36148 25.9423 3.3368 25.4293C3.31211 24.9163 3.48575 24.4134 3.82173 24.0249C4.15771 23.6364 4.63027 23.3921 5.1415 23.3425L5.3335 23.3332H26.6668ZM26.6668 13.9998C27.1973 13.9998 27.706 14.2106 28.081 14.5856C28.4561 14.9607 28.6668 15.4694 28.6668 15.9998C28.6668 16.5303 28.4561 17.039 28.081 17.4141C27.706 17.7891 27.1973 17.9998 26.6668 17.9998H5.3335C4.80306 17.9998 4.29436 17.7891 3.91928 17.4141C3.54421 17.039 3.3335 16.5303 3.3335 15.9998C3.3335 15.4694 3.54421 14.9607 3.91928 14.5856C4.29436 14.2106 4.80306 13.9998 5.3335 13.9998H26.6668ZM26.6668 4.6665C27.1973 4.6665 27.706 4.87722 28.081 5.25229C28.4561 5.62736 28.6668 6.13607 28.6668 6.6665C28.6668 7.19694 28.4561 7.70565 28.081 8.08072C27.706 8.45579 27.1973 8.6665 26.6668 8.6665H5.3335C4.80306 8.6665 4.29436 8.45579 3.91928 8.08072C3.54421 7.70565 3.3335 7.19694 3.3335 6.6665C3.3335 6.13607 3.54421 5.62736 3.91928 5.25229C4.29436 4.87722 4.80306 4.6665 5.3335 4.6665H26.6668Z" fill="#F5F5F5"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1535_8341">
                            <rect width="32" height="32" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </nav>
    )
}