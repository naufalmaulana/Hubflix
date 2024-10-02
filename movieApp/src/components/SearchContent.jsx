import { useEffect, useState } from 'react';
import Card from './Card'
import { useParams } from 'react-router-dom';

export default function SearchContent(){

    const params = useParams();

    const [movies, setMovies] = useState([]);
    const [pageTitle, setPageTitle] = useState(" ");

    async function fetchSearch(){
        try{
            let url = `https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1&api_key=1613d0c5135bb1cb88ee8e1bd0acb111`;

            const response = await fetch(url);
            const result = await response.json();
            console.log(url);
            console.log(result);
    
            setMovies(result.results);
            setPageTitle(params.id)
        } catch (error) {
            console.log('error');
        }
    } 
    useEffect(() => {
        fetchSearch();
    }, [params]);

    return(
        <main className="main">
            <h1 className="mainTitle">
                Search: {pageTitle}
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