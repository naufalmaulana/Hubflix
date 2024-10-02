import { useEffect, useState } from 'react';
import Card from './Card'
import { useParams } from 'react-router-dom';

export default function MainContent(){

    const params = useParams();

    const [movies, setMovies] = useState([]);
    const [pageTitle, setPageTitle] = useState(" ");

    async function fetchDiscover(search){
        try{
            let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=1613d0c5135bb1cb88ee8e1bd0acb111`;

            // if (search) {
            //     url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
            // }

            const response = await fetch(url);
            const result = await response.json();
            // console.log(url);
            // console.log(result);
            setMovies(result.results);
            setPageTitle(params.id)
            // console.log(movies);
        } catch (error) {
            console.log('error');
        }
    } 
    useEffect(() => {
        fetchDiscover();
    }, [params]);

    return(
        <main className="main">
            <h1 className="mainTitle">
                {pageTitle.replace('_', ' ')}
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