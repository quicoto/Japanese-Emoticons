<template>
  <div>
    <h1>Bookmarks</h1>
    <section class="bookmarks-section">
        <ul class="bookmarks-list" v-if="categories && categories.length > 0">
          <li v-for="category in categories" :key="category.id">
            {{ category.name }}

            <ul class="bookmarks-list" v-if="category.subcategories && category.subcategories.length > 0">
              <li v-for="subcategory in category.subcategories" :key="subcategory.id">
                {{ subcategory.name }}

                <ul class="bookmarks-list" v-if="subcategory.items && subcategory.items.length > 0">
                  <li v-for="item in subcategory.items" :key="item.id">
                    <span v-html="item.value"></span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Bookmarks',
  data: () => ({
    categories: [],
  }),
  mounted() {
    const that = this;

    console.log(this.categories);

    fetch('data/data.json')
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${response.status}`);
          return;
        }

        response.json().then((data) => {
          that.categories = data.categories;
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
.bookmarks {
  &-section {
    text-align: left;
  }

  &-list {
    margin-left: 15px;
  }
}
</style>
