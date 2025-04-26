export const getMoviesData= async()=> {
    try {
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=spider-man`);
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}