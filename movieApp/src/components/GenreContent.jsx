import { useEffect, useState } from 'react';
import Card from './Card'
import { useParams } from 'react-router-dom';

export default function MainContent(){

    let genreName = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]

    const params = useParams();

    const [movies, setMovies] = useState([]);
    const [pageTitle, setPageTitle] = useState(" ");
    const [isError, setIsError] = useState(false);


    async function fetchGenreMovie(){
        try{
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1613d0c5135bb1cb88ee8e1bd0acb111&with_genres=${params.id}`);
            const result = await response.json();
            // console.log(result);
            setMovies(result.results);
            setPageTitle(params.id)
            // console.log(movies);
        } catch (error) {
            console.log('error');
            setIsError(true);
        }
    } 
    useEffect(() => {
        fetchGenreMovie();
    }, [params]);
    if(isError){
        return(
            <>
                <h1 className='text-white'>Data not found</h1>
            </>
        )
    }

    return(
        <main className="main">
            <h1 className="mainTitle">
                {
                    genreName.find((el,i) => (
                        el.id == pageTitle
                    ))?.name
                    // pageTitle
                }
            </h1>
            <div className="mainList">
                { 

                    movies.map((el, i) => (
                        <Card key={i} movies={el}/>
                    ))
                    // Array.from({ length: 12}).map((el, i) => {
                    //     return <Card key={i}/>
                    // }) 
                }
            </div>
        </main>
    )
}