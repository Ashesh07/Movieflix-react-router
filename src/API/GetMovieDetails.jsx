export const getMoviesDetails = async ({params})=> {
    //cannot use useParams() here because hooks can't be defined inside functions or conditions
    //instead directly destructure params as function parameter
    const id = params.movieID;
    try {
        const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}