<script>
export default {
  data() {
    return {
      carouselImages: ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"],

      activeImage: 0,
    };
  },
};
</script>

<template>
  <div class="carousel__desktop-content">
    <div class="carousel__big-photo flex flex-col gap-8">
      <img class="rounded-2xl object-cover cursor-pointer" :src="'/images/' + carouselImages[activeImage]" alt="Product image" @click="$emit('toggle-lightbox')" />
      <div class="carousel__sliding-photos columns-4 flex gap-8">
        <div v-for="(image, index) in carouselImages" class="carousel__sliding-photo-single rounded-2xl" @click="activeImage = index" :class="activeImage == index ? 'active' : ''">
          <img class="w-full aspect-square transition-all" :src="'/images/' + image" alt="Product sliding image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
