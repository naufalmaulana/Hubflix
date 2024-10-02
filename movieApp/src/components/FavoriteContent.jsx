import Card from './Card'

import { useEffect, useState } from "react"

export default function FavoriteContent(){
    const [favorites, setFavorites] = useState([]);

    function updateFavorites() {
        const favorite = JSON.parse(localStorage.getItem("fav"));
        setFavorites(favorite);
    }

    useEffect(() => {
        updateFavorites();
    }, []);

    return(
        <main className="main">
            <h1 className="mainTitle">
                favorite
            </h1>
            <div className="mainList">
                { 
                    favorites.map((el, i) => (
                        <Card key={i} movies={el} updateFavorites={updateFavorites}/>
                    ))
                }
            </div>
        </main>
    )
}