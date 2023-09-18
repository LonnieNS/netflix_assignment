import service from "./services.js"; 
import {movieListTmpl, favListTmpl, viewMoreTmpl} from "./templates.js"; 


const app = {}

app.init = async () => {

    const movies = await service.getMovies();

    const allMoviesContainer = document.querySelector('.all_movies_container');

    if(allMoviesContainer) {
        movies.forEach((movie) => {
            allMoviesContainer.insertAdjacentHTML('beforeend', movieListTmpl(movie));
        })
    }

     /* CRIME CATEGORY */ 
     const crimeListContainer = document.querySelector('.crime_list_content');
     let crimeMovies = movies.filter(movie => movie.Category.includes('Crime')); 
 
     if(crimeListContainer){
         crimeMovies.forEach((movie) => {
             crimeListContainer.insertAdjacentHTML('beforeend', movieListTmpl(movie));
         })
     }
 
     /* SCI FI CATEGORY */ 
     const scifiListContainer = document.querySelector('.sci_fi_list_content');
     let scifiMovies = movies.filter(movie => movie.Category.includes('Science Fiction')); 
 
     if(scifiListContainer){
         scifiMovies.forEach((movie) => {
             scifiListContainer.insertAdjacentHTML('beforeend', movieListTmpl(movie));
         })
     }
 
     /* DRAMA CATEGORY */ 
     const dramaListContainer = document.querySelector('.drama_list_content');
     let dramaMovies = movies.filter(movie => movie.Category.includes('Drama')); 
 
     if(dramaListContainer){
         dramaMovies.forEach((movie) => {
             dramaListContainer.insertAdjacentHTML('beforeend', movieListTmpl(movie));
         })
     }
 
     /* ACTION CATEGORY */ 
     const actionListContainer = document.querySelector('.action_list_content');
     let actionMovies = movies.filter(movie => movie.Category.includes('Action')); 
 
     if(actionListContainer){
         actionMovies.forEach((movie) => {
             actionListContainer.insertAdjacentHTML('beforeend', movieListTmpl(movie));
         })
     }
 
     /* THRILLER CATEGORY */ 
     const thrillerListContainer = document.querySelector('.thriller_list_content');
     let thrillerMovies = movies.filter(movie => movie.Category.includes('Thriller')); 
 
     if(thrillerListContainer){
         thrillerMovies.forEach((movie) => {
             thrillerListContainer.insertAdjacentHTML('beforeend', movieListTmpl(movie));
         })
     }
 

    /* FAVOURITES */

    let favLocalStorage = JSON.parse(localStorage.getItem('favlist')) || [];

    const renderFavs = () => {
 
         const favContainer = document.querySelector('.favourite_list_content');
 
         if(favContainer) {
            favContainer.innerHTML = '';

             if(favLocalStorage.length !== 0) {
 
                 favLocalStorage.forEach((movie) => {
                     favContainer.insertAdjacentHTML('beforeend', favListTmpl(movie));
                 });
                 removeFromFavs();
             } else {
                 favContainer.insertAdjacentHTML ('beforeend', '<p>Du har ingen favoritter</p>')
             }
         }
     }

    const addToFavs = (event) => {
        const movieID = event.target.getAttribute('data-product-id');
        const movieToAdd = movies.find((movie) => movie.Id == movieID);

    if (!favLocalStorage.includes(movieToAdd)) {
        favLocalStorage.push(movieToAdd);
        localStorage.setItem('favlist', JSON.stringify(favLocalStorage));

        renderFavs();
    }
        }
    

    const addBtn = document.querySelectorAll('.add_fav_btn');
    
    addBtn.forEach(btn => {
        btn.addEventListener('click', addToFavs);
    });


    function removeFromFavs() {
        const removeBtn = document.querySelectorAll('.remove_fav_btn');
        removeBtn.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const movieID = e.target.getAttribute('data-product-id');
                const index = favLocalStorage.findIndex((movie) => movie.Id == movieID);
    
                if (index !== -1) {
                    favLocalStorage.splice(index, 1);
                    localStorage.setItem('favlist', JSON.stringify(favLocalStorage));
                }
    
                renderFavs();
            });
        });
    }


        /* MODAL */

        const viewMoreBtn = document.querySelectorAll('.movie_cover_thumb');
        const modalContent = document.querySelector('.view_more_modal')
        const modal = document.querySelector('.modal_container')

        viewMoreBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const movieID = e.target.getAttribute('data-product-id');
                const specificMovie = movies.find((movie) => movie.Id == movieID);
                modal.classList.add('show');
                modalContent.innerHTML= viewMoreTmpl(specificMovie);
            });
        })   

        const closeModalBtn = document.querySelector('.close_btn');

        closeModalBtn.addEventListener('click',() => {
            modal.classList.remove('show');
        })

    renderFavs();
 
}


app.init()