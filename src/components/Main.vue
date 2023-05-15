<script>
import MobileCarousel from "./partials/MobileCarousel.vue";
import ProductDescription from "./partials/ProductDescription.vue";
import DesktopCarousel from "./partials/DesktopCarousel.vue";

export default {
  components: {
    MobileCarousel,
    ProductDescription,
    DesktopCarousel,
  },

  emits: ["toggle-lightbox"],

  methods: {
    toggleLightbox() {
      this.$emit("toggle-lightbox");
    },
  },
};
</script>

<template>
  <div class="carousel__mobile block desktop:hidden">
    <MobileCarousel />
  </div>
  <div class="carousel__desktop flex flex-col desktop:flex-row container desktop:p-12 gap-32 desktop:items-center">
    <DesktopCarousel class="hidden desktop:flex w-full desktop:w-2/4" @toggle-lightbox="toggleLightbox" />
    <ProductDescription class="w-full" />
  </div>
</template>

<style scoped></style>
