export const sliderTmpl= (movie) =>
`
    <div class="slider_movie_container">
        <h3 class="slider_movie_title">${movie.Title}</h3>
        <img class="slider_img" src="${movie.Image}">
        </div>
    </div>

`

export const movieListTmpl = (movie) =>
`
    <div class="movie_container">
        <img class="movie_cover_thumb" src="${movie.Image}" data-product-id="${movie.Id}">
        <div class="movie_overlay">
            <h3 class="movie_title">${movie.Title}</h3>
            <button class="add_fav_btn btn" data-product-id="${movie.Id}">Føj til favoritter</button>
        </div>
    </div>
`


export const favListTmpl = (movie) =>
`
    <div class="movie_container" data-product-id="${movie.Id}">
        <img class="movie_cover_thumb" src="${movie.Image}">
        <div class="movie_overlay">
        <h3 class="movie_title">${movie.Title}</h3>
        <button class="remove_fav_btn btn" data-product-id="${movie.Id}">Fjern fra favoritter</button>
        </div>
    </div>
`


export const viewMoreTmpl= (movie) =>
`
    <div class="view_more_movie_container" data-product-id="${movie.Id}">
        <div class="view_more_img_div">
            <img class="view_more_img" src="${movie.Image}">
            </div>
            <div class="view_more_right">
                <h3 class="view_more_movie_title">${movie.Title}</h3>
                <p class="view_more_movie_description">${movie.Description}</p>
            </div>
        </div>
    </div>

`
