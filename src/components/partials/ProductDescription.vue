<script>
import { store } from "../../data/store.js";

export default {
  data() {
    return {
      product__amount: 1,
      store,
    };
  },

  methods: {
    productMinus() {
      if (this.product__amount <= 1) this.product__amount = 1;
      else this.product__amount--;
    },
    productPlus() {
      this.product__amount++;
    },
    addItemToCart() {
      // Add item to cart
      this.store.cartItems.push({
        productImage: "image-product-1.jpg",
        productName: "Fall Limited Edition Sneakers",
        productPrice: "125.00",
        productAmount: this.product__amount,
      });
      // Then open cart
      this.store.isCartOpen = true;
    },
  },
};
</script>

<template>
  <div id="product__info" class="flex flex-col gap-4 p-6 desktop:gap-6 desktop:p-4 desktop:w-3/4 w-full">
    <div id="product__heading" class="flex flex-col gap-2.5 desktop:gap-4">
      <span class="text-orange uppercase font-bold text-xs desktop:text-sm">Sneaker Company</span>
      <h2 class="text-neutralblack font-bold text-[1.65rem] leading-8 desktop:text-5xl">Fall Limited Edition Sneakers</h2>
    </div>

    <div id="product__description">
      <p class="text-neutraldarkgrayishblue text-base">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
    </div>

    <div id="product__pricing" class="flex justify-between items-center desktop:block">
      <div id="product__discount" class="flex items-center gap-4">
        <span class="text-neutralblack font-bold text-[1.65rem]">$125.00</span>
        <span class="bg-paleorange text-orange font-bold py-[1px] px-2 rounded-md">50%</span>
      </div>
      <div id="product__original-price">
        <span class="text-sm font-bold text-neutralgrayishblue"><s>$250.00</s></span>
      </div>
    </div>

    <div id="product__shop" class="flex flex-col gap-4 desktop:flex-row">
      <div id="product__amount" class="bg-neutrallightgrayishblue flex justify-between items-center desktop:p-0 rounded-xl desktop:w-2/4">
        <button class="product__amount-minus py-5 px-6 desktop:p-3 desktop:px-5" @click="productMinus()">
          <img src="/images/icon-minus.svg" />
        </button>
        <span id="product__amount-display" class="font-bold">{{ product__amount }}</span>
        <button class="product__amount-plus py-5 px-6 desktop:p-3 desktop:px-5" @click="productPlus()">
          <img src="/images/icon-plus.svg" />
        </button>
      </div>

      <div id="product__add-to-cart" class="w-full">
        <button class="bg-orange w-full p-3.5 rounded-xl text-neutralwhite font-bold flex justify-center items-center gap-4 hover:opacity-70 transition-opacity" @click="addItemToCart()">
          <img src="/images/icon-cart.svg" class="w-4.5 h-4 svg-white" />
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
