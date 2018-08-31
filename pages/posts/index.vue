<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.name }}</nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://signs-app.herokuapp.com/api/signs')
      .then((res) => {
        return { posts: res.data }
      })
  },
  head: {
    title: 'Listado de posts'
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  padding-top: 10px;
  font-size: 20px;
}
a {
  color: #41B883;
  text-decoration: none;
}
h1 {
  padding-bottom: 10px;
}
</style>
