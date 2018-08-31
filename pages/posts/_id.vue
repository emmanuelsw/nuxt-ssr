
<template>
  <div class="container">
    <h1>{{ post.name }}</h1>
    <pre>{{ post.email }}</pre>
    <p><nuxt-link to="/posts">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    const { data } = await axios.get(`https://signs-app.herokuapp.com/api/signs/${params.id}`)
    return { post: data.sign }
  },
  head() {
    return {
      title: this.post.name
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
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
  padding-top: 15px;
  font-size: 20px;
}
a {
  color: #41B883;
  text-decoration: none;
}
</style>
