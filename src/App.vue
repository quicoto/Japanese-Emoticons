<template>
  <main id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#app">Japanese Emoticons</a>
        <button class="navbar-toggler" type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/quicoto/Japanese-Emoticons">Github</a>
            </li>
          </ul>
        </div>
      </div> <!-- .container -->
    </nav>

    <Bookmarks />
    <section class="container-fluid about text-center">
      <div class="container">
        <header>
          <h1 id="about">About</h1>
          <p>Collection of Japanese Emoticons ready to be copied and used.</p>
        </header>

        <p>
          This webapp works well on mobile as well as desktop. Just use your browser!
        </p>

        <p>
          Inspired from <a href="http://kaomoji.ru/en/">http://kaomoji.ru/en/</a> but <strong>without</strong> cryptocurrency mining when viewing the site.
        </p>

        <p>
          No ads and no tracking. Use for free as much as you want.
        </p>
      </div>

      <footer class="container">
        Created by <a href="https://php.quicoto.com/">Ricard Torres</a>
      </footer>
    </section>
  </main>
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


<style lang="scss">
  @import 'assets/scss/bootstrap.min';
  @import 'assets/scss/common';
</style>
