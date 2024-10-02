import { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import hubflixLogo from '../assets/img/logo-hubflix-transparent.svg'

// eslint-disable-next-line react/prop-types
export default function Sidebar({handleSearch={handleSearch}}) {
    function closeMenu(){
        document.querySelector('.sidebar').classList.remove('active')
    }

    const [genre, setGenre] = useState([]);
    
    async function fetchGenre(){
        try{
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1613d0c5135bb1cb88ee8e1bd0acb111');
            const result = await response.json();
            // console.log(result);
            setGenre(result.genres);
            // console.log(result.genres);
        } catch (error) {
            console.log('error');
        }
    } 
    useEffect(() => {
        fetchGenre();
    }, []);

    // const [trigger, setTrigger] = useState('test');

    // let sidebarItem = document.querySelectorAll(".sidebarListItem");
    // for (var i = 0; i < sidebarItem.length; i++) {
    //     sidebarItem[i].addEventListener('click', function(event) {
    //         setTrigger("tested")
    //         sidebarItem.classList.remove('active');
    //         this.classList.add('active')
    //     });
    // }
    return(
        <div className="sidebar">
            <div className="sidebarHeader">
                <div className="sidebarHeaderTop">
                    <NavLink to={"/"} className="sidebarListItemLink">
                        <img src={hubflixLogo} alt="hubflix" className="logo" width="119" height="48"/>
                    </NavLink>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeMenu}>
                        <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#F7971D"/>
                    </svg>
                </div>
                <form onSubmit={handleSearch}>
                    <input className="sidebarHeaderSearch" type="text" placeholder="Search"/>
                </form>
            </div>
            <h2 className="sidebarLabel">Discover</h2>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <NavLink to={'/popular'} className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                        Popular
                    </NavLink>
                </li>
                <li className="sidebarListItem">
                    <NavLink to={'/top_rated'} className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                        Top Rated
                    </NavLink>
                </li>
                <li className="sidebarListItem">
                    <NavLink to={'/now_playing'}  className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                        now playing
                    </NavLink>
                </li>
                <li className="sidebarListItem">
                    <NavLink to={"/favorite"} className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                        My Favorite
                    </NavLink>
                </li>
            </ul>
            <h2 className="sidebarLabel">Genres</h2>
            <ul className="sidebarList">
                {genre.map((el, i) => (
                    // console.log(el.id),
                    <li key={i} className="sidebarListItem">
                        <NavLink to={"/genre/" + el.id} className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                            {el.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <h2 className="sidebarLabel">Others</h2>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <NavLink to={"/about"} className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                        About Us
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}