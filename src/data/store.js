import { reactive } from "vue";

export const store = reactive({
  cartItems: [
    {
      productImage: "image-product-1.jpg",
      productName: "Fall Limited Edition Sneakers",
      productPrice: "125.00",
      productAmount: 3,
    },
  ],

  isCartOpen: false,
});
