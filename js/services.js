const service = {};

service.getMovies = async () => {

    try {
        const response = await fetch('./data/movies.json')
        const movies = await response.json();
        return movies;
        
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

export default service;