import { useLoaderData } from "react-router-dom"
import { Card } from "../Components/UI/Card";

export const Movies=()=> {
    const movies = useLoaderData();

    return(
        <>
            <ul className="container grid grid-four--cols">
                { movies.Search.map((currMovie)=>{
                    return(
                    <Card key={currMovie.imdbID} currMovie={currMovie}/>
                )
                })}
            </ul>
        </>
    )
}