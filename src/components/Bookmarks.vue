<template>
  <div>
    <h1>Bookmarks</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bookmarks',
  data: () => ({
    categories: [],
  }),
  mounted: () => {
    fetch('../data/data.json')
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${response.status}`);
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          console.log(data);
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
