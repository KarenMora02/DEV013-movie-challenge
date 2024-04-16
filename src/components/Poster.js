const Poster = ({original_title, poster_path, release_date}) => {
    return /*html*/`
    <section class="poster_item" itemtype="pelicula">
        <img class="poster_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="MDN" itemprop="poster_path"/>
        <article class="poster_informacion">
            <h2 class="poster_titulo" itemprop="original_title" >${original_title}</h2>
            <span class="poster_fecha" itemprop="release_date">${release_date}</span>
        </article>
    </section>
    <style>
.poster_item{
 width:100%;
 height: 300px;
 border: blue solid 1px;
 position: relative;
 overflow: hidden;
 border-radius: 1rem;
}
    
.poster_img{
    
   width:100%;
   height:100%;


}
.poster_informacion{
   position: absolute;
 bottom: 0px;
 height: 4rem;
 width: 100%;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #00000088;
color: white;


}
.poster_titulo{
    white-space: nowrap;
    text-overflow: hidden;
    margin: 0;
    padding: 0;


}

.poster_fecha{
    margin: 0;
    padding: 0;
}

    </style>
  
    `
  
    
  };
  
  export default Poster;