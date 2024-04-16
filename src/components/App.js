import Poster from "./Poster.js";

const App = async () => {
  const el = document.createElement('div');

  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ5ZjBhNDAwZWFjZjQ4NDVjMTg5MDUwZmRjYTU0ZiIsInN1YiI6IjY2MTc0ZDlhMGE1MTdjMDE3ZGZmODMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y1n_hJzaZ-ZdrlHyY7WPGTz0NsfZ9RTfAY4bwYWd6hk'
    }
  };
  const mandado = await fetch(url, options);
  let datos = await mandado.json();
  let pagina = 1;


  el.className = 'App';
  el.innerHTML = /*html*/`
  <header>
   
  </header>
  <main id="muro" class="muro">
  
    ${datos.results.map(pelicula => Poster(pelicula)).join("")
    }
  </main>
<footer> 
<button id="anterior" type="button">Anterior</button>
<button id="siguiente" type="button">Siguiente</button>
</footer>
<style>
.muro{
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
    gap: 1.5rem;
    padding: 1.5rem;
}

</style>
  `
  el.addEventListener("load", () => {
    const $muro = el.querySelector("#muro")
    const $anterior = el.querySelector("#anterior")
    $anterior.addEventListener("click", async () => {
      pagina = pagina - 1;
      const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + pagina + '&sort_by=popularity.desc';
      const mandado = await fetch(url, options);
      datos = await mandado.json();
      $muro.innerHTML = datos.results.map(pelicula => Poster(pelicula)).join("")
    });

    const $siguiente = el.querySelector("#siguiente")
    $siguiente.addEventListener("click", async () => {
      pagina = pagina + 1;
      const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + pagina + '&sort_by=popularity.desc';
      const mandado = await fetch(url, options);
      datos = await mandado.json();
      $muro.innerHTML = datos.results.map(pelicula => Poster(pelicula)).join("")
    })
  })

  return el;
};

export default App;
