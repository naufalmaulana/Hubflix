import { useLocation, useNavigate } from "react-router-dom";

export default function Card({movies, updateFavorites}){
    const navigate = useNavigate();
    const {pathname} = useLocation();

    function addToFavorite() {

        const favs = JSON.parse(localStorage.getItem("fav"));
        if(favs) {
            const newFav = [...favs, movies];
            localStorage.setItem("fav", JSON.stringify(newFav));
        } else {
            localStorage.setItem("fav", JSON.stringify([movies]));
        }

        navigate("/favorite")
    }
    function deleteFavorite() {
        const favs = JSON.parse(localStorage.getItem("fav"));

        const newFav = favs.filter((el) => {
            return el.id !== movies.id;
        })
        localStorage.setItem("fav", JSON.stringify(newFav));

        updateFavorites();
    }
    // console.log(movies);
    return(
        <div className="mainListCard">
            <div className="mainListCardWrap">
                <img src={"https://image.tmdb.org/t/p/original/" + movies.poster_path} alt="image" width="600" height="900"/>
                <h2 className="mainListCardWrapTitle">
                    {movies.title}
                </h2>
                <div className="mainListCardWrapRating">
                    <i className="fa fa-star"></i>
                    {movies.vote_average}
                </div>
                {
                    pathname !== "/favorite" && (
                        <div onClick={addToFavorite} className="mainListCardWrapFavorite add">
                            <i className="fa fa-heart"></i>
                        </div>
                    )
                }
                {
                    pathname === "/favorite" && (
                        <div onClick={deleteFavorite} className="mainListCardWrapFavorite remove">
                            <i className="fa fa-heart"></i>
                        </div>
                    )
                }
            </div>
        </div>
    )
}