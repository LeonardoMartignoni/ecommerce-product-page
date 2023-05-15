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
  },
};
</script>

<template>
  <div class="lightbox-overlay absolute bg-neutralblack opacity-75 w-full h-full z-20"></div>

  <div class="lightbox absolute w-full h-full z-20 flex justify-center items-center">
    <div class="lightbox__content w-1/3 flex flex-col gap-8">
      <!-- Lightbox exit -->
      <button class="lightbox__exit relative" @click="$emit('toggle-lightbox')">
        <img class="absolute bottom-0 right-0 w-5 svg-white svg-hover-orange transition-all" src="/images/icon-close.svg" alt="Remove lightbox" />
      </button>
      <!-- Lightbox content -->
      <div class="lightbox__content-big-pic relative">
        <img class="rounded-3xl" :src="'/images/' + carouselImages[activeImage]" alt="Shoe product image" />
        <!-- Lightbox controls -->
        <div id="lightbox__controls" class="absolute top-[50%] w-full flex items-center justify-between p-2 translate-y-[-50%]">
          <button id="left-arrow" class="arrow p-3 bg-neutralwhite rounded-full object-contain w-14 h-14 grid place-items-center translate-x-[-75%]" @click="prevImage()">
            <img class="w-3.5" src="/images/icon-previous.svg" />
          </button>
          <button id="right-arrow" class="arrow p-3 bg-neutralwhite rounded-full object-contain w-14 h-14 grid place-items-center translate-x-[75%]" @click="nextImage()">
            <img class="w-3.5" src="/images/icon-next.svg" />
          </button>
        </div>
      </div>
      <div class="lightbox__content-small-pics columns-4 flex justify-evenly">
        <div v-for="(image, index) in carouselImages" class="lightbox__content-photo-single flex justify-center rounded-lg w-1/6 bg-neutralwhite" @click="activeImage = index" :class="activeImage == index ? 'active' : ''">
          <img class="w-full aspect-square" :src="'/images/' + image" alt="Product sliding image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
