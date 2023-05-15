<script></script>

<template>
  <Transition>
    <div class="mobile__men-overlay absolute w-full h-full bg-neutralblack opacity-75 z-10"></div>
  </Transition>
  <div class="mobile__menu h-full w-2/3 bg-neutralwhite z-10 absolute flex flex-col px-6">
    <button class="mobile__menu-exit py-6 mb-5" @click="$emit('toggle-mobile-menu')">
      <img src="/images/icon-close.svg" alt="Exit navigation menu" />
    </button>
    <div class="mobile__menu-navigations">
      <ul class="font-bold flex flex-col">
        <li><a class="py-1 my-1 inline-block" href="#">Collections</a></li>
        <li><a class="py-1 my-1 inline-block" href="#">Men</a></li>
        <li><a class="py-1 my-1 inline-block" href="#">Women</a></li>
        <li><a class="py-1 my-1 inline-block" href="#">About</a></li>
        <li><a class="py-1 my-1 inline-block" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}
</style>
