import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
}

interface CartItem extends Product {
    quantity: number;
}

interface AppState {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    favorites: string[];
    toggleFavorite: (productId: string) => void;
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    isFavoritesOpen: boolean;
    setIsFavoritesOpen: (isOpen: boolean) => void;
    isSearchOpen: boolean;
    setIsSearchOpen: (isOpen: boolean) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            theme: 'dark',
            setTheme: (theme) => set({ theme }),
            favorites: [],
            toggleFavorite: (productId) =>
                set((state) => ({
                    favorites: state.favorites.includes(productId)
                        ? state.favorites.filter((id) => id !== productId)
                        : [...state.favorites, productId],
                })),
            cart: [],
            isCartOpen: false,
            setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
            isFavoritesOpen: false,
            setIsFavoritesOpen: (isOpen) => set({ isFavoritesOpen: isOpen }),
            isSearchOpen: false,
            setIsSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
            searchQuery: '',
            setSearchQuery: (searchQuery) => set({ searchQuery }),
            addToCart: (product) =>
                set((state) => {
                    const existingItem = state.cart.find((item) => item.id === product.id);
                    if (existingItem) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return { cart: [...state.cart, { ...product, quantity: 1 }] };
                }),
            removeFromCart: (productId) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== productId),
                })),
            updateQuantity: (productId, quantity) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
                    ),
                })),
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'app-storage',
        }
    )
);
