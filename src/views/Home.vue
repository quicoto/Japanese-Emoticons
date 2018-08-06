<template>
  <div class="home">
    <Bookmarks />
  </div>
</template>

<script>
// @ is an alias to /src
import Bookmarks from '@/components/Bookmarks.vue';

export default {
  name: 'home',
  components: {
    Bookmarks,
  },
};
</script>
