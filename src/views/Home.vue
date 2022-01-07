<template>
  <div class="home">
    <div>
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" alt="Main Image">
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="What are you looking for?" v-model="search" />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import env from '@/env.js'

export default {
  name: 'Home',
  setup () {
    const search = ref("");
    const movies = ref([]);
    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
            .then(response => response.json())
            .then(data => {
              movies.value = data.Search;
              search.value = "";
            });
      }
    }
    return {
      search,
      movies,
      SearchMovies
    }
  }
}
</script>
