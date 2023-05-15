<script>
import { store } from "../data/store.js";

export default {
  data() {
    return {
      navLinks: [
        {
          linkName: "Collections",
          linkHref: "#collections",
        },
        {
          linkName: "Men",
          linkHref: "#men",
        },
        {
          linkName: "Women",
          linkHref: "#women",
        },
        {
          linkName: "About",
          linkHref: "#about",
        },
        {
          linkName: "Contact",
          linkHref: "#contact",
        },
      ],

      store,
    };
  },

  methods: {
    removeItemFromCart(indexItem) {
      this.store.cartItems.splice(indexItem, 1);
    },
  },

  computed: {
    totalItemAmount() {
      let totalItems = 0;

      this.store.cartItems.forEach((item) => {
        totalItems += item.productAmount;
      });

      return totalItems;
    },
  },
};
</script>

<template>
  <nav class="flex justify-between h-[70px] desktop:h-[120px] px-6 relative container border-b-2 border-neutrallightgrayishblue">
    <div id="left-nav" class="flex items-center gap-2 desktop:gap-10">
      <button class="mobile-menu-toggler pe-4 py-4" @click="$emit('toggle-mobile-menu')">
        <img src="/images/icon-menu.svg" alt="Menu" class="max-h-4 desktop:hidden" />
      </button>
      <a href="#" class="h-full flex items-center">
        <img src="/images/logo.svg" alt="Sneakers logo" class="max-h-5" />
      </a>
      <div class="left-nav__list hidden desktop:block h-full">
        <ul class="flex items-center gap-8 text-neutraldarkgrayishblue h-full">
          <li v-for="link in navLinks" class="hover:text-neutralblack h-full nav-link-shadow transition-all cursor-pointer">
            <a class="flex items-center h-full" :href="link.linkHref">{{ link.linkName }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="right-nav flex items-center gap-5 desktop:gap-9">
      <div class="cart flex items-center">
        <button class="cart__icon p-3 -m-3" @click="store.isCartOpen = !store.isCartOpen">
          <div class="cart__icon-content relative">
            <img src="/images/icon-cart.svg" alt="Cart" class="max-h-5" />
            <!-- Cart icon amount -->
            <div class="cart__icon-amount absolute bg-orange top-[-35%] right-[55%]" v-if="totalItemAmount > 0">
              <span class="absolute text-[0.55rem] font-bold text-neutralwhite bg-orange rounded-xl py-[0.025rem] px-[0.4rem]">{{ totalItemAmount }}</span>
            </div>
          </div>
        </button>

        <Transition>
          <!-- Cart Detail -->
          <div id="cart-detail" class="absolute z-10 w-full top-full left-0 p-2 desktop:w-1/4 desktop:right-10 desktop:left-auto desktop:top-20" v-if="store.isCartOpen">
            <div id="cart-detail-info" class="bg-neutralwhite rounded-xl desktop:shadow-2xl">
              <div class="cart-heading p-5">
                <span class="font-bold">Cart</span>
              </div>
              <hr class="border-neutralblack opacity-10" />

              <!-- Empty Cart -->
              <div id="cart__empty" class="py-20 grid place-content-center" v-if="store.cartItems.length == 0">
                <span class="font-bold text-neutraldarkgrayishblue">Your cart is empty.</span>
              </div>

              <!-- Cart with items -->
              <div id="cart__items" class="p-6 flex flex-col gap-6" v-else>
                <TransitionGroup name="list" tag="div">
                  <div id="cart__item" class="flex justify-between items-center text-neutraldarkgrayishblue gap-2 mb-5" v-for="(product, index) in store.cartItems" :key="product">
                    <!-- Item image -->
                    <img :src="'/images/' + product.productImage" alt="Product Image" class="max-h-12 rounded-md" />
                    <!-- Item details -->
                    <div id="cart__item-details">
                      <span class="block">{{ product.productName }}</span>
                      <div id="cart__item-price" class="flex gap-2">
                        <span>${{ product.productPrice }}</span>
                        <span>x {{ product.productAmount }}</span>
                        <span class="font-bold text-neutralblack">${{ (product.productPrice * product.productAmount).toFixed(2) }}</span>
                      </div>
                    </div>
                    <!-- Item remove -->
                    <button id="cart__item-remove" @click="removeItemFromCart(index)">
                      <img src="/images/icon-delete.svg" alt="Remove item from cart" />
                    </button>
                  </div>
                  <!-- Checkout button -->
                  <button class="bg-orange w-[100%] p-3.5 rounded-xl text-neutralwhite font-bold flex justify-center items-center gap-4 shadow-orange hover:opacity-70 transition-opacity">Checkout</button>
                </TransitionGroup>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <button id="profile-icon" class="relative">
        <img class="max-h-6 desktop:max-h-12" src="/images/image-avatar.png" alt="Profile" />
        <div class="profile-hover transition-all"></div>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Product List */

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
