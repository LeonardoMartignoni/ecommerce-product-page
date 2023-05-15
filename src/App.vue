<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Lightbox from "./components/Lightbox.vue";
import MobileMenu from "./components/MobileMenu.vue";

export default {
  data() {
    return {
      product__amount: 0,
      isLightboxVisible: false,
      isMobileMenuVisible: false,
    };
  },

  components: {
    Navbar,
    Main,
    Lightbox,
    MobileMenu,
  },

  methods: {
    toggleLightbox() {
      this.isLightboxVisible = !this.isLightboxVisible;
    },

    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
  },
};
</script>

<template>
  <Lightbox v-if="isLightboxVisible" @toggle-lightbox="toggleLightbox" />
  <Transition>
    <MobileMenu :key="isMobileMenuVisible" v-if="isMobileMenuVisible" @toggle-mobile-menu="toggleMobileMenu" />
  </Transition>
  <Navbar @toggle-mobile-menu="toggleMobileMenu" />
  <Main @toggle-lightbox="toggleLightbox" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

body {
  font-family: "Kumbh Sans", sans-serif;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
