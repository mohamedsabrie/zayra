import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "../types";

// Define the Cart Item type
export interface CartItem extends ProductType {
  quantity: number;
}

// Define the store interface
interface CartStore {
  cart: CartItem[];
  addToCart: (product: ProductType, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Create the Zustand store with persist middleware
const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      // Add product to cart
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            // Replace the quantity instead of adding to it
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: quantity } : item
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity }],
          };
        });
      },

      // Remove product from cart
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      // Update quantity of a product in cart
      updateQuantity: (productId, quantity) => {
        set((state) => {
          // If quantity is 0 or less, remove the item
          if (quantity <= 0) {
            return {
              cart: state.cart.filter((item) => item.id !== productId),
            };
          }

          // Update quantity
          return {
            cart: state.cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          };
        });
      },

      // Clear entire cart
      clearCart: () => {
        set({ cart: [] });
      },

      // Get total number of items in cart
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      // Get total price of items in cart
      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => {
        // Return the callback function that has access to set
        return (persistedState: CartStore | undefined) => {
          if (persistedState) {
            useCartStore.setState(persistedState);
          }
        };
      },
    }
  )
);

// Initialize store after mount
if (typeof window !== "undefined") {
  useCartStore.persist.rehydrate();
}

export default useCartStore;
