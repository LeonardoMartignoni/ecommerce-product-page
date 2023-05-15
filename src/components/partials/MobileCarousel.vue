<script>
export default {
  data() {
    return {
      carouselImages: ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"],

      activeImage: 0,
    };
  },

  methods: {
    prevImage() {
      if (this.activeImage <= 0) this.activeImage = this.carouselImages.length - 1;
      else this.activeImage--;
    },
    nextImage() {
      if (this.activeImage >= this.carouselImages.length - 1) this.activeImage = 0;
      else this.activeImage++;
    },
    getImgUrl(image) {
      return "images/" + image;
    },
  },
};
</script>

<template>
  <div class="carousel">
    <div class="carousel-data h-[300px] relative">
      <!-- Carousel Image -->
      <img :src="'/images/' + carouselImages[activeImage]" alt="Shoe carousel image" class="object-cover h-[100%] w-[100%]" />

      <!-- Controls -->
      <div id="carousel-controls" class="desktop:hidden absolute inset-0 w-[100%] flex items-center justify-between p-2">
        <button id="left-arrow" class="p-3 bg-neutralwhite rounded-full object-contain w-10 h-10 grid place-items-center" @click="prevImage()">
          <img class="w-2.5" src="/images/icon-previous.svg" />
        </button>
        <button id="right-arrow" class="p-3 bg-neutralwhite rounded-full object-contain w-10 h-10 grid place-items-center" @click="nextImage()">
          <img class="w-2.5" src="/images/icon-next.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
