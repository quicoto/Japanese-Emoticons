<template>
  <div>
    <section class="container">
      <div class="row" v-if="categories && categories.length > 0">
        <div class="col-sm" v-for="category in categories" :key="category.id">
            {{ category.name }}

            <ul class="list-unstyled" v-if="category.subcategories
            && category.subcategories.length > 0">
              <li v-for="subcategory in category.subcategories" :key="subcategory.id">
                <a :href="'#' + category.id + '-' + subcategory.id">{{ subcategory.name }}</a>
              </li>
            </ul>
        </div>
      </div>
    </section>
    <section>
        <div v-if="categories && categories.length > 0">
          <div :class="'text-white category container-fluid category-'+ index"
          v-for="(category, index) in categories" :key="category.id">
            <div class="container">
            <h3>{{ category.name }}</h3>

              <ul class="bookmarks-list" v-if="category.subcategories
              && category.subcategories.length > 0">
                <li v-for="subcategory in category.subcategories" :key="subcategory.id">
                  <h4 :id="category.id + '-' + subcategory.id">{{ subcategory.name }}</h4>

                  <ul class="bookmarks-list"
                    v-if="subcategory.items && subcategory.items.length > 0">
                    <li v-for="item in subcategory.items" :key="item.id">
                      <span class="item" v-html="decode(item)"></span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>  <!-- .container -->
          </div> <!-- .container-fluid -->
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Bookmarks',
  data: () => ({
    baseUrl: '/Japanese-Emoticons',
    categories: [],
  }),
  methods: {
    /**
     * Decodes special emoticons that can't be stored as string
     * @param {Object} item
     * @param {boolean} item.hasToBeEncoded
     * @param {string} item.value
     * @returns {string}
     */
    decode(item) {
      if (!item) return '';

      if (item.hasToBeDecoded) {
        return decodeURIComponent(escape(window.atob(item.value)));
      }

      return item.value;
    },
  },
  mounted() {
    const that = this;

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
